<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-layout
      class="app-layout"
      embedded
      content-style="padding: 12px 16px 24px; min-height: 100vh; background: var(--n-color)"
    >
      <n-layout-content>
        <div class="app-inner">
          <div class="app-header">
            <div>
              <n-h1 style="margin: 0; font-size: 20px; font-weight: 600">人脸裁剪排列</n-h1>
              <n-text v-if="!modelsReady" depth="3" style="display: block; margin-top: 4px">
                正在加载人脸检测模型…
              </n-text>
              <n-text v-else type="success" style="display: block; margin-top: 4px">模型已就绪</n-text>
            </div>
          </div>

          <div v-if="modelsReady" class="main-columns">
            <div class="main-left">
              <n-card size="small" :bordered="true" class="left-workspace">
                <n-tabs type="line" animated pane-style="padding-top: 10px">
                  <n-tab-pane name="repo" tab="仓库配置">
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
                  </n-tab-pane>
                  <n-tab-pane name="upload-crop" tab="上传与裁剪">
                    <n-space vertical :size="12">
                      <UploadSection
                        :uploaded-images="uploadedImages"
                        :uploading-files="[]"
                        :is-dragging="isDragging"
                        :upload-progress="uploadProgress"
                        @update:is-dragging="isDragging = $event"
                        @file-change="handleFileUpload"
                        @drop="handleFileUpload"
                        @clear="handleClearImages"
                      />
                      <n-empty
                        v-if="!previewImages.length"
                        description="上传图片后将在此展示九宫格预览"
                        size="small"
                        style="padding: 4px 0"
                      />
                      <GroupCropSection
                        :groups="groups"
                        :preview-images="previewImages"
                        :upload-progress="uploadProgress"
                        v-model:crop-width="cropWidth"
                        v-model:crop-height="cropHeight"
                        v-model:checked-image-urls="checkedImageUrls"
                        @open-preview="openPreview"
                        @confirm-upload="handleConfirmUpload"
                      />
                    </n-space>
                  </n-tab-pane>
                  <n-tab-pane name="stitch" tab="三图拼接">
                    <ThreeImageStitchSection
                      :uploaded-images="uploadedImages"
                      :upload-stitched-file="handleStitchedUpload"
                    />
                  </n-tab-pane>
                </n-tabs>
              </n-card>
            </div>
            <div ref="previewAsideWrapRef" class="main-right">
              <n-space vertical :size="10">
                <div class="preview-outer-header">
                  <n-text strong style="font-size: 15px">实时预览</n-text>
                  <n-text
                    v-if="previewImages.length"
                    depth="3"
                    style="display: block; margin-top: 4px; font-size: 12px"
                  >
                    拖动手柄排序；点击图片放大；右上角可删除
                  </n-text>
                </div>
                <PreviewAside
                  :preview-images="previewImages"
                  :preview-cell-style="previewCellStyle"
                  :preview-grid-style="previewGridStyle"
                  :preview-img-style="previewImgStyle"
                  :failed-upload-urls="uploadProgress.failedUrls"
                  :copy-success="copySuccess"
                  :is-copying="isCopying"
                  v-model:grid-columns="gridColumns"
                  v-model:grid-rows="gridRows"
                  :reorder-preview-images="reorderPreviewImages"
                  :remove-uploaded-image="onRemoveUploadedImage"
                  @copy-rendered="handleCopyRendered"
                />
                <AuthorSection />
              </n-space>
            </div>
          </div>
        </div>
      </n-layout-content>
    </n-layout>

    <PreviewModal
      :visible="showPreview"
      :preview-images="previewImages"
      :crop-width="cropWidth"
      :crop-height="cropHeight"
      :grid-columns="gridColumns"
      :grid-rows="gridRows"
      :preview-cell-style="previewCellStyle"
      :preview-img-style="previewImgStyle"
      @close="closePreview"
    />
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { createDiscreteApi } from 'naive-ui'
import { useFaceModels } from './composables/useFaceModels.js'
import { useUploadedImages } from './composables/useUploadedImages.js'
import { useGitHubRepoConfig } from './composables/useGitHubRepoConfig.js'
import { useClipboard } from './composables/useClipboard.js'
import { getRenderedStyleHtml } from './utils/copyRenderedStyle.js'
import { centerCropToBlob } from './utils/imageUtils.js'
import { runUploadConcurrentThenSerialRetry } from './utils/uploadRetryQueue.js'
import UploadSection from './components/UploadSection.vue'
import GitHubRepoConfig from './components/GitHubRepoConfig.vue'
import GroupCropSection from './components/GroupCropSection.vue'
import PreviewAside from './components/PreviewAside.vue'
import AuthorSection from './components/AuthorSection.vue'
import PreviewModal from './components/PreviewModal.vue'
import ThreeImageStitchSection from './components/ThreeImageStitchSection.vue'

const { message } = createDiscreteApi(['message'])

const themeOverrides = {
  common: {
    borderRadius: '10px',
  },
}

const { modelsReady } = useFaceModels()

const {
  uploadedImages,
  cropWidth,
  cropHeight,
  gridColumns,
  gridRows,
  previewGridStyle,
  isDragging,
  showPreview,
  checkedImageUrls,
  groups,
  previewImages,
  previewCellStyle,
  previewImgStyle,
  addFiles,
  addRemoteImage,
  replaceLocalWithRemoteUrls,
  reorderPreviewImages,
  removeUploadedImage,
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

const previewAsideWrapRef = ref(null)
const uploadProgress = ref({
  total: 0,
  current: 0,
  fileName: '',
  status: 'idle',
  errorMessage: '',
  failedUrls: [],
})

function handleClearImages() {
  clearImages()
  uploadProgress.value = {
    total: 0,
    current: 0,
    fileName: '',
    status: 'idle',
    errorMessage: '',
    failedUrls: [],
  }
}

function onRemoveUploadedImage(url) {
  removeUploadedImage(url)
  const fu = uploadProgress.value.failedUrls
  if (fu?.length) {
    uploadProgress.value = {
      ...uploadProgress.value,
      failedUrls: fu.filter((u) => u !== url),
    }
  }
}

function openPreview() {
  showPreview.value = true
}
function closePreview() {
  showPreview.value = false
}
async function handleFileUpload(files) {
  const list = Array.from(files || []).filter((f) => f.type?.startsWith('image/'))
  if (!list.length) return
  await addFiles(list)
}

async function handleStitchedUpload(file) {
  const owner = githubOwner.value?.trim()
  const repo = githubRepo.value?.trim()
  const token = githubToken.value?.trim()
  if (!owner || !repo || !token) {
    message.warning('请先在第一步配置 owner、repo 和 Token')
    return
  }
  const prefix = (githubPathPrefix.value || '').trim().replace(/\/+$/, '')
  const buildPath = (name) => (prefix ? `${prefix}/${name}`.replace(/\/+/g, '/') : name)
  const r = Math.random().toString(36).slice(2, 12)
  const t = Date.now().toString(36)
  const rand =
    typeof crypto !== 'undefined' && crypto.getRandomValues
      ? Array.from(crypto.getRandomValues(new Uint8Array(4)))
          .map((n) => n.toString(36))
          .join('')
      : Math.random().toString(36).slice(2, 6)
  const path = buildPath(`stitched-${t}-${r}-${rand}.jpg`)
  try {
    const { repo: usedRepo, path: contentPath } = await uploadFileToGitHub(file, path)
    const url = getJsdelivrUrlForRepo(usedRepo, contentPath)
    if (url) await addRemoteImage(url, { cropUploaded: true })
    message.success('拼接图已上传并加入预览列表')
    return url || ''
  } catch (e) {
    message.error(e?.message || '上传失败')
    throw e
  }
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
      failedUrls: [],
    }
    message.warning('请先在第一步配置 owner、repo 和 Token')
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
    const r = Math.random().toString(36).slice(2, 12)
    const t = Date.now().toString(36)
    const rand = typeof crypto !== 'undefined' && crypto.getRandomValues
      ? Array.from(crypto.getRandomValues(new Uint8Array(4)))
          .map((n) => n.toString(36))
          .join('')
      : Math.random().toString(36).slice(2, 6)
    return `${t}-${r}-${rand}.${ext}`
  }

  uploadProgress.value = {
    total: toUpload.length,
    current: 0,
    fileName: toUpload[0]?.file?.name || '',
    status: 'uploading',
    errorMessage: '',
    failedUrls: [],
  }

  const urlMap = new Map()
  let completedCount = 0

  const cw = cropWidth.value || 224
  const ch = cropHeight.value || 224

  const tasks = toUpload.map((item) => ({
    item,
    task: async () => {
      const blob = await centerCropToBlob(item.file, cw, ch)
      const file = new File([blob], 'cropped.jpg', { type: 'image/jpeg' })
      const path = buildPath(randomImageName(file))
      const result = await uploadFileToGitHub(file, path)
      return { item, result }
    },
  }))

  const maxSerialRetry = 3
  const results = await runUploadConcurrentThenSerialRetry(tasks, {
    maxSerialRetry,
    onAttempt: ({ phase, taskIndex, attempt, total, completedConcurrent }) => {
      if (phase === 'concurrent') {
        uploadProgress.value = {
          ...uploadProgress.value,
          fileName: `并发上传 ${completedConcurrent ?? 0}/${total}`,
        }
      } else {
        uploadProgress.value = {
          ...uploadProgress.value,
          fileName: `串行重试 第 ${taskIndex + 1}/${total} 张（${attempt}/${maxSerialRetry}）`,
        }
      }
    },
  })

  completedCount = results.filter((r) => r.status === 'fulfilled').length
  uploadProgress.value = {
    ...uploadProgress.value,
    current: completedCount,
    fileName: '',
  }

  for (const r of results) {
    if (r.status === 'fulfilled') {
      const { item, result } = r.value
      const url = getJsdelivrUrlForRepo(result.repo, result.path)
      if (url && item.url) urlMap.set(item.url, url)
    }
  }
  replaceLocalWithRemoteUrls(urlMap)

  const failed = results.find((r) => r.status === 'rejected')
  if (failed) {
    const failedCount = results.filter((r) => r.status === 'rejected').length
    const failedUrls = []
    results.forEach((r, i) => {
      if (r.status === 'rejected' && toUpload[i]?.url) failedUrls.push(toUpload[i].url)
    })
    uploadProgress.value = {
      ...uploadProgress.value,
      status: 'error',
      errorMessage:
        (failed.reason?.message || '上传失败') +
        `，${failedCount} 张失败（并发后已串行重试 ${maxSerialRetry} 次）`,
      failedUrls,
    }
    message.error(uploadProgress.value.errorMessage)
    return
  }

  uploadProgress.value = { ...uploadProgress.value, status: 'done', failedUrls: [] }
  message.success('上传完成')
  setTimeout(() => {
    if (uploadProgress.value.status === 'done') {
      uploadProgress.value = {
        total: 0,
        current: 0,
        fileName: '',
        status: 'idle',
        errorMessage: '',
        failedUrls: [],
      }
    }
  }, 2000)
}

const { isCopying, copySuccess, copyHtml } = useClipboard()

async function handleCopyRendered() {
  try {
    const html = await getRenderedStyleHtml(
      previewImages.value,
      cropWidth.value,
      cropHeight.value,
      gridColumns.value,
      gridRows.value
    )
    const success = await copyHtml(html)
    if (!success) throw new Error('copy failed')
    message.success('已复制到剪贴板')
  } catch (e) {
    console.error('复制失败:', e)
    message.error('复制失败，请手动复制')
  }
}
</script>

<style scoped>
.app-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.app-header {
  flex-shrink: 0;
  margin-bottom: 8px;
}

.main-columns {
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: flex-start;
}

.main-left {
  flex: 1 1 auto;
  min-width: 0;
}

.left-workspace {
  max-height: none;
}

.left-workspace :deep(.n-card__content) {
  overflow: visible;
}

.main-right {
  width: 360px;
  max-width: 40vw;
  flex-shrink: 0;
}

@media (min-width: 1024px) {
  .main-right {
    width: 380px;
    max-width: 380px;
  }
}

.preview-outer-header {
  padding-bottom: 2px;
}

@media (max-width: 1023px) {
  .main-columns {
    gap: 10px;
  }

  .main-right {
    width: 320px;
    max-width: 45vw;
  }
}
</style>
