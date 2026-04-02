<template>
  <n-modal
    :show="visible"
    preset="card"
    :title="modalTitle"
    :style="{ width: 'min(400px, 92vw)' }"
    :bordered="false"
    size="huge"
    :segmented="{ content: true }"
    @update:show="onUpdateShow"
  >
    <section
      class="preview-modal-grid"
      :style="gridStyle"
      aria-label="图片排列"
    >
      <div
        v-for="(img, i) in previewImages"
        :key="img.url"
        class="preview-modal-cell"
        :style="previewCellStyle"
      >
        <img
          :src="img.url"
          :alt="img.file?.name || '图片'"
          class="preview-modal-img"
          :style="previewImgStyle"
        />
      </div>
    </section>
  </n-modal>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  previewImages: { type: Array, default: () => [] },
  cropWidth: { type: Number, default: 224 },
  cropHeight: { type: Number, default: 224 },
  gridColumns: { type: Number, default: 3 },
  gridRows: { type: Number, default: 0 },
  previewCellStyle: { type: Object, default: () => ({}) },
  previewImgStyle: { type: Object, default: () => ({}) },
})

const emit = defineEmits(['close'])

const modalTitle = computed(() => {
  const rows = props.gridRows > 0 ? ` × ${props.gridRows} 行` : ''
  return `裁剪 ${props.cropWidth}×${props.cropHeight}（${props.gridColumns} 列${rows}）`
})

const gridStyle = computed(() => {
  const cols = Math.max(1, Math.min(12, props.gridColumns || 3))
  const rows = props.gridRows > 0 ? Math.max(1, Math.min(12, props.gridRows)) : 0
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    ...(rows > 0 && { gridTemplateRows: `repeat(${rows}, 1fr)` }),
    gap: '6px',
  }
})

function onUpdateShow(show) {
  if (!show) emit('close')
}
</script>

<style scoped>
.preview-modal-grid {
  max-width: min(360px, 85vw);
}

.preview-modal-cell {
  overflow: hidden;
  border-radius: var(--n-border-radius);
  border: 1px solid var(--n-border-color);
  background: var(--n-color);
}

.preview-modal-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
