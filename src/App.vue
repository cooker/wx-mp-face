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
              :uploaded-images="uploadedImages"
              @add-remote="addRemoteImage"
            />
            <UploadSection
              class="mt-6"
              :uploaded-images="uploadedImages"
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
                v-model:crop-width="cropWidth"
                v-model:crop-height="cropHeight"
                v-model:checked-group-keys="checkedGroupKeys"
                @open-preview="openPreview"
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
import { copyRenderedStyle } from './utils/copyRenderedStyle.js'
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
  addRemoteImage,
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

async function handleFileUpload(files) {
  const list = Array.from(files || []).filter((f) => f.type?.startsWith('image/'))
  if (!list.length) return

  const owner = githubOwner.value?.trim()
  const repo = githubRepo.value?.trim()
  const token = githubToken.value?.trim()
  if (!owner || !repo || !token) {
    uploadProgress.value = {
      total: list.length,
      current: 0,
      fileName: '',
      status: 'error',
      errorMessage: '请先在第一步配置 owner、repo 和 Token',
    }
    return
  }

  const prefix = (githubPathPrefix.value || '').trim().replace(/\/+$/, '')
  const buildPath = (name) => (prefix ? `${prefix}/${name}`.replace(/\/+/g, '/') : name)

  /** 从 File 取扩展名，无则按 MIME 推断 */
  function getExtension(file) {
    const name = file.name || ''
    const dot = name.lastIndexOf('.')
    if (dot >= 0 && dot < name.length - 1) return name.slice(dot + 1).toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg'
    const mime = (file.type || '').toLowerCase()
    if (mime.includes('png')) return 'png'
    if (mime.includes('gif')) return 'gif'
    if (mime.includes('webp')) return 'webp'
    return 'jpg'
  }

  /** 随机生成图片文件名（pathPrefix 下唯一性由调用方保证，此处仅生成单文件名） */
  function randomImageName(file) {
    const ext = getExtension(file)
    const r = Math.random().toString(36).slice(2, 10)
    const t = Date.now().toString(36)
    return `${t}-${r}.${ext}`
  }

  uploadProgress.value = {
    total: list.length,
    current: 0,
    fileName: list[0]?.name || '',
    status: 'uploading',
    errorMessage: '',
  }

  for (let i = 0; i < list.length; i++) {
    const file = list[i]
    const path = buildPath(randomImageName(file))
    try {
      const { repo: usedRepo, path: contentPath } = await uploadFileToGitHub(file, path)
      const url = getJsdelivrUrlForRepo(usedRepo, contentPath)
      if (url) await addRemoteImage(url)
    } catch (e) {
      uploadProgress.value = {
        ...uploadProgress.value,
        status: 'error',
        errorMessage: e?.message || '上传失败',
      }
      return
    }
    uploadProgress.value = {
      ...uploadProgress.value,
      current: i + 1,
      fileName: list[i + 1]?.name || '',
    }
  }

  uploadProgress.value = {
    ...uploadProgress.value,
    status: 'done',
  }
  openPreview()
  nextTick(() => {
    step3Ref.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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

async function handleCopyRendered() {
  await copyRenderedStyle(previewImages.value, cropWidth.value, cropHeight.value)
}
</script>
