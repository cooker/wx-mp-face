import { describe, it, expect } from 'vitest'
import { runUploadTasksWithRetry } from './uploadRetryQueue.js'

function createTask(name, outcomes) {
  let index = 0
  const task = async () => {
    const outcome = outcomes[index] ?? outcomes[outcomes.length - 1]
    index += 1
    if (outcome instanceof Error) throw outcome
    return outcome
  }
  return { name, task }
}

describe('runUploadTasksWithRetry', () => {
  it('串行执行任务并在失败时最多重试 3 次', async () => {
    const tasks = [
      createTask('a.jpg', [new Error('fail-1'), 'ok-a']),
      createTask('b.jpg', [new Error('fail-1'), new Error('fail-2'), 'ok-b']),
      createTask('c.jpg', [new Error('fail-1'), new Error('fail-2'), new Error('fail-3')]),
    ]

    const calls = []
    const result = await runUploadTasksWithRetry(tasks, {
      maxAttempts: 3,
      onAttempt: ({ taskIndex, attempt }) => {
        calls.push(`${taskIndex}-${attempt}`)
      },
    })

    expect(calls).toEqual([
      '0-1',
      '0-2',
      '1-1',
      '1-2',
      '1-3',
      '2-1',
      '2-2',
      '2-3',
    ])
    expect(result).toHaveLength(3)
    expect(result[0].status).toBe('fulfilled')
    expect(result[1].status).toBe('fulfilled')
    expect(result[2].status).toBe('rejected')
    expect(result[2].attempts).toBe(3)
  })
})
