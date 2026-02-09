import { ref } from 'vue'

/**
 * 复制富文本到剪贴板
 * 策略：ClipboardItem(html) → execCommand('insertHTML') → 纯文本兜底
 */
async function copyHtmlToClipboard(html) {
  if (typeof html !== 'string') return false

  try {
    const blob = new Blob([html], { type: 'text/html' })
    const item = new ClipboardItem({ 'text/html': blob, 'text/plain': new Blob([html], { type: 'text/plain' }) })
    await navigator.clipboard.write([item])
    return true
  } catch (_) {}

  try {
    const area = document.createElement('textarea')
    area.value = html
    area.style.position = 'fixed'
    area.style.left = '-9999px'
    document.body.appendChild(area)
    area.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(area)
    if (ok) return true
  } catch (_) {}

  try {
    await navigator.clipboard.writeText(html)
    return true
  } catch (_) {}

  return false
}

export function useClipboard() {
  const isCopying = ref(false)
  const copySuccess = ref(false)
  let restoreTimer = null

  async function copyHtml(html) {
    if (isCopying.value) return false
    isCopying.value = true
    copySuccess.value = false
    if (restoreTimer) clearTimeout(restoreTimer)

    try {
      const ok = await copyHtmlToClipboard(html)
      if (ok) {
        copySuccess.value = true
        restoreTimer = setTimeout(() => {
          copySuccess.value = false
          restoreTimer = null
        }, 3000)
      }
      return ok
    } finally {
      isCopying.value = false
    }
  }

  return { isCopying, copySuccess, copyHtml }
}
