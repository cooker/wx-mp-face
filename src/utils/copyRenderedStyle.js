import { fileToBase64 } from './imageUtils.js'

/**
 * 将当前预览生成带 base64 图片的 HTML，并写入剪贴板
 */
export async function copyRenderedStyle(previewImages, cropWidth, cropHeight) {
  const w = cropWidth || 1
  const h = cropHeight || 1
  const base64List = await Promise.all(
    previewImages.map((img) => (img.file ? fileToBase64(img.file) : Promise.resolve(img.url)))
  )
  const cells = base64List
    .map((src, i) => {
      const img = previewImages[i]
      const alt = (img?.file?.name || '').replace(/"/g, '&quot;')
      return `  <div style="overflow:hidden;border-radius:4px;border:1px solid #e5e7eb;background:#f3f4f6;aspect-ratio:${w}/${h}"><img src="${src}" alt="${alt}" style="width:100%;height:100%;object-fit:cover;object-position:center center" /></div>`
    })
    .join('\n')
  const html = `<section class="preview-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px" aria-label="图片排列">\n${cells}\n</section>`
  await navigator.clipboard?.writeText(html)
}
