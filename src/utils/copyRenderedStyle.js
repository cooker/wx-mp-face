import { fileToBase64 } from './imageUtils.js'

/**
 * 将当前预览生成带 base64 图片的 HTML 字符串
 * @param {Array} previewImages
 * @param {number} cropWidth
 * @param {number} cropHeight
 * @param {number} [gridColumns=3]
 * @param {number} [gridRows=0] 0 表示自动
 * @returns {Promise<string>}
 */
export async function getRenderedStyleHtml(previewImages, cropWidth, cropHeight, gridColumns = 3, gridRows = 0) {
  const w = cropWidth || 1
  const h = cropHeight || 1
  const cols = Math.max(1, Math.min(12, gridColumns || 3))
  const rows = gridRows > 0 ? Math.max(1, Math.min(12, gridRows)) : 0
  const gridCols = `repeat(${cols},1fr)`
  const gridRowsCss = rows > 0 ? `grid-template-rows:repeat(${rows},1fr);` : ''
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
  return `<section class="preview-grid" style="display:grid;grid-template-columns:${gridCols};${gridRowsCss}gap:6px" aria-label="图片排列">\n${cells}\n</section>`
}
