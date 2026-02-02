<template>
  <div class="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
    <div class="mx-auto max-w-6xl">
      <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">人脸裁剪排列</h1>
      <p v-if="!modelsReady" class="mt-2 text-gray-500">正在加载人脸检测模型…</p>
      <p v-else class="mt-2 text-green-600">模型已就绪</p>

      <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        <div class="min-w-0 flex-1">
          <template v-if="modelsReady">
            <UploadSection
              :uploaded-images="uploadedImages"
              :is-dragging="isDragging"
              @update:is-dragging="isDragging = $event"
              @file-change="addFiles"
              @drop="(files) => addFiles(files)"
              @clear="clearImages"
            />
            <GroupCropSection
              :groups="groups"
              :preview-images="previewImages"
              v-model:crop-width="cropWidth"
              v-model:crop-height="cropHeight"
              v-model:checked-group-keys="checkedGroupKeys"
              @open-preview="showPreview = true"
            />
          </template>
        </div>

        <div class="flex w-72 max-w-[90vw] shrink-0 flex-col gap-4 lg:w-80">
          <PreviewAside
            v-if="modelsReady"
            :preview-images="previewImages"
            :preview-aside-style="previewAsideStyle"
            :preview-cell-style="previewCellStyle"
            :preview-img-style="previewImgStyle"
            :preview-position="previewPosition"
            :set-aside-ref="(el) => { previewAsideRef.value = el }"
            @drag-start="onPreviewDragStart"
            @copy-rendered="handleCopyRendered"
          />
          <AuthorSection v-if="modelsReady" />
        </div>
      </div>
    </div>

    <PreviewModal
      :visible="showPreview"
      :preview-images="previewImages"
      :crop-width="cropWidth"
      :crop-height="cropHeight"
      :preview-cell-style="previewCellStyle"
      :preview-img-style="previewImgStyle"
      @close="showPreview = false"
    />
  </div>
</template>

<script setup>
import { useFaceModels } from './composables/useFaceModels.js'
import { useUploadedImages } from './composables/useUploadedImages.js'
import { usePreviewDrag } from './composables/usePreviewDrag.js'
import { copyRenderedStyle } from './utils/copyRenderedStyle.js'
import UploadSection from './components/UploadSection.vue'
import GroupCropSection from './components/GroupCropSection.vue'
import PreviewAside from './components/PreviewAside.vue'
import AuthorSection from './components/AuthorSection.vue'
import PreviewModal from './components/PreviewModal.vue'

const { modelsReady } = useFaceModels()

const {
  uploadedImages,
  cropWidth,
  cropHeight,
  isDragging,
  showPreview,
  checkedGroupKeys,
  groups,
  previewImages,
  previewCellStyle,
  previewImgStyle,
  addFiles,
  clearImages,
} = useUploadedImages()

const {
  previewAsideRef,
  previewPosition,
  previewAsideStyle,
  onPreviewDragStart,
} = usePreviewDrag()

async function handleCopyRendered() {
  await copyRenderedStyle(previewImages.value, cropWidth.value, cropHeight.value)
}
</script>
