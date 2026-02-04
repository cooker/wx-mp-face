<template>
  <aside
    ref="asideElRef"
    class="h-fit"
    :class="previewPosition ? 'fixed z-40' : 'sticky top-4'"
    :style="previewAsideStyle"
  >
    <div class="rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
      <div
        class="mb-2 flex cursor-grab select-none items-center justify-between border-b border-gray-100 pb-2 active:cursor-grabbing"
        @mousedown.prevent="$emit('drag-start', $event)"
      >
        <span class="text-sm font-medium text-gray-600">实时预览</span>
        <span class="text-xs text-gray-400">拖动移动</span>
      </div>
      <div v-if="previewImages.length" class="mb-2">
        <button
          type="button"
          class="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-50"
          @click="$emit('copy-rendered')"
        >
          渲染后样式复制
        </button>
      </div>
      <section
        v-if="previewImages.length"
        class="grid grid-cols-3 gap-1.5"
        aria-label="图片排列"
      >
        <button
          v-for="(img, i) in previewImages"
          :key="i"
          type="button"
          class="overflow-hidden rounded border bg-gray-100 text-left transition hover:ring-2 hover:ring-blue-400"
          :style="previewCellStyle"
          @click="enlargedImage = { url: img.url, alt: img.file?.name || '' }"
        >
          <img
            :src="img.url"
            :alt="img.file?.name || '图片'"
            class="h-full w-full object-cover"
            :style="previewImgStyle"
          />
        </button>
      </section>
      <div
        v-else
        class="flex min-h-[120px] flex-col items-center justify-center rounded border border-dashed border-gray-200 bg-gray-50/50 py-6 text-center text-sm text-gray-400"
      >
        <span>上传图片后将在此展示九宫格预览</span>
      </div>
    </div>
    <ImageLightbox
      :visible="!!enlargedImage"
      :image-url="enlargedImage?.url ?? ''"
      :alt="enlargedImage?.alt ?? ''"
      @close="enlargedImage = null"
    />
  </aside>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ImageLightbox from './ImageLightbox.vue'

const props = defineProps({
  previewImages: { type: Array, default: () => [] },
  previewAsideStyle: { type: Object, default: () => ({}) },
  previewCellStyle: { type: Object, default: () => ({}) },
  previewImgStyle: { type: Object, default: () => ({}) },
  previewPosition: { type: Object, default: null },
  setAsideRef: { type: Function, default: null },
})

defineEmits(['drag-start', 'copy-rendered'])

const asideElRef = ref(null)
const enlargedImage = ref(null)
onMounted(() => {
  if (asideElRef.value && typeof props.setAsideRef === 'function') {
    try {
      props.setAsideRef(asideElRef.value)
    } catch (_) {}
  }
})
onBeforeUnmount(() => {
  if (typeof props.setAsideRef === 'function') {
    try {
      props.setAsideRef(null)
    } catch (_) {}
  }
})
</script>
