<template>
  <div class="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
    <div class="mx-auto max-w-6xl">
      <h1 class="text-xl font-semibold text-gray-800 sm:text-2xl">人脸裁剪排列</h1>
      <p v-if="!modelsReady" class="mt-2 text-gray-500">正在加载人脸检测模型…</p>
      <p v-else class="mt-2 text-green-600">模型已就绪</p>

      <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
        <div class="min-w-0 flex-1">
          <template v-if="modelsReady">
            <GitHubRepoConfig
              v-model:owner="githubOwner"
              v-model:repo="githubRepo"
              v-model:branch="githubBranch"
              v-model:path-prefix="githubPathPrefix"
              v-model:token="githubToken"
              :get-jsdelivr-url="getJsdelivrUrl"
              :get-jsdelivr-url-for-repo="getJsdelivrUrlForRepo"
              :get-default-path-prefix="getDefaultPathPrefix"
              :set-path-prefix-to-current="setPathPrefixToCurrent"
              :upload-file-to-github="uploadFileToGitHub"
              :export-config="exportConfig"
              :import-config="importConfig"
              :uploaded-images="uploadedImages"
              @add-remote="addRemoteImage"
            />
            <UploadSection
              class="mt-6"
              :uploaded-images="uploadedImages"
              :uploading-files="[]"
              :is-dragging="isDragging"
              :upload-progress="uploadProgress"
              @update:is-dragging="isDragging = $event"
              @file-change="handleFileUpload"
              @drop="handleFileUpload"
              @clear="clearImages"
            />
            <div ref="step3Ref">
              <GroupCropSection
                :groups="groups"
                :preview-images="previewImages"
                :upload-progress="uploadProgress"
                v-model:crop-width="cropWidth"
                v-model:crop-height="cropHeight"
                v-model:checked-group-keys="checkedGroupKeys"
                @open-preview="openPreview"
                @confirm-upload="handleConfirmUpload"
              />
            </div>
          </template>
        </div>

        <div ref="previewAsideWrapRef" class="flex w-72 max-w-[90vw] shrink-0 flex-col gap-4 lg:w-80">
          <PreviewAside
            v-if="modelsReady"
            :preview-images="previewImages"
            :preview-aside-style="previewAsideStyle"
            :preview-cell-style="previewCellStyle"
            :preview-img-style="previewImgStyle"
            :preview-position="previewPosition"
            :set-aside-ref="setPreviewAsideRef"
            :copy-success="copySuccess"
            :is-copying="isCopying"
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
      @close="closePreview"
    />
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useFaceModels } from './composables/useFaceModels.js'
import { useUploadedImages } from './composables/useUploadedImages.js'
import { usePreviewDrag } from './composables/usePreviewDrag.js'
import { useGitHubRepoConfig } from './composables/useGitHubRepoConfig.js'
import { useClipboard } from './composables/useClipboard.js'
import { getRenderedStyleHtml } from './utils/copyRenderedStyle.js'
import { centerCropToBlob } from './utils/imageUtils.js'
import UploadSection from './components/UploadSection.vue'
import GitHubRepoConfig from './components/GitHubRepoConfig.vue'
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
  addRemoteImage,
  replaceLocalWithRemoteUrls,
  clearImages,
} = useUploadedImages()

const {
  owner: githubOwner,
  repo: githubRepo,
  branch: githubBranch,
  pathPrefix: githubPathPrefix,
  token: githubToken,
  getJsdelivrUrl,
  getJsdelivrUrlForRepo,
  getDefaultPathPrefix,
  setPathPrefixToCurrent,
  uploadFileToGitHub,
  exportConfig,
  importConfig,
} = useGitHubRepoConfig()

const step3Ref = ref(null)
const previewAsideWrapRef = ref(null)
const uploadProgress = ref({
  total: 0,
  current: 0,
  fileName: '',
  status: 'idle', // idle | uploading | done | error
  errorMessage: '',
})

function openPreview() {
  showPreview.value = true
}
function closePreview() {
  showPreview.value = false
}
function setPreviewAsideRef(el) {
  if (previewAsideRef) previewAsideRef.value = el
}

async function handleFileUpload(files) {
  const list = Array.from(files || []).filter((f) => f.type?.startsWith('image/'))
  if (!list.length) return
  await addFiles(list)
  nextTick(() => {
    step3Ref.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

async function handleConfirmUpload() {
  const toUpload = previewImages.value.filter((img) => img.file)
  if (!toUpload.length) return

  const owner = githubOwner.value?.trim()
  const repo = githubRepo.value?.trim()
  const token = githubToken.value?.trim()
  if (!owner || !repo || !token) {
    uploadProgress.value = {
      total: toUpload.length,
      current: 0,
      fileName: '',
      status: 'error',
      errorMessage: '请先在第一步配置 owner、repo 和 Token',
    }
    return
  }

  const prefix = (githubPathPrefix.value || '').trim().replace(/\/+$/, '')
  const buildPath = (name) => (prefix ? `${prefix}/${name}`.replace(/\/+/g, '/') : name)

  function getExtension(file) {
    const name = file.name || ''
    const dot = name.lastIndexOf('.')
    let ext = ''
    if (dot >= 0 && dot < name.length - 1) ext = name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, '')
    if (!ext) {
      const mime = (file.type || '').toLowerCase()
      if (mime.includes('png')) return 'png'
      if (mime.includes('gif')) return 'gif'
      if (mime.includes('webp')) return 'webp'
      return 'jpg'
    }
    return ext === 'jfif' ? 'jpg' : ext
  }

  function randomImageName(file) {
    const ext = getExtension(file)
    const r = Math.random().toString(36).slice(2, 10)
    const t = Date.now().toString(36)
    return `${t}-${r}.${ext}`
  }

  uploadProgress.value = {
    total: toUpload.length,
    current: 0,
    fileName: toUpload[0]?.file?.name || '',
    status: 'uploading',
    errorMessage: '',
  }

  const urlMap = new Map()
  let completedCount = 0

  const cw = cropWidth.value || 224
  const ch = cropHeight.value || 224

  const results = await Promise.allSettled(
    toUpload.map(async (item) => {
      const blob = await centerCropToBlob(item.file, cw, ch)
      const file = new File([blob], 'cropped.jpg', { type: 'image/jpeg' })
      const path = buildPath(randomImageName(file))
      const result = await uploadFileToGitHub(file, path)
      completedCount++
      uploadProgress.value = {
        ...uploadProgress.value,
        current: completedCount,
        fileName: completedCount < toUpload.length ? '并发上传中…' : '',
      }
      return { item, result }
    })
  )

  const failed = results.find((r) => r.status === 'rejected')
  if (failed) {
    uploadProgress.value = {
      ...uploadProgress.value,
      status: 'error',
      errorMessage: failed.reason?.message || '上传失败',
    }
    return
  }

  for (const r of results) {
    if (r.status === 'fulfilled') {
      const { item, result } = r.value
      const url = getJsdelivrUrlForRepo(result.repo, result.path)
      if (url && item.url) urlMap.set(item.url, url)
    }
  }

  replaceLocalWithRemoteUrls(urlMap)
  uploadProgress.value = { ...uploadProgress.value, status: 'done' }
  openPreview()
  nextTick(() => {
    previewAsideWrapRef.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
  setTimeout(() => {
    if (uploadProgress.value.status === 'done') {
      uploadProgress.value = { total: 0, current: 0, fileName: '', status: 'idle', errorMessage: '' }
    }
  }, 2000)
}

const {
  previewAsideRef,
  previewPosition,
  previewAsideStyle,
  onPreviewDragStart,
} = usePreviewDrag()

const { isCopying, copySuccess, copyHtml } = useClipboard()

async function handleCopyRendered() {
  try {
    const html = await getRenderedStyleHtml(previewImages.value, cropWidth.value, cropHeight.value)
    const success = await copyHtml(html)
    if (!success) throw new Error('copy failed')
  } catch (e) {
    console.error('复制失败:', e)
    alert('复制失败，请手动复制')
  }
}
</script>
