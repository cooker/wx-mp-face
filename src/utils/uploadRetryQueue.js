/**
 * 先并发上传全部任务；仅失败的项进入串行队列逐张重试。
 * @param {Array<{ task: () => Promise<any> }>} tasks
 * @param {{
 *   maxSerialRetry?: number,
 *   onAttempt?: (ctx: {
 *     phase: 'concurrent' | 'serial',
 *     taskIndex: number,
 *     attempt: number,
 *     total: number,
 *     completedConcurrent?: number,
 *   }) => void
 * }} options
 * @returns {Promise<Array<{ status: 'fulfilled' | 'rejected', value?: any, reason?: any, attempts: number }>>}
 */
export async function runUploadConcurrentThenSerialRetry(tasks, options = {}) {
  const maxSerialRetry = Math.max(0, options.maxSerialRetry ?? 3)
  const onAttempt = typeof options.onAttempt === 'function' ? options.onAttempt : null
  const total = tasks.length
  const results = []

  if (total === 0) return results

  let completedConcurrent = 0
  const settled = await Promise.allSettled(
    tasks.map((t, taskIndex) =>
      t.task().finally(() => {
        completedConcurrent += 1
        onAttempt?.({
          phase: 'concurrent',
          taskIndex,
          attempt: 1,
          total,
          completedConcurrent,
        })
      })
    )
  )

  for (let i = 0; i < total; i += 1) {
    const s = settled[i]
    if (s.status === 'fulfilled') {
      results.push({ status: 'fulfilled', value: s.value, attempts: 1 })
    } else {
      results.push({ status: 'rejected', reason: s.reason, attempts: 1 })
    }
  }

  for (let taskIndex = 0; taskIndex < total; taskIndex += 1) {
    if (results[taskIndex].status !== 'rejected') continue

    let attempts = results[taskIndex].attempts

    for (let r = 0; r < maxSerialRetry; r += 1) {
      onAttempt?.({
        phase: 'serial',
        taskIndex,
        attempt: r + 1,
        total,
      })
      try {
        const value = await tasks[taskIndex].task()
        attempts += 1
        results[taskIndex] = { status: 'fulfilled', value, attempts }
        break
      } catch (error) {
        attempts += 1
        if (r + 1 === maxSerialRetry) {
          results[taskIndex] = { status: 'rejected', reason: error, attempts }
        }
      }
    }
  }

  return results
}

/** @deprecated 使用 runUploadConcurrentThenSerialRetry；保留兼容旧调用 */
export async function runUploadTasksWithRetry(tasks, options = {}) {
  return runUploadConcurrentThenSerialRetry(tasks, {
    maxSerialRetry: Math.max(0, (options.maxAttempts || 3) - 1),
    onAttempt: options.onAttempt
      ? (ctx) =>
          options.onAttempt({
            taskIndex: ctx.taskIndex,
            attempt: ctx.phase === 'concurrent' ? 1 : ctx.attempt + 1,
          })
      : undefined,
  })
}
