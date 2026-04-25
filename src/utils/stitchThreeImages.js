/**
 * 从 File 或图片 URL 加载为 Image
 * @param {File|string} src
 */
function loadImageSource(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    if (typeof src === 'string') {
      if (src.startsWith('http://') || src.startsWith('https://')) {
        img.crossOrigin = 'anonymous'
      }
      img.onload = () => resolve({ img, w: img.naturalWidth, h: img.naturalHeight })
      img.onerror = () => reject(new Error('图片加载失败'))
      img.src = src
      return
    }
    if (!(src instanceof Blob)) {
      reject(new Error('无效图片源'))
      return
    }
    const url = URL.createObjectURL(src)
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({ img, w: img.naturalWidth, h: img.naturalHeight })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('图片加载失败'))
    }
    img.src = url
  })
}

/**
 * 按比例缩放整张 canvas（高质量双线性）
 * @param {HTMLCanvasElement} canvas
 * @param {number} factor 建议 0.1–2
 */
function scaleCanvas(canvas, factor) {
  const f = Math.max(0.05, Math.min(2, factor))
  if (f >= 0.999 && f <= 1.001) return canvas
  const w = Math.max(1, Math.round(canvas.width * f))
  const h = Math.max(1, Math.round(canvas.height * f))
  const out = document.createElement('canvas')
  out.width = w
  out.height = h
  const ctx = out.getContext('2d')
  if (!ctx) return canvas
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(canvas, 0, 0, w, h)
  return out
}

/**
 * 将最多 3 张图片绘制到一张 canvas（横向或纵向），返回 JPEG Blob 与预览用 object URL
 * @param {(File|string)[]} sources File 或可跨域加载的图片 URL（blob/data/https）
 * @param {{
 *   direction?: 'horizontal' | 'vertical',
 *   maxSide?: number,
 *   outputScale?: number,
 * }} options
 * - maxSide：单图参与布局时的最大边（像素），用于统一缩放各图
 * - outputScale：整张拼接结果再缩放倍数（默认 1），如 0.5 为缩小一半
 */
export async function stitchImagesToCanvas(sources, options = {}) {
  const direction = options.direction === 'vertical' ? 'vertical' : 'horizontal'
  const maxSide = Math.max(256, Math.min(4096, options.maxSide || 1200))
  const outputScale = Math.max(0.05, Math.min(2, options.outputScale ?? 1))

  const list = (sources || []).filter(Boolean).slice(0, 3)
  if (!list.length) return { blob: null, previewUrl: '' }

  const images = await Promise.all(list.map((src) => loadImageSource(src)))

  let canvasW = 0
  let canvasH = 0

  if (direction === 'horizontal') {
    const targetH = Math.min(maxSide, ...images.map(({ h }) => h))
    const scaled = images.map(({ img, w, h }) => {
      const th = targetH
      const tw = Math.round((w / h) * th)
      return { img, w: tw, h: th }
    })
    canvasW = scaled.reduce((s, x) => s + x.w, 0)
    canvasH = targetH
    const canvas = document.createElement('canvas')
    canvas.width = canvasW
    canvas.height = canvasH
    const ctx = canvas.getContext('2d')
    if (!ctx) return { blob: null, previewUrl: '' }
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvasW, canvasH)
    let x = 0
    for (const { img, w, h } of scaled) {
      ctx.drawImage(img, x, 0, w, h)
      x += w
    }
    const outCanvas = scaleCanvas(canvas, outputScale)
    return canvasToJpegPreview(outCanvas)
  }

  const targetW = Math.min(maxSide, ...images.map(({ w }) => w))
  const scaled = images.map(({ img, w, h }) => {
    const tw = targetW
    const th = Math.round((h / w) * tw)
    return { img, w: tw, h: th }
  })
  canvasW = targetW
  canvasH = scaled.reduce((s, x) => s + x.h, 0)
  const canvas = document.createElement('canvas')
  canvas.width = canvasW
  canvas.height = canvasH
  const ctx = canvas.getContext('2d')
  if (!ctx) return { blob: null, previewUrl: '' }
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvasW, canvasH)
  let y = 0
  for (const { img, w, h } of scaled) {
    ctx.drawImage(img, 0, y, w, h)
    y += h
  }
  const outCanvas = scaleCanvas(canvas, outputScale)
  return canvasToJpegPreview(outCanvas)
}

function canvasToJpegPreview(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          resolve({ blob: null, previewUrl: '' })
          return
        }
        const previewUrl = URL.createObjectURL(blob)
        resolve({ blob, previewUrl })
      },
      'image/jpeg',
      0.92
    )
  })
}
