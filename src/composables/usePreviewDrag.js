import { ref, computed, watch, onUnmounted } from 'vue'

/**
 * 实时预览面板拖动定位
 */
export function usePreviewDrag() {
  const previewAsideRef = ref(null)
  const previewPosition = ref(null)
  const previewDrag = ref(null)

  const previewAsideStyle = computed(() => {
    if (!previewPosition.value) return {}
    return { left: `${previewPosition.value.x}px`, top: `${previewPosition.value.y}px` }
  })

  function onPreviewDragStart(e) {
    if (!previewAsideRef.value) return
    const rect = previewAsideRef.value.getBoundingClientRect()
    previewPosition.value = previewPosition.value || { x: rect.left, y: rect.top }
    previewDrag.value = {
      startX: e.clientX,
      startY: e.clientY,
      left: previewPosition.value.x,
      top: previewPosition.value.y,
    }
  }

  function onPreviewDragMove(e) {
    if (!previewDrag.value) return
    previewPosition.value = {
      x: previewDrag.value.left + (e.clientX - previewDrag.value.startX),
      y: previewDrag.value.top + (e.clientY - previewDrag.value.startY),
    }
  }

  function onPreviewDragEnd() {
    previewDrag.value = null
  }

  function addListeners() {
    document.addEventListener('mousemove', onPreviewDragMove)
    document.addEventListener('mouseup', onPreviewDragEnd)
  }

  function removeListeners() {
    document.removeEventListener('mousemove', onPreviewDragMove)
    document.removeEventListener('mouseup', onPreviewDragEnd)
  }

  watch(previewDrag, (v) => (v ? addListeners() : removeListeners()))
  onUnmounted(removeListeners)

  return {
    previewAsideRef,
    previewPosition,
    previewAsideStyle,
    onPreviewDragStart,
  }
}
