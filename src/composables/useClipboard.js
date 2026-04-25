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

async function convertImageBlobToPng(blob) {
  if (!blob || typeof document === 'undefined') return null
  const srcUrl = URL.createObjectURL(blob)
  try {
    const img = await new Promise((resolve, reject) => {
      const el = new Image()
      el.onload = () => resolve(el)
      el.onerror = () => reject(new Error('image decode failed'))
      el.src = srcUrl
    })
    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth || img.width || 1
    canvas.height = img.naturalHeight || img.height || 1
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    ctx.drawImage(img, 0, 0)
    const pngBlob = await new Promise((resolve) => {
      canvas.toBlob((nextBlob) => resolve(nextBlob || null), 'image/png')
    })
    return pngBlob
  } catch (_) {
    return null
  } finally {
    URL.revokeObjectURL(srcUrl)
  }
}

/**
 * 复制图片 Blob 到剪贴板（便于粘贴到微信、文档等）
 */
export async function copyImageBlobToClipboard(blob) {
  if (!blob || typeof ClipboardItem === 'undefined' || !navigator?.clipboard?.write) return false
  const sourceType = blob.type && /^image\//.test(blob.type) ? blob.type : 'image/png'
  try {
    await navigator.clipboard.write([new ClipboardItem({ [sourceType]: blob })])
    return true
  } catch (_) {}
  if (sourceType !== 'image/png') {
    try {
      // 某些环境仅接受 image/png 键名，先做轻量兼容重试
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
      return true
    } catch (_) {}
  }
  const pngBlob = await convertImageBlobToPng(blob)
  if (pngBlob) {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': pngBlob })])
      return true
    } catch (_) {}
  }
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
