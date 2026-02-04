<template>
  <section class="rounded-xl bg-white p-5 shadow sm:p-6 md:p-8">
    <h2 class="mb-4 text-base font-medium text-gray-700 sm:mb-5 sm:text-lg">第二步：上传图片</h2>
    <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch md:gap-6">
      <label
        class="flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 active:bg-blue-800 sm:min-h-0 sm:py-2.5 sm:text-sm md:px-8 md:py-3"
      >
        <input
          ref="fileInputRef"
          type="file"
          accept="image/*"
          multiple
          class="sr-only"
          @change="onFileChange"
        />
        选择图片
      </label>
      <button
        v-if="uploadedImages.length"
        type="button"
        class="min-h-[48px] rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 sm:min-h-0 sm:py-2.5 sm:text-sm md:px-8 md:py-3"
        @click="$emit('clear')"
      >
        清空图片
      </button>
    </div>
    <div
      class="relative mt-4 flex min-h-[180px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors sm:mt-6 sm:min-h-[200px] sm:gap-3 sm:px-6 sm:py-10 md:min-h-[240px] md:mt-8 md:py-12"
      :class="[isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50/50', isUploading && 'pointer-events-none']"
      @dragover.prevent="$emit('update:isDragging', true)"
      @dragleave.prevent="$emit('update:isDragging', false)"
      @drop.prevent="onDrop"
      @click="triggerFileInput"
    >
      <template v-if="isUploading">
        <span class="text-center text-base text-gray-600 sm:text-lg">上传中，请稍候…</span>
      </template>
      <template v-else>
        <span class="text-center text-base text-gray-500 sm:text-lg md:text-xl">点击或拖拽图片到此处</span>
        <span class="text-center text-sm text-gray-400">支持多选，将上传到第一步配置的 GitHub 仓库</span>
      </template>
    </div>
    <div
      v-if="isUploading"
      class="mt-4 rounded-lg border border-blue-200 bg-blue-50/50 p-4"
    >
      <p class="mb-2 text-sm font-medium text-gray-700">
        上传进度：{{ uploadProgress.current }}/{{ uploadProgress.total }}
        <span class="ml-2 text-blue-600">({{ progressPercent }}%)</span>
      </p>
      <p v-if="uploadProgress.fileName" class="mb-2 truncate text-xs text-gray-500" :title="uploadProgress.fileName">
        当前：{{ uploadProgress.fileName }}
      </p>
      <div class="h-3 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          class="h-full rounded-full bg-blue-600 transition-all duration-300 ease-out"
          :style="{ width: progressPercent + '%' }"
        />
      </div>
    </div>
    <div
      v-if="displayThumbnails.length"
      class="mt-4 rounded-lg border border-gray-200 bg-gray-50/50 p-3"
    >
      <p class="mb-2 text-xs font-medium text-gray-500">
        {{ isUploading ? '上传进度' : '已上传图片' }}
      </p>
      <div class="flex flex-wrap gap-2">
        <div
          v-for="(item, i) in displayThumbnails"
          :key="i"
          class="relative h-16 w-16 shrink-0 overflow-hidden rounded border bg-gray-200"
        >
          <img
            :src="item.url"
            :alt="item.alt"
            class="h-full w-full object-cover"
            :class="{ 'opacity-50': item.status === 'pending' }"
          />
          <span
            v-if="item.status === 'success'"
            class="absolute right-0.5 top-0.5 rounded-full bg-green-500 px-1 py-0.5 text-[10px] text-white"
          >
            ✓
          </span>
          <span
            v-else-if="item.status === 'uploading'"
            class="absolute inset-0 flex items-center justify-center bg-black/30"
          >
            <span class="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          </span>
          <span
            v-else-if="item.status === 'pending'"
            class="absolute right-0.5 top-0.5 rounded bg-gray-600/80 px-1 py-0.5 text-[10px] text-white"
          >
            待传
          </span>
        </div>
      </div>
    </div>
    <p v-if="uploadProgress.status === 'error'" class="mt-2 flex items-center gap-1.5 text-sm text-red-500">
      <span class="inline-block h-4 w-4 rounded-full bg-red-100 text-center text-xs leading-4">!</span>
      {{ uploadProgress.errorMessage }}
    </p>
    <p v-else-if="uploadProgress.status === 'done'" class="mt-2 flex items-center gap-1.5 text-sm text-green-600">
      <span class="inline-block h-4 w-4 rounded-full bg-green-100 text-center text-xs leading-4">✓</span>
      上传完成，共 {{ uploadProgress.total }} 张
    </p>
    <p v-else-if="uploadedImages.length && !isUploading" class="mt-3 text-sm text-gray-500 sm:mt-4">已上传 {{ uploadedImages.length }} 张</p>
  </section>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

const props = defineProps({
  uploadedImages: { type: Array, default: () => [] },
  uploadingFiles: { type: Array, default: () => [] },
  isDragging: { type: Boolean, default: false },
  uploadProgress: { type: Object, default: () => ({ total: 0, current: 0, fileName: '', status: 'idle', errorMessage: '' }) },
})

const isUploading = computed(() => props.uploadProgress?.status === 'uploading')
const progressPercent = computed(() => {
  const t = props.uploadProgress?.total
  const c = props.uploadProgress?.current
  return t && t > 0 ? Math.round((c / t) * 100) : 0
})

const filePreviewUrls = ref([])
watch(
  () => props.uploadingFiles,
  (files) => {
    filePreviewUrls.value.forEach((u) => URL.revokeObjectURL(u))
    filePreviewUrls.value = (files || []).map((f) => URL.createObjectURL(f))
  },
  { immediate: true }
)
onUnmounted(() => {
  filePreviewUrls.value.forEach((u) => URL.revokeObjectURL(u))
})

const displayThumbnails = computed(() => {
  if (props.isUploading && props.uploadingFiles?.length) {
    const total = props.uploadProgress?.total ?? 0
    const current = props.uploadProgress?.current ?? 0
    const list = []
    for (let i = 0; i < total; i++) {
      if (i < current && props.uploadedImages[i]) {
        list.push({ url: props.uploadedImages[i].url, alt: '图片', status: 'success' })
      } else if (props.uploadingFiles[i] && filePreviewUrls.value[i]) {
        list.push({
          url: filePreviewUrls.value[i],
          alt: props.uploadingFiles[i].name || '图片',
          status: i === current ? 'uploading' : 'pending',
        })
      }
    }
    return list
  }
  return (props.uploadedImages || []).map((img) => ({
    url: img.url,
    alt: img.file?.name || '图片',
    status: 'success',
  }))
})

const emit = defineEmits(['clear', 'update:isDragging'])

const fileInputRef = ref(null)

function triggerFileInput() {
  fileInputRef.value?.click()
}
defineExpose({ fileInputRef, triggerFileInput })

function onFileChange(e) {
  emit('file-change', Array.from(e.target.files || []))
  e.target.value = ''
}

function onDrop(e) {
  emit('update:isDragging', false)
  emit('drop', Array.from(e.dataTransfer?.files || []).filter((f) => f.type.startsWith('image/')))
}
</script>
