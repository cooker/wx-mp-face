<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      @click.self="$emit('close')"
    >
      <div class="max-h-[90vh] overflow-auto rounded-lg bg-white p-4 shadow-xl">
        <div class="mb-3 flex items-center justify-between">
          <span class="text-sm text-gray-600">裁剪 {{ cropWidth }}×{{ cropHeight }}（九宫格）</span>
          <button type="button" class="text-gray-400 hover:text-gray-600" @click="$emit('close')">✕</button>
        </div>
        <section class="grid max-w-[min(360px,85vw)] grid-cols-3 gap-1.5" aria-label="图片排列">
          <div
            v-for="(img, i) in previewImages"
            :key="i"
            class="overflow-hidden rounded border bg-gray-100"
            :style="previewCellStyle"
          >
            <img
              :src="img.url"
              :alt="img.file.name"
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
defineProps({
  visible: { type: Boolean, default: false },
  previewImages: { type: Array, default: () => [] },
  cropWidth: { type: Number, default: 224 },
  cropHeight: { type: Number, default: 224 },
  previewCellStyle: { type: Object, default: () => ({}) },
  previewImgStyle: { type: Object, default: () => ({}) },
})

defineEmits(['close'])
</script>
