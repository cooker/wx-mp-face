<template>
  <n-card title="三图拼接" size="small" :bordered="true">
    <n-space vertical :size="16">
      <n-text depth="3" style="font-size: 13px">
        仅可从“已上传且裁剪成功”的图片中选择最多 3 张，支持实时预览、复制与上传至 GitHub。
      </n-text>

      <n-empty
        v-if="!selectableUploadedImages.length"
        description="暂无可拼接图片，请先完成裁剪并上传"
        size="small"
      />

      <template v-else>
        <div class="flex items-center justify-between gap-2">
          <n-text depth="2" style="font-size: 12px">已上传且裁剪成功（点击图片按顺序填入，最多 3 张）</n-text>
          <n-button size="tiny" quaternary type="warning" :disabled="slotCount === 0" @click="clearSelected">
            清空已选
          </n-button>
        </div>
        <n-card size="small" embedded :bordered="true" class="stitch-upload-thumb-card">
          <n-space :size="8" :wrap="true">
            <button
              v-for="(item, idx) in selectableUploadedImages"
              :key="item.url + idx"
              type="button"
              class="stitch-upload-thumb"
              :class="{ 'stitch-upload-thumb--in-slots': isUrlInSlots(item.url) }"
              :title="item.file?.name || '图片'"
              @click="assignFromUploaded(item)"
            >
              <img
                :src="item.url"
                :alt="item.file?.name || '图片'"
                class="stitch-upload-thumb-img"
              />
            </button>
          </n-space>
        </n-card>

        <div v-if="selectedUrls.length" class="flex flex-col gap-2">
          <n-text depth="2" style="font-size: 12px">已选顺序（拖动调整顺序）</n-text>
          <n-space :size="8" :wrap="true">
            <div
              v-for="(url, idx) in selectedUrls"
              :key="url + idx"
              class="stitch-selected-item"
              draggable="true"
              @dragstart="onDragStart(idx)"
              @dragover.prevent
              @drop="onDropReorder(idx)"
              @dragend="onDragEnd"
            >
              <button type="button" class="stitch-upload-thumb stitch-upload-thumb--selected" :title="`第 ${idx + 1} 张`">
                <img :src="url" :alt="`已选 ${idx + 1}`" class="stitch-upload-thumb-img" />
              </button>
              <button type="button" class="stitch-selected-remove" title="移除" @click="removeSelected(url)">×</button>
            </div>
          </n-space>
        </div>

        <div v-if="stitchError" class="text-sm text-red-500">{{ stitchError }}</div>

        <div
          v-if="stitchedPreviewUrl"
          class="overflow-auto rounded border border-gray-200 bg-gray-50 p-2"
          style="max-height: 360px"
        >
          <n-text depth="2" style="display: block; margin-bottom: 8px; font-size: 12px">实时预览</n-text>
          <img :src="stitchedPreviewUrl" alt="拼接预览" class="max-w-full object-contain" style="max-height: 320px" />
        </div>
        <n-empty v-else-if="slotCount > 0" description="生成预览中…" size="small" />
        <n-empty v-else description="请为图 1～3 至少选择一张“已上传且裁剪成功”的图片" size="small" />

        <n-space>
          <n-button
            type="primary"
            :disabled="!stitchBlob || isCopying"
            :loading="isCopying"
            @click="handleCopy"
          >
            {{ copySuccess ? '已复制' : '复制预览图' }}
          </n-button>
          <n-button type="success" :disabled="!stitchBlob || uploading" :loading="uploading" @click="handleUpload">
            上传拼接图
          </n-button>
        </n-space>
      </template>
    </n-space>
  </n-card>
</template>

<script setup>
import { ref, shallowRef, computed, watch, onBeforeUnmount } from 'vue'
import { createDiscreteApi } from 'naive-ui'
import { stitchImagesToCanvas } from '../utils/stitchThreeImages.js'
import { copyImageBlobToClipboard } from '../composables/useClipboard.js'

const { message } = createDiscreteApi(['message'])

const props = defineProps({
  uploadedImages: { type: Array, default: () => [] },
  /** (file: File) => Promise<string|void> */
  uploadStitchedFile: { type: Function, required: true },
})

const activeSlotIndex = ref(0)
const slotUrls = ref([null, null, null])

/** 单图参与布局时的最大边（像素），与 stitchThreeImages maxSide 一致 */
const maxSide = 1200
/** 整张拼接结果再缩放，百分比 → outputScale */
const outputScalePercent = 100

const stitchedPreviewUrl = ref('')
const stitchBlob = shallowRef(null)
const stitchError = ref('')
const uploading = ref(false)
const isCopying = ref(false)
const copySuccess = ref(false)

const slotCount = computed(() => slotUrls.value.filter(Boolean).length)
const selectedUrls = computed(() => slotUrls.value.filter(Boolean))
const selectableUploadedImages = computed(() =>
  (props.uploadedImages || []).filter((img) => img?.url && img.cropUploaded === true)
)
const draggingIndex = ref(-1)

let stitchTimer = null

function revokeStitchedUrl() {
  if (stitchedPreviewUrl.value?.startsWith('blob:')) {
    URL.revokeObjectURL(stitchedPreviewUrl.value)
  }
  stitchedPreviewUrl.value = ''
}

onBeforeUnmount(() => {
  if (stitchTimer) clearTimeout(stitchTimer)
  revokeStitchedUrl()
})

function isUrlInSlots(url) {
  return slotUrls.value.some((u) => u === url)
}

function assignFromUploaded(item) {
  const url = item?.url
  if (!url) return
  if (!selectableUploadedImages.value.some((img) => img.url === url)) {
    message.warning('仅支持选择已上传且裁剪成功的图片')
    return
  }
  if (isUrlInSlots(url)) return
  const current = slotUrls.value.filter(Boolean)
  if (current.length >= 3) {
    message.warning('最多选择 3 张图片')
    return
  }
  setSelectedUrls([...current, url])
  scheduleStitch()
}

function setSelectedUrls(urls) {
  const next = [...(urls || []).filter(Boolean)].slice(0, 3)
  while (next.length < 3) next.push(null)
  slotUrls.value = next
  const empty = next.findIndex((u) => !u)
  activeSlotIndex.value = empty >= 0 ? empty : 2
}

function removeSelected(url) {
  if (!url) return
  setSelectedUrls(selectedUrls.value.filter((u) => u !== url))
  scheduleStitch()
}

function clearSelected() {
  setSelectedUrls([])
  scheduleStitch()
}

function onDragStart(index) {
  draggingIndex.value = index
}

function onDropReorder(dropIndex) {
  const from = draggingIndex.value
  draggingIndex.value = -1
  if (from < 0 || from === dropIndex) return
  const list = [...selectedUrls.value]
  if (from >= list.length || dropIndex >= list.length) return
  const [moved] = list.splice(from, 1)
  list.splice(dropIndex, 0, moved)
  setSelectedUrls(list)
  scheduleStitch()
}

function onDragEnd() {
  draggingIndex.value = -1
}

function resolveSourcesForStitch() {
  const urls = slotUrls.value.filter(Boolean)
  const list = []
  for (const url of urls) {
    const item = selectableUploadedImages.value.find((img) => img.url === url)
    if (item?.file) list.push(item.file)
    else if (item?.url) list.push(item.url)
  }
  return list
}

function scheduleStitch() {
  if (stitchTimer) clearTimeout(stitchTimer)
  stitchTimer = setTimeout(runStitch, 120)
}

watch(slotUrls, scheduleStitch, { deep: true })
watch(
  () => selectableUploadedImages.value,
  () => {
    const valid = new Set(selectableUploadedImages.value.map((x) => x.url).filter(Boolean))
    const next = slotUrls.value.map((u) => (u && valid.has(u) ? u : null))
    if (next.some((u, i) => u !== slotUrls.value[i])) {
      slotUrls.value = next
    }
    scheduleStitch()
  },
  { deep: true }
)

async function runStitch() {
  stitchError.value = ''
  revokeStitchedUrl()
  stitchBlob.value = null
  const list = resolveSourcesForStitch()
  if (!list.length) return
  try {
    const { blob, previewUrl } = await stitchImagesToCanvas(list, {
      direction: 'horizontal',
      maxSide,
      outputScale: outputScalePercent / 100,
    })
    stitchBlob.value = blob
    stitchedPreviewUrl.value = previewUrl || ''
  } catch (err) {
    stitchError.value = err?.message || '拼接失败（跨域图片可能无法导出，可改用本地上传的图）'
  }
}

async function handleCopy() {
  const blob = stitchBlob.value
  if (!blob) return
  isCopying.value = true
  copySuccess.value = false
  try {
    const ok = await copyImageBlobToClipboard(blob)
    if (ok) {
      copySuccess.value = true
      message.success('已复制到剪贴板')
      setTimeout(() => {
        copySuccess.value = false
      }, 2500)
    } else {
      message.warning('复制失败，请检查浏览器权限或尝试「上传」后从链接保存')
    }
  } finally {
    isCopying.value = false
  }
}

async function handleUpload() {
  const blob = stitchBlob.value
  if (!blob) return
  uploading.value = true
  try {
    const file = new File([blob], 'stitched.jpg', { type: 'image/jpeg' })
    const remoteUrl = await props.uploadStitchedFile(file)
    if (typeof remoteUrl === 'string' && remoteUrl.trim()) {
      revokeStitchedUrl()
      stitchedPreviewUrl.value = remoteUrl.trim()
    }
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
/* 与第二步「已上传图片」thumb-wrap / thumb-img 一致：64×64、主题边框、cover 居中 */
.stitch-upload-thumb-card :deep(.n-card__content) {
  max-height: 200px;
  overflow-y: auto;
}

.stitch-upload-thumb {
  position: relative;
  display: block;
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: 1px solid var(--n-border-color);
  border-radius: var(--n-border-radius);
  background: var(--n-color);
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.stitch-upload-thumb:hover:not(.stitch-upload-thumb--in-slots) {
  box-shadow: 0 0 0 2px var(--n-color-target);
}

.stitch-upload-thumb--in-slots {
  border-color: var(--n-color-success);
  box-shadow: 0 0 0 2px var(--n-color-success);
}

.stitch-upload-thumb--selected {
  border-color: var(--n-color-primary);
  box-shadow: 0 0 0 1px var(--n-color-primary);
}

.stitch-upload-thumb-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  pointer-events: none;
}

.stitch-selected-item {
  position: relative;
  cursor: move;
}

.stitch-selected-remove {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 999px;
  background: rgba(239, 68, 68, 0.92);
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
}
</style>
