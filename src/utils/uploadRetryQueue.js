/**
 * 串行执行上传任务。单任务失败后自动重试，直到达到最大尝试次数。
 * @param {Array<{ task: () => Promise<any> }>} tasks
 * @param {{
 *   maxAttempts?: number,
 *   onAttempt?: (ctx: { taskIndex: number, attempt: number }) => void
 * }} options
 */
export async function runUploadTasksWithRetry(tasks, options = {}) {
  const maxAttempts = Math.max(1, options.maxAttempts || 3)
  const onAttempt = typeof options.onAttempt === 'function' ? options.onAttempt : null
  const results = []

  for (let taskIndex = 0; taskIndex < tasks.length; taskIndex += 1) {
    const currentTask = tasks[taskIndex]
    let attempt = 0
    let successValue
    let lastError

    while (attempt < maxAttempts) {
      attempt += 1
      onAttempt?.({ taskIndex, attempt })
      try {
        successValue = await currentTask.task()
        lastError = null
        break
      } catch (error) {
        lastError = error
      }
    }

    if (lastError == null) {
      results.push({
        status: 'fulfilled',
        value: successValue,
        attempts: attempt,
      })
    } else {
      results.push({
        status: 'rejected',
        reason: lastError,
        attempts: attempt,
      })
    }
  }

  return results
}
