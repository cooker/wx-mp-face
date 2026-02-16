<template>
  <section class="mt-6 rounded-xl bg-white p-5 shadow sm:mt-8 sm:p-6 md:p-8">
    <h2 class="mb-3 text-sm font-medium text-gray-700">第三步：分组 + 裁剪 + 勾选预览</h2>
    <template v-if="groups.length">
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
        <button
          type="button"
          class="rounded bg-green-600 px-4 py-2 text-sm text-white hover:bg-green-700 disabled:opacity-50"
          :disabled="localPreviewCount === 0 || isUploading"
          @click="$emit('confirm-upload')"
        >
          {{ isUploading ? `上传中 ${uploadProgress?.current ?? 0}/${uploadProgress?.total ?? 0}…` : '确认上传' }}
        </button>
      </div>
      <div v-if="uploadProgress?.status === 'error'" class="mb-4 flex flex-wrap items-center gap-2">
        <p class="text-sm text-red-500">{{ uploadProgress.errorMessage }}</p>
        <button
          v-if="localPreviewCount > 0"
          type="button"
          class="rounded bg-amber-500 px-3 py-1.5 text-xs text-white hover:bg-amber-600"
          @click="$emit('confirm-upload')"
        >
          重试上传
        </button>
      </div>
      <div class="space-y-4">
        <div
          v-for="g in groups"
          :key="g.key"
          class="flex flex-wrap items-start gap-3 rounded border border-gray-200 bg-gray-50 p-3"
        >
          <div class="flex w-full items-center justify-between">
            <span class="text-sm font-medium text-gray-700">尺寸 {{ g.key }}</span>
            <div class="flex gap-1">
              <button
                type="button"
                class="text-xs text-blue-600 hover:text-blue-700"
                @click="checkGroup(g.items, true)"
              >
                全选
              </button>
              <span class="text-gray-300">|</span>
              <button
                type="button"
                class="text-xs text-gray-500 hover:text-gray-700"
                @click="checkGroup(g.items, false)"
              >
                取消
              </button>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="(img, i) in g.items"
              :key="img.url"
              class="relative flex h-20 w-20 overflow-hidden rounded border transition hover:ring-2 hover:ring-blue-400"
              :class="isChecked(img.url) ? 'ring-2 ring-blue-400' : 'bg-gray-200'"
            >
              <input
                type="checkbox"
                :checked="isChecked(img.url)"
                class="absolute left-1 top-1 z-10 cursor-pointer rounded border-gray-300"
                @change="toggleCheck(img.url)"
              />
              <img
                :src="img.url"
                :alt="img.file?.name || '图片'"
                class="h-full w-full cursor-pointer object-cover"
                @click="openImage(g.key, i)"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <div
      v-else
      class="flex min-h-[140px] flex-col items-center justify-center rounded border border-dashed border-gray-200 bg-gray-50/50 py-8 text-center text-sm text-gray-400"
    >
      <span>上传图片后将在此展示尺寸分组与缩略图</span>
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
  checkedImageUrls: { type: Array, default: () => [] },
  uploadProgress: { type: Object, default: () => ({ total: 0, current: 0, fileName: '', status: 'idle', errorMessage: '' }) },
})

const emit = defineEmits(['open-preview', 'confirm-upload', 'update:cropWidth', 'update:cropHeight', 'update:checkedImageUrls'])

const isUploading = computed(() => props.uploadProgress?.status === 'uploading')
const localPreviewCount = computed(() => props.previewImages.filter((img) => img.file).length)

const checkedSet = computed(() => new Set(props.checkedImageUrls || []))

function isChecked(url) {
  if (!url) return false
  const set = checkedSet.value
  return set.size === 0 || set.has(url)
}

function toggleCheck(url) {
  if (!url) return
  const allUrls = props.groups.flatMap((g) => g.items.map((img) => img.url).filter(Boolean))
  let set = new Set(props.checkedImageUrls || [])
  if (set.size === 0) set = new Set(allUrls)
  if (set.has(url)) set.delete(url)
  else set.add(url)
  emit('update:checkedImageUrls', [...set])
}

function checkGroup(items, check) {
  const urls = items.map((img) => img.url).filter(Boolean)
  const allUrls = props.groups.flatMap((g) => g.items.map((img) => img.url).filter(Boolean))
  let set = new Set(props.checkedImageUrls || [])
  if (set.size === 0 && !check) return
  if (set.size === 0) set = new Set(allUrls)
  urls.forEach((url) => (check ? set.add(url) : set.delete(url)))
  emit('update:checkedImageUrls', [...set])
}

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
