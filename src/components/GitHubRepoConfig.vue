<template>
  <section class="rounded-xl border border-gray-200 bg-white p-4 shadow">
    <h2 class="mb-3 text-sm font-medium text-gray-700">第一步：设置 GitHub 仓库配置</h2>
    <p class="mb-3 text-xs text-gray-500">
      配置后可用 <code class="rounded bg-gray-100 px-1">https://fastly.jsdelivr.net/gh/owner/repo@branch/路径</code> 格式展示图片
    </p>
    <div class="mb-3 grid gap-2 sm:grid-cols-2">
      <div>
        <label class="mb-1 block text-xs text-gray-600">owner</label>
        <input
          v-model="owner"
          type="text"
          placeholder="如 bucketio"
          class="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div>
        <label class="mb-1 block text-xs text-gray-600">repo</label>
        <input
          v-model="repo"
          type="text"
          placeholder="如 img18 或 img[0-20]（随机）"
          class="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
        <p class="mt-0.5 text-xs text-gray-400">支持 img[0,20] 或 img[0-20] 表示 img0～img20 随机选一个</p>
      </div>
      <div>
        <label class="mb-1 block text-xs text-gray-600">branch</label>
        <input
          v-model="branch"
          type="text"
          placeholder="main"
          class="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div class="sm:col-span-2">
        <label class="mb-1 block text-xs text-gray-600">pathPrefix（根据当前时间自动生成，可选）</label>
        <div class="flex flex-wrap gap-2">
          <input
            v-model="pathPrefix"
            type="text"
            :placeholder="`如 ${defaultPathPrefixPlaceholder}`"
            class="min-w-0 flex-1 rounded border border-gray-300 px-2 py-1.5 text-sm"
          />
          <button
            type="button"
            class="shrink-0 rounded border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
            @click="setPathPrefixToCurrent?.()"
          >
            设为当前日期
          </button>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label class="mb-1 block text-xs text-gray-600">GitHub Token（可选）</label>
        <input
          v-model="token"
          type="password"
          autocomplete="off"
          placeholder="用于 GitHub API，仅保存在本机"
          class="w-full rounded border border-gray-300 px-2 py-1.5 text-sm"
        />
        <p class="mt-0.5 text-xs text-gray-400">仅保存在本机 localStorage，用于调用 GitHub API 等</p>
      </div>
    </div>
    <div class="mb-3 flex flex-wrap gap-2">
      <button
        type="button"
        class="rounded border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
        @click="onExport"
      >
        导出配置
      </button>
      <label class="cursor-pointer rounded border border-gray-300 bg-white px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50">
        <input type="file" accept=".json,application/json" class="sr-only" @change="onImportFile" />
        导入配置
      </label>
    </div>
    <p v-if="importError" class="mb-2 text-xs text-red-500">{{ importError }}</p>
    <div v-if="uploadedFileNames.length" class="mb-2">
      <p class="mb-1.5 text-xs text-gray-600">添加远程图片（先上传到 GitHub 再添加 CDN 链接，需配置 Token）</p>
      <div class="flex flex-wrap gap-1.5">
        <button
          v-for="name in uploadedFileNames"
          :key="name"
          type="button"
          class="rounded border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50"
          :title="pathPrefix ? `${pathPrefix}/${name}` : name"
          :disabled="uploadingName !== ''"
          @click="addByName(name)"
        >
          {{ name }}{{ uploadingName === name ? ' 上传中…' : '' }}
        </button>
      </div>
      <p v-if="uploadError" class="mt-1 text-xs text-red-500">{{ uploadError }}</p>
    </div>
    <p v-if="exampleUrl" class="truncate text-xs text-gray-400" :title="exampleUrl">
      示例：{{ exampleUrl }}
    </p>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

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

const defaultPathPrefixPlaceholder = computed(() =>
  typeof props.getDefaultPathPrefix === 'function' ? props.getDefaultPathPrefix() : '2026/02/02'
)

/** 本地图片（有 file）：name -> { name, file }，用于上传到 GitHub */
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

async function addByName(name) {
  uploadError.value = ''
  const path = buildPath(name)
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
