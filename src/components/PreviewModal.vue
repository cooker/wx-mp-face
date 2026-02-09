<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      @click.self="$emit('close')"
    >
      <div class="max-h-[90vh] overflow-auto rounded-lg bg-white p-4 shadow-xl">
        <div class="mb-3 flex items-center justify-between">
          <span class="text-sm text-gray-600">裁剪 {{ cropWidth }}×{{ cropHeight }}（{{ gridColumns }} 列{{ gridRows ? ` × ${gridRows} 行` : '' }}）</span>
          <button type="button" class="text-gray-400 hover:text-gray-600" @click="$emit('close')">✕</button>
        </div>
        <section
          class="max-w-[min(360px,85vw)] gap-1.5"
          :style="gridStyle"
          aria-label="图片排列"
        >
          <div
            v-for="(img, i) in previewImages"
            :key="i"
            class="overflow-hidden rounded border bg-gray-100"
            :style="previewCellStyle"
          >
            <img
              :src="img.url"
              :alt="img.file?.name || '图片'"
              class="h-full w-full object-cover"
              :style="previewImgStyle"
            />
          </div>
        </section>
      </div>
    </div>
  </Teleport>
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

defineEmits(['close'])
</script>
