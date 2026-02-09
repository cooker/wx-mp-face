import { ref, computed, watch } from 'vue'
import { getImageDimensions, getImageDimensionsFromUrl } from '../utils/imageUtils.js'

/**
 * 上传图片、按尺寸分组、裁剪分辨率、勾选分组
 */
export function useUploadedImages() {
  const fileInputRef = ref(null)
  const uploadedImages = ref([])
  const cropWidth = ref(224)
  const cropHeight = ref(224)
  const gridColumns = ref(3)
  const gridRows = ref(0)
  const isDragging = ref(false)
  const showPreview = ref(false)
  const checkedGroupKeys = ref([])

  const groups = computed(() => {
    const map = new Map()
    for (const img of uploadedImages.value) {
      const key = `${img.width}×${img.height}`
      if (!map.has(key)) map.set(key, [])
      map.get(key).push(img)
    }
    return Array.from(map.entries()).map(([key, items]) => ({ key, items }))
  })

  const previewImages = computed(() => {
    const checked = new Set(checkedGroupKeys.value)
    const list = []
    for (const g of groups.value) {
      if (checked.size === 0 || checked.has(g.key)) list.push(...g.items)
    }
    return list
  })

  const previewCellStyle = computed(() => ({
    aspectRatio: `${cropWidth.value || 1}/${cropHeight.value || 1}`,
  }))

  const previewGridStyle = computed(() => {
    const cols = Math.max(1, Math.min(12, gridColumns.value || 3))
    const rows = gridRows.value > 0 ? Math.max(1, Math.min(12, gridRows.value)) : 0
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      ...(rows > 0 && { gridTemplateRows: `repeat(${rows}, 1fr)` }),
      gap: '6px',
    }
  })

  const previewImgStyle = computed(() => ({
    objectPosition: 'center center',
  }))

  async function addFiles(files) {
    if (!files?.length) return
    const list = [...uploadedImages.value]
    for (const file of files) {
      if (!file.type.startsWith('image/')) continue
      try {
        const { width, height } = await getImageDimensions(file)
        list.push({ file, url: URL.createObjectURL(file), width, height })
      } catch (_) {}
    }
    uploadedImages.value = list
  }

  async function addRemoteImage(url) {
    const u = url?.trim()
    if (!u) return
    const item = { file: null, url: u, width: 224, height: 224 }
    uploadedImages.value = [...uploadedImages.value, item]
    getImageDimensionsFromUrl(u)
      .then((dim) => {
        const list = [...uploadedImages.value]
        const i = list.findIndex((x) => x.url === u)
        if (i >= 0) {
          list[i] = { ...list[i], width: dim.width, height: dim.height }
          uploadedImages.value = list
        }
      })
      .catch(() => {})
  }

  function triggerFileInput() {
    fileInputRef.value?.click()
  }

  function onFileChange(e) {
    addFiles(Array.from(e.target.files || []))
    e.target.value = ''
  }

  function onDrop(e) {
    isDragging.value = false
    addFiles(Array.from(e.dataTransfer?.files || []).filter((f) => f.type.startsWith('image/')))
  }

  function clearImages() {
    for (const img of uploadedImages.value) {
      if (img.url?.startsWith('blob:')) URL.revokeObjectURL(img.url)
    }
    uploadedImages.value = []
    checkedGroupKeys.value = []
    showPreview.value = false
  }

  /** 将本地图片（blob URL）替换为远程 CDN URL，用于确认上传后 */
  function replaceLocalWithRemoteUrls(urlMap) {
    if (!urlMap || !(urlMap instanceof Map) || urlMap.size === 0) return
    uploadedImages.value = uploadedImages.value.map((item) => {
      const newUrl = item.url && urlMap.get(item.url)
      if (newUrl) {
        if (item.url?.startsWith('blob:')) URL.revokeObjectURL(item.url)
        return { ...item, file: null, url: newUrl }
      }
      return item
    })
  }

  watch(groups, (next, prev) => {
    const prevLen = prev?.length ?? 0
    if (next.length > 0 && (prevLen === 0 || next.length > prevLen)) {
      checkedGroupKeys.value = next.map((g) => g.key)
    }
  })

  watch(uploadedImages, (next) => {
    if (next.length > 0) {
      cropWidth.value = Math.min(...next.map((img) => img.width))
      cropHeight.value = Math.min(...next.map((img) => img.height))
    }
  }, { deep: true })

  return {
    fileInputRef,
    uploadedImages,
    cropWidth,
    cropHeight,
    gridColumns,
    gridRows,
    previewGridStyle,
    isDragging,
    showPreview,
    checkedGroupKeys,
    groups,
    previewImages,
    previewCellStyle,
    previewImgStyle,
    addFiles,
    addRemoteImage,
    replaceLocalWithRemoteUrls,
    triggerFileInput,
    onFileChange,
    onDrop,
    clearImages,
  }
}
