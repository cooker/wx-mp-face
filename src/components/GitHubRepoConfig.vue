<template>
  <n-card :bordered="true" size="small">
    <template #header>
      <n-space justify="space-between" align="center" style="width: 100%">
        <span class="card-title">第一步：设置 GitHub 仓库配置</span>
        <n-button v-if="isConfigured" text type="primary" size="tiny" @click="isCollapsed = !isCollapsed">
          {{ isCollapsed ? '展开配置' : '收起' }}
        </n-button>
      </n-space>
    </template>

    <template v-if="!isCollapsed">
      <n-space vertical :size="16">
        <n-text depth="3" style="font-size: 12px">
          配置后可用
          <n-code size="small">https://fastly.jsdelivr.net/gh/owner/repo@branch/路径</n-code>
          格式展示图片
        </n-text>

        <div class="form-grid">
          <n-form-item label="owner" label-placement="top" :show-feedback="false">
            <n-input v-model:value="owner" placeholder="如 bucketio" clearable />
          </n-form-item>
          <n-form-item label="repo" label-placement="top" :show-feedback="false">
            <n-input v-model:value="repo" placeholder="如 img18 或 img[0-20]（随机）" clearable />
            <n-text depth="3" style="font-size: 11px; margin-top: 4px; display: block">
              支持 img[0,20] 或 img[0-20] 表示 img0～img20 随机选一个
            </n-text>
          </n-form-item>
          <n-form-item label="branch" label-placement="top" :show-feedback="false">
            <n-input v-model:value="branch" placeholder="main" clearable />
          </n-form-item>
          <n-form-item class="form-grid-full" label="pathPrefix（根据当前时间自动生成，可选）" label-placement="top" :show-feedback="false">
            <n-input-group>
              <n-input
                v-model:value="pathPrefix"
                :placeholder="`如 ${defaultPathPrefixPlaceholder}`"
                clearable
              />
              <n-button @click="setPathPrefixToCurrent?.()">设为当前日期</n-button>
            </n-input-group>
          </n-form-item>
          <n-form-item class="form-grid-full" label="GitHub Token（可选）" label-placement="top" :show-feedback="false">
            <n-input
              v-model:value="token"
              type="password"
              show-password-on="click"
              placeholder="用于 GitHub API，仅保存在本机"
              autocomplete="off"
              clearable
            />
            <n-text depth="3" style="font-size: 11px; margin-top: 4px; display: block">
              仅保存在本机 localStorage，用于调用 GitHub API 等
            </n-text>
          </n-form-item>
        </div>

        <n-space :wrap="true" :size="8">
          <n-button size="small" @click="onExport">导出配置</n-button>
          <input
            ref="importInputRef"
            type="file"
            accept=".json,application/json"
            class="file-input-hidden"
            @change="onImportFile"
          />
          <n-button size="small" @click="importInputRef?.click()">导入配置</n-button>
        </n-space>

        <n-alert v-if="importError" type="error" :title="importError" />

        <div v-if="uploadedFileNames.length">
          <n-text depth="2" style="font-size: 12px; display: block; margin-bottom: 8px">
            添加远程图片（先上传到 GitHub 再添加 CDN 链接，需配置 Token）
          </n-text>
          <n-space :wrap="true" :size="8">
            <n-button
              v-for="name in uploadedFileNames"
              :key="name"
              size="tiny"
              :disabled="uploadingName !== ''"
              :loading="uploadingName === name"
              @click="addByName(name)"
            >
              {{ name }}
            </n-button>
          </n-space>
          <n-alert v-if="uploadError" type="error" :title="uploadError" style="margin-top: 8px" />
        </div>

        <n-text v-if="exampleUrl" depth="3" style="font-size: 11px; display: block" :title="exampleUrl">
          示例：{{ exampleUrl }}
        </n-text>
      </n-space>
    </template>
    <n-text v-else-if="isConfigured" depth="3" style="font-size: 12px">
      已配置 {{ owner }}/{{ repo }}<template v-if="branch"> @{{ branch }}</template>
    </n-text>
  </n-card>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  owner: { type: String, default: '' },
  repo: { type: String, default: '' },
  branch: { type: String, default: 'main' },
  pathPrefix: { type: String, default: '' },
  token: { type: String, default: '' },
  getJsdelivrUrl: { type: Function, required: true },
  getJsdelivrUrlForRepo: { type: Function, default: null },
  getDefaultPathPrefix: { type: Function, default: null },
  setPathPrefixToCurrent: { type: Function, default: null },
  uploadFileToGitHub: { type: Function, default: null },
  exportConfig: { type: Function, default: null },
  importConfig: { type: Function, default: null },
  uploadedImages: { type: Array, default: () => [] },
})

const emit = defineEmits(['update:owner', 'update:repo', 'update:branch', 'update:pathPrefix', 'update:token', 'add-remote'])

const owner = computed({ get: () => props.owner, set: (v) => emit('update:owner', v) })
const repo = computed({ get: () => props.repo, set: (v) => emit('update:repo', v) })
const branch = computed({ get: () => props.branch, set: (v) => emit('update:branch', v) })
const pathPrefix = computed({ get: () => props.pathPrefix, set: (v) => emit('update:pathPrefix', v) })
const token = computed({ get: () => props.token, set: (v) => emit('update:token', v) })

const importInputRef = ref(null)

const defaultPathPrefixPlaceholder = computed(() =>
  typeof props.getDefaultPathPrefix === 'function' ? props.getDefaultPathPrefix() : '2026/02/02'
)

const isConfigured = computed(() => !!(props.owner?.trim() && props.repo?.trim()))
const isCollapsed = ref(false)
watch(isConfigured, (v) => { if (v) isCollapsed.value = true }, { immediate: true })

const localImagesByName = computed(() => {
  const map = new Map()
  for (const img of props.uploadedImages || []) {
    const n = img.file?.name?.trim()
    if (n && !map.has(n)) map.set(n, { name: n, file: img.file })
  }
  return map
})

const uploadedFileNames = computed(() => Array.from(localImagesByName.value.keys()))

const exampleUrl = computed(() => {
  if (!props.owner || !props.repo) return ''
  return props.getJsdelivrUrl('2026/02/03/xxx.jpg') || ''
})

const uploadingName = ref('')
const uploadError = ref('')
const importError = ref('')

function onExport() {
  if (typeof props.exportConfig !== 'function') return
  const cfg = props.exportConfig()
  const blob = new Blob([JSON.stringify(cfg, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `github-config-${Date.now()}.json`
  a.click()
  URL.revokeObjectURL(url)
}

async function onImportFile(e) {
  importError.value = ''
  const file = e.target?.files?.[0]
  if (!file) return
  try {
    const text = await file.text()
    const cfg = JSON.parse(text)
    if (typeof props.importConfig === 'function') props.importConfig(cfg)
  } catch (err) {
    importError.value = err?.message || '导入失败，请检查 JSON 格式'
  }
  e.target.value = ''
}

function buildPath(name) {
  const prefix = (props.pathPrefix || '').trim().replace(/\/+$/, '')
  return prefix ? `${prefix}/${name}`.replace(/\/+/g, '/') : name
}

function normalizeUploadName(name) {
  if (!name || typeof name !== 'string') return name
  return name.replace(/\.jfif$/i, '.jpg')
}

async function addByName(name) {
  uploadError.value = ''
  const path = buildPath(normalizeUploadName(name))
  const entry = localImagesByName.value.get(name)

  if (entry?.file && typeof props.uploadFileToGitHub === 'function') {
    uploadingName.value = name
    try {
      const { repo: usedRepo } = await props.uploadFileToGitHub(entry.file, path)
      const url =
        typeof props.getJsdelivrUrlForRepo === 'function'
          ? props.getJsdelivrUrlForRepo(usedRepo, path)
          : props.getJsdelivrUrl(name)
      if (url) emit('add-remote', url)
    } catch (e) {
      uploadError.value = e?.message || '上传失败'
    } finally {
      uploadingName.value = ''
    }
  } else {
    const url = props.getJsdelivrUrl(name)
    if (url) emit('add-remote', url)
  }
}
</script>

<style scoped>
.card-title {
  font-size: 14px;
  font-weight: 500;
}

.file-input-hidden {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.form-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-grid-full {
    grid-column: 1 / -1;
  }
}
</style>
