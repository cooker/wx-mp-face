/**
 * 图片工具：尺寸读取、Base64 转换
 */

export function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject()
    }
    img.src = url
  })
}

export function getImageDimensionsFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject
    img.src = url
  })
}

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result)
    r.onerror = reject
    r.readAsDataURL(file)
  })
}

/**
 * 将图片按 center-cover 裁剪为指定尺寸，返回 jpeg Blob
 * @param {File|string} source - File 或 blob/data URL
 * @param {number} cropWidth
 * @param {number} cropHeight
 * @returns {Promise<Blob>}
 */
export function centerCropToBlob(source, cropWidth, cropHeight) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const revoke = (url) => {
      if (url && url.startsWith('blob:')) URL.revokeObjectURL(url)
    }
    img.onload = () => {
      const w = img.naturalWidth
      const h = img.naturalHeight
      const scale = Math.max(cropWidth / w, cropHeight / h)
      const srcW = cropWidth / scale
      const srcH = cropHeight / scale
      const srcX = (w - srcW) / 2
      const srcY = (h - srcH) / 2

      const canvas = document.createElement('canvas')
      canvas.width = cropWidth
      canvas.height = cropHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, cropWidth, cropHeight)

      canvas.toBlob(
        (blob) => {
          revoke(img.src)
          if (blob) resolve(blob)
          else reject(new Error('Canvas toBlob failed'))
        },
        'image/jpeg',
        0.92
      )
    }
    img.onerror = () => {
      revoke(img.src)
      reject(new Error('Image load failed'))
    }
    if (typeof source === 'string') {
      img.crossOrigin = 'anonymous'
      img.src = source
    } else {
      img.src = URL.createObjectURL(source)
    }
  })
}
