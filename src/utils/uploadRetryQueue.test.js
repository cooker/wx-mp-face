import { describe, it, expect } from 'vitest'
import {
  runUploadConcurrentThenSerialRetry,
  runUploadTasksWithRetry,
} from './uploadRetryQueue.js'

function createTask(outcomes) {
  let index = 0
  const task = async () => {
    const outcome = outcomes[index] ?? outcomes[outcomes.length - 1]
    index += 1
    if (outcome instanceof Error) throw outcome
    return outcome
  }
  return { task }
}

describe('runUploadConcurrentThenSerialRetry', () => {
  it('先并发执行，仅失败项串行重试', async () => {
    const tasks = [
      createTask(['ok-0']),
      createTask([new Error('c-fail'), 'ok-1']),
      createTask([new Error('c-fail'), new Error('s1'), 'ok-2']),
    ]

    const phases = []
    const result = await runUploadConcurrentThenSerialRetry(tasks, {
      maxSerialRetry: 3,
      onAttempt: (ctx) => {
        phases.push(`${ctx.phase}:${ctx.taskIndex}:${ctx.attempt ?? ''}:${ctx.completedConcurrent ?? ''}`)
      },
    })

    expect(result[0].status).toBe('fulfilled')
    expect(result[0].value).toBe('ok-0')
    expect(result[1].status).toBe('fulfilled')
    expect(result[2].status).toBe('fulfilled')
    expect(result[2].value).toBe('ok-2')

    const concurrentPhases = phases.filter((p) => p.startsWith('concurrent:'))
    expect(concurrentPhases.length).toBe(3)

    const serialPhases = phases.filter((p) => p.startsWith('serial:'))
    expect(serialPhases.some((p) => p.startsWith('serial:1:'))).toBe(true)
    expect(serialPhases.some((p) => p.startsWith('serial:2:'))).toBe(true)
  })

  it('并发全部失败后按顺序串行重试直至用尽次数', async () => {
    const tasks = [
      createTask([new Error('a'), new Error('a2')]),
      createTask([new Error('b'), new Error('b2')]),
    ]

    const result = await runUploadConcurrentThenSerialRetry(tasks, {
      maxSerialRetry: 1,
    })

    expect(result[0].status).toBe('rejected')
    expect(result[1].status).toBe('rejected')
  })

})

describe('runUploadTasksWithRetry (兼容)', () => {
  it('委托并发+串行逻辑', async () => {
    const tasks = [createTask([new Error('x'), 'ok'])]
    const result = await runUploadTasksWithRetry(tasks, { maxAttempts: 3 })
    expect(result[0].status).toBe('fulfilled')
  })
})
