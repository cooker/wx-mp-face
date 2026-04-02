<template>
  <n-card title="第三步：分组 + 裁剪 + 勾选预览" :bordered="true" class="group-crop-card">
    <template v-if="groups.length">
      <n-space vertical :size="16">
        <n-space :wrap="true" :size="12" align="center">
          <n-text depth="2">裁剪分辨率</n-text>
          <n-input-number
            :value="cropWidth"
            :min="1"
            :max="4096"
            size="small"
            style="width: 100px"
            @update:value="onCropWidth"
          />
          <n-text depth="3">×</n-text>
          <n-input-number
            :value="cropHeight"
            :min="1"
            :max="4096"
            size="small"
            style="width: 100px"
            @update:value="onCropHeight"
          />
          <n-button type="primary" :disabled="previewImages.length === 0" @click="$emit('open-preview')">
            预览选中（{{ previewImages.length }} 张）
          </n-button>
          <n-button type="success" :disabled="localPreviewCount === 0 || isUploading" :loading="isUploading" @click="$emit('confirm-upload')">
            {{ isUploading ? `上传中 ${uploadProgress?.current ?? 0}/${uploadProgress?.total ?? 0}…` : '确认上传' }}
          </n-button>
        </n-space>

        <n-space v-if="uploadProgress?.status === 'error'" :wrap="true" align="center">
          <n-text type="error">{{ uploadProgress.errorMessage }}</n-text>
          <n-button v-if="localPreviewCount > 0" size="small" type="warning" @click="$emit('confirm-upload')">
            重试上传
          </n-button>
        </n-space>

        <n-space vertical :size="16">
          <n-card
            v-for="g in groups"
            :key="g.key"
            size="small"
            embedded
            :bordered="true"
            :title="`尺寸 ${g.key}`"
          >
            <template #header-extra>
              <n-space :size="8" align="center">
                <n-button text type="primary" size="tiny" @click="checkGroup(g.items, true)">全选</n-button>
                <n-divider vertical style="margin: 0" />
                <n-button text size="tiny" @click="checkGroup(g.items, false)">取消</n-button>
              </n-space>
            </template>
            <n-space :wrap="true" :size="8">
              <div
                v-for="(img, i) in g.items"
                :key="img.url"
                class="thumb-cell"
                :class="{ 'thumb-cell--checked': isChecked(img.url) }"
              >
                <n-checkbox
                  class="thumb-checkbox"
                  :checked="isChecked(img.url)"
                  @update:checked="() => toggleCheck(img.url)"
                />
                <img
                  :src="img.url"
                  :alt="img.file?.name || '图片'"
                  class="thumb-img"
                  @click="openImage(g.key, i)"
                />
              </div>
            </n-space>
          </n-card>
        </n-space>
      </n-space>
    </template>
    <n-empty v-else description="上传图片后将在此展示尺寸分组与缩略图" style="padding: 32px 0" />

    <ImageLightbox
      :visible="enlargedImageIndex !== null"
      :image-list="allImages"
      :current-index="enlargedImageIndex ?? 0"
      @close="enlargedImageIndex = null"
      @change-index="enlargedImageIndex = $event"
    />
  </n-card>
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

function onCropWidth(v) {
  const n = Number(v)
  if (Number.isFinite(n) && n > 0) emit('update:cropWidth', Math.floor(n))
}

function onCropHeight(v) {
  const n = Number(v)
  if (Number.isFinite(n) && n > 0) emit('update:cropHeight', Math.floor(n))
}

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

<style scoped>
.group-crop-card :deep(.n-card-header) {
  padding-bottom: 8px;
}

.thumb-cell {
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: var(--n-border-radius);
  border: 1px solid var(--n-border-color);
  background: var(--n-color);
  transition: box-shadow 0.2s;
}

.thumb-cell:hover {
  box-shadow: 0 0 0 2px var(--n-color-target);
}

.thumb-cell--checked {
  box-shadow: 0 0 0 2px var(--n-color-target);
}

.thumb-checkbox {
  position: absolute;
  left: 6px;
  top: 6px;
  z-index: 2;
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  display: block;
}
</style>
