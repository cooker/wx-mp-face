<template>
  <section v-if="groups.length" class="mt-6 rounded-xl bg-white p-5 shadow sm:mt-8 sm:p-6 md:p-8">
    <h2 class="mb-3 text-sm font-medium text-gray-700">第二步：分组 + 裁剪 + 勾选预览</h2>
    <div class="mb-4 flex flex-wrap items-center gap-4">
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-600">裁剪分辨率</span>
        <input
          :value="cropWidth"
          type="number"
          min="1"
          class="w-20 rounded border px-2 py-1 text-sm"
          @input="$emit('update:cropWidth', Number(($event.target).value))"
        />
        <span class="text-gray-500">×</span>
        <input
          :value="cropHeight"
          type="number"
          min="1"
          class="w-20 rounded border px-2 py-1 text-sm"
          @input="$emit('update:cropHeight', Number(($event.target).value))"
        />
      </div>
      <button
        type="button"
        class="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 disabled:opacity-50"
        :disabled="previewImages.length === 0"
        @click="$emit('open-preview')"
      >
        预览选中（{{ previewImages.length }} 张）
      </button>
    </div>
    <div class="space-y-4">
      <div
        v-for="g in groups"
        :key="g.key"
        class="flex flex-wrap items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3"
      >
        <label class="flex cursor-pointer items-center gap-2">
                <input
                  v-model="checkedKeys"
                  type="checkbox"
                  :value="g.key"
                  class="rounded border-gray-300"
                />
          <span class="text-sm font-medium text-gray-700">尺寸 {{ g.key }}</span>
        </label>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(img, i) in g.items"
            :key="i"
            type="button"
            class="h-20 w-20 overflow-hidden rounded border bg-gray-200 transition hover:ring-2 hover:ring-blue-400"
            @click="openImage(g.key, i)"
          >
            <img :src="img.url" :alt="img.file.name" class="h-full w-full object-cover" />
          </button>
        </div>
      </div>
    </div>
    <ImageLightbox
      :visible="enlargedImageIndex !== null"
      :image-list="allImages"
      :current-index="enlargedImageIndex ?? 0"
      @close="enlargedImageIndex = null"
      @change-index="enlargedImageIndex = $event"
    />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ImageLightbox from './ImageLightbox.vue'

const props = defineProps({
  groups: { type: Array, default: () => [] },
  previewImages: { type: Array, default: () => [] },
  cropWidth: { type: Number, default: 224 },
  cropHeight: { type: Number, default: 224 },
  checkedGroupKeys: { type: Array, default: () => [] },
})

const emit = defineEmits(['open-preview', 'update:cropWidth', 'update:cropHeight', 'update:checkedGroupKeys'])

const checkedKeys = computed({
  get: () => props.checkedGroupKeys,
  set: (v) => emit('update:checkedGroupKeys', v),
})

const enlargedImageIndex = ref(null)

const allImages = computed(() => {
  const list = []
  for (const g of props.groups) {
    for (const img of g.items) {
      list.push({ url: img.url, alt: img.file?.name || '', file: img.file })
    }
  }
  return list
})

function openImage(groupKey, itemIndex) {
  let index = 0
  for (const g of props.groups) {
    if (g.key === groupKey) {
      index += itemIndex
      break
    }
    index += g.items.length
  }
  enlargedImageIndex.value = index
}
</script>
