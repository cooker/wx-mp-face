<template>
  <n-card title="第二步：上传图片" :bordered="true" size="medium">
    <n-space vertical :size="16">
      <n-space :wrap="true" :size="12">
        <input
          ref="fileInputRef"
          type="file"
          accept="image/*"
          multiple
          class="file-input-hidden"
          @change="onFileChange"
        />
        <n-button type="primary" @click="triggerFileInput">选择图片</n-button>
        <n-button v-if="uploadedImages.length" quaternary @click="$emit('clear')">清空图片</n-button>
      </n-space>

      <div
        class="drop-zone"
        :class="{ 'drop-zone--active': isDragging, 'drop-zone--disabled': isUploading }"
        @dragover.prevent="$emit('update:isDragging', true)"
        @dragleave.prevent="$emit('update:isDragging', false)"
        @drop.prevent="onDrop"
        @click="!isUploading && triggerFileInput()"
      >
        <template v-if="isUploading">
          <n-text>上传中，请稍候…</n-text>
        </template>
        <template v-else>
          <n-text depth="2">点击或拖拽图片到此处</n-text>
          <n-text depth="3" style="font-size: 13px">支持多选，先分组裁剪预览，确认后上传到 GitHub</n-text>
        </template>
      </div>

      <div v-if="isUploading">
        <n-text depth="2" style="display: block; margin-bottom: 8px">
          上传进度：{{ uploadProgress.current }}/{{ uploadProgress.total }}
          <n-text type="info" style="margin-left: 8px">({{ progressPercent }}%)</n-text>
        </n-text>
        <n-text v-if="uploadProgress.fileName" depth="3" style="display: block; margin-bottom: 8px; font-size: 12px" :title="uploadProgress.fileName">
          当前：{{ uploadProgress.fileName }}
        </n-text>
        <n-progress type="line" :percentage="progressPercent" :height="10" indicator-placement="inside" processing />
      </div>

      <n-card v-if="displayThumbnails.length" size="small" embedded :bordered="true">
        <n-text depth="3" style="display: block; margin-bottom: 8px; font-size: 12px">
          {{ isUploading ? '上传进度' : '已上传图片' }}
        </n-text>
        <n-space :size="8" :wrap="true">
          <div
            v-for="(item, i) in displayThumbnails"
            :key="i"
            class="thumb-wrap"
          >
            <img
              :src="item.url"
              :alt="item.alt"
              class="thumb-img"
              :class="{ 'thumb-img--muted': item.status === 'pending' }"
            />
            <n-tag v-if="item.status === 'success'" class="thumb-badge" size="tiny" type="success" round>✓</n-tag>
            <div v-else-if="item.status === 'uploading'" class="thumb-overlay">
              <n-spin size="small" />
            </div>
            <n-tag v-else-if="item.status === 'pending'" class="thumb-badge" size="tiny" type="default">待传</n-tag>
          </div>
        </n-space>
      </n-card>

      <n-alert v-if="uploadProgress.status === 'error'" type="error" :title="uploadProgress.errorMessage" />
      <n-alert v-else-if="uploadProgress.status === 'done'" type="success" :title="`上传完成，共 ${uploadProgress.total} 张`" />
      <n-text v-else-if="uploadedImages.length && !isUploading" depth="3">已上传 {{ uploadedImages.length }} 张</n-text>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref, computed, watch, onUnmounted } from 'vue'

const props = defineProps({
  uploadedImages: { type: Array, default: () => [] },
  uploadingFiles: { type: Array, default: () => [] },
  isDragging: { type: Boolean, default: false },
  uploadProgress: { type: Object, default: () => ({ total: 0, current: 0, fileName: '', status: 'idle', errorMessage: '' }) },
})

const emit = defineEmits(['clear', 'update:isDragging', 'file-change', 'drop'])

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

<style scoped>
.file-input-hidden {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.drop-zone {
  display: flex;
  min-height: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px 16px;
  border: 2px dashed var(--n-border-color);
  border-radius: var(--n-border-radius);
  cursor: pointer;
  transition: border-color 0.2s, background-color 0.2s;
  background: var(--n-color-modal);
}

.drop-zone--active {
  border-color: var(--n-color-target);
  background: var(--n-color-hover-modal);
}

.drop-zone--disabled {
  pointer-events: none;
  opacity: 0.85;
}

.thumb-wrap {
  position: relative;
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: var(--n-border-radius);
  border: 1px solid var(--n-border-color);
  background: var(--n-color);
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.thumb-img--muted {
  opacity: 0.5;
}

.thumb-badge {
  position: absolute;
  top: 4px;
  right: 4px;
}

.thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
}

@media (min-width: 640px) {
  .drop-zone {
    min-height: 220px;
    padding: 40px 24px;
  }
}
</style>
