<template>
  <aside class="preview-aside">
    <n-card size="small" :bordered="true">
      <n-space v-if="previewImages.length" vertical :size="12" style="margin-bottom: 12px">
        <n-space :wrap="true" align="center" :size="12">
          <n-space :size="6" align="center" :wrap="false">
            <n-text depth="3" style="font-size: 12px">列</n-text>
            <n-input-number
              :value="gridCols"
              :min="1"
              :max="12"
              size="small"
              :show-button="false"
              style="width: 64px"
              @update:value="onGridCols"
            />
          </n-space>
          <n-space :size="6" align="center" :wrap="false">
            <n-text depth="3" style="font-size: 12px">行</n-text>
            <n-input-number
              :value="gridRowsDisplay"
              :min="0"
              :max="12"
              size="small"
              style="width: 64px"
              placeholder="自动"
              :show-button="false"
              @update:value="onGridRows"
            />
          </n-space>
          <n-button
            type="primary"
            secondary
            :loading="isCopying"
            :disabled="isCopying"
            @click="$emit('copy-rendered')"
          >
            {{ copySuccess ? '已复制' : '复制HTML' }}
          </n-button>
        </n-space>
      </n-space>

      <section
        v-if="previewImages.length"
        :style="previewGridStyle"
        aria-label="图片排列"
      >
        <div
          v-for="(img, i) in previewImages"
          :key="img.url"
          class="preview-cell-wrap"
          :class="{ 'preview-cell-wrap--dragging': draggingIndex === i }"
          :style="previewCellStyle"
          @dragover.prevent="onDragOver($event, i)"
          @drop.prevent="onDrop(i)"
        >
          <n-tooltip v-if="isUploadFailed(img.url)" placement="top">
            <template #trigger>
              <n-tag class="preview-cell-fail" size="tiny" type="warning" round>!</n-tag>
            </template>
            上传失败，请在第三步点击「重试上传」
          </n-tooltip>
          <button
            type="button"
            class="preview-cell-btn"
            @click="enlargedImage = { url: img.url, alt: img.file?.name || '' }"
          >
            <img
              :src="img.url"
              :alt="img.file?.name || '图片'"
              class="preview-cell-img"
              :class="{ 'preview-cell-img--failed': isUploadFailed(img.url) }"
              :style="previewImgStyle"
              draggable="false"
            />
          </button>
          <span class="preview-cell-hint">拖动手柄排序</span>
          <n-button
            v-if="typeof removeUploadedImage === 'function'"
            class="preview-cell-delete"
            size="tiny"
            quaternary
            circle
            type="error"
            aria-label="删除此图"
            @click.stop="onRemovePreview(img.url)"
          >
            ×
          </n-button>
          <button
            type="button"
            class="reorder-handle"
            title="拖动排序"
            draggable="true"
            @dragstart="onReorderDragStart($event, i)"
            @dragend="onReorderDragEnd"
            @mousedown.stop
            @click.stop.prevent
          >
            ⋮⋮
          </button>
        </div>
      </section>
      <n-text v-else depth="3" style="display: block; padding: 8px 0; font-size: 13px">
        在第三步勾选预览后，此处显示缩略图网格。
      </n-text>
    </n-card>

    <ImageLightbox
      :visible="!!enlargedImage"
      :image-url="enlargedImage?.url ?? ''"
      :alt="enlargedImage?.alt ?? ''"
      @close="enlargedImage = null"
    />
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import ImageLightbox from './ImageLightbox.vue'

const props = defineProps({
  previewImages: { type: Array, default: () => [] },
  previewCellStyle: { type: Object, default: () => ({}) },
  previewGridStyle: { type: Object, default: () => ({}) },
  previewImgStyle: { type: Object, default: () => ({}) },
  isCopying: { type: Boolean, default: false },
  copySuccess: { type: Boolean, default: false },
  gridColumns: { type: Number, default: 3 },
  gridRows: { type: Number, default: 0 },
  reorderPreviewImages: { type: Function, default: null },
  removeUploadedImage: { type: Function, default: null },
  failedUploadUrls: { type: Array, default: () => [] },
})

const emit = defineEmits(['copy-rendered', 'update:gridColumns', 'update:gridRows'])

const draggingIndex = ref(null)

const failedUrlSet = computed(() => new Set(props.failedUploadUrls || []))
function isUploadFailed(url) {
  return !!(url && failedUrlSet.value.has(url))
}

function onReorderDragStart(e, index) {
  draggingIndex.value = index
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/plain', String(index))
  e.dataTransfer.setData('application/json', JSON.stringify({ index }))
  try {
    e.dataTransfer.setDragImage(e.target, 8, 8)
  } catch (_) {}
}

function onReorderDragEnd() {
  draggingIndex.value = null
}

function onDragOver(e, index) {
  if (draggingIndex.value === null || draggingIndex.value === index) return
  e.dataTransfer.dropEffect = 'move'
}

function onDrop(toIndex) {
  const from = draggingIndex.value
  if (from === null || from === toIndex || typeof props.reorderPreviewImages !== 'function') return
  props.reorderPreviewImages(from, toIndex)
  draggingIndex.value = null
}

function onRemovePreview(url) {
  if (typeof props.removeUploadedImage !== 'function' || !url) return
  props.removeUploadedImage(url)
  if (enlargedImage.value?.url === url) enlargedImage.value = null
}

const gridCols = computed({
  get: () => Math.max(1, Math.min(12, props.gridColumns || 3)),
  set: (v) => emit('update:gridColumns', Math.max(1, Math.min(12, Number(v) || 3))),
})

function onGridCols(v) {
  const n = Number(v)
  if (!Number.isFinite(n)) return
  gridCols.value = n
}

const gridRowsDisplay = computed(() => (props.gridRows > 0 ? props.gridRows : null))

function onGridRows(v) {
  const n = v === null || v === undefined || v === '' ? 0 : Number(v)
  if (!Number.isFinite(n)) return
  emit('update:gridRows', Math.max(0, Math.min(12, n)))
}

const enlargedImage = ref(null)
</script>

<style scoped>
.preview-aside {
  position: sticky;
  top: 16px;
  width: 100%;
}

.preview-cell-wrap {
  position: relative;
  overflow: hidden;
  border-radius: var(--n-border-radius);
  border: 1px solid var(--n-border-color);
  background: var(--n-color);
  transition: opacity 0.2s, box-shadow 0.2s;
}

.preview-cell-wrap:hover {
  box-shadow: 0 0 0 2px var(--n-color-target);
}

.preview-cell-wrap--dragging {
  opacity: 0.5;
}

.preview-cell-btn {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.preview-cell-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.preview-cell-img--failed {
  filter: saturate(0.88);
  opacity: 0.95;
}

.preview-cell-hint {
  position: absolute;
  right: 4px;
  top: 28px;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}

.preview-cell-wrap:hover .preview-cell-hint {
  opacity: 1;
}

.preview-cell-fail {
  position: absolute;
  left: 4px;
  top: 4px;
  z-index: 4;
  min-width: 22px !important;
  width: 22px;
  height: 22px;
  padding: 0 !important;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
}

.preview-cell-delete {
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 4;
  min-width: 22px !important;
  width: 22px;
  height: 22px;
  padding: 0 !important;
  font-size: 16px;
  line-height: 1;
}

.reorder-handle {
  position: absolute;
  left: 4px;
  bottom: 4px;
  z-index: 3;
  display: flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 4px;
  font-size: 10px;
  line-height: 1;
  color: #fff;
  cursor: grab;
  background: rgba(0, 0, 0, 0.45);
}

.reorder-handle:active {
  cursor: grabbing;
}
</style>
