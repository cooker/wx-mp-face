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
    if (!url?.trim()) return
    try {
      const { width, height } = await getImageDimensionsFromUrl(url)
      uploadedImages.value = [...uploadedImages.value, { file: null, url: url.trim(), width, height }]
    } catch (_) {}
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

  watch(groups, (next, prev) => {
    if (next.length > 0 && (!prev || prev.length === 0)) checkedGroupKeys.value = next.map((g) => g.key)
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
    isDragging,
    showPreview,
    checkedGroupKeys,
    groups,
    previewImages,
    previewCellStyle,
    previewImgStyle,
    addFiles,
    addRemoteImage,
    triggerFileInput,
    onFileChange,
    onDrop,
    clearImages,
  }
}
