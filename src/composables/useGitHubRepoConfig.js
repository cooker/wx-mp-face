import { ref, watch } from 'vue'

const STORAGE_KEY = 'wx-mp-face-github-repo'

/** 根据当前时间生成路径前缀，格式 YYYY/MM/DD */
function getCurrentDatePath() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}/${m}/${day}`
}

const defaultConfig = {
  owner: '',
  repo: '',
  branch: 'main',
  pathPrefix: '',
  token: '',
}

function load() {
  const defaultPathPrefix = getCurrentDatePath()
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s) {
      const saved = { ...defaultConfig, ...JSON.parse(s) }
      saved.pathPrefix = saved.pathPrefix?.trim() || defaultPathPrefix
      return saved
    }
  } catch (_) {}
  return { ...defaultConfig, pathPrefix: defaultPathPrefix }
}

function save(config) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
  } catch (_) {}
}

/**
 * 解析 repo：支持 name[min,max] 或 name[min-max] 表示 name+min 到 name+max 的仓库列表，随机选一个
 * 例如 img[0,20] 或 img[0-20] -> img0, img1, ... img20 中随机
 */
function resolveRepo(repoStr) {
  const s = (repoStr || '').trim()
  if (!s) return ''
  const m = s.match(/^(.+)\[(\d+)[,\-](\d+)\]$/)
  if (!m) return s
  const [, base, minStr, maxStr] = m
  let min = parseInt(minStr, 10)
  let max = parseInt(maxStr, 10)
  if (min > max) [min, max] = [max, min]
  const n = min + Math.floor(Math.random() * (max - min + 1))
  return `${base}${n}`
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => {
      const m = r.result.match(/^data:[^;]+;base64,(.+)$/)
      resolve(m ? m[1] : '')
    }
    r.onerror = reject
    r.readAsDataURL(file)
  })
}

/**
 * GitHub 仓库配置，用于生成 jsDelivr CDN 图片 URL
 * 格式: https://fastly.jsdelivr.net/gh/{owner}/{repo}@{branch}/{path}
 * repo 支持 img[0,20] 表示从 img0 到 img20 随机选一个
 */
export function useGitHubRepoConfig() {
  const owner = ref(load().owner)
  const repo = ref(load().repo)
  const branch = ref(load().branch)
  const pathPrefix = ref(load().pathPrefix)
  const token = ref(load().token)

  watch(
    [owner, repo, branch, pathPrefix, token],
    () =>
      save({
        owner: owner.value,
        repo: repo.value,
        branch: branch.value,
        pathPrefix: pathPrefix.value,
        token: token.value,
      }),
    { deep: true }
  )

  function getJsdelivrUrl(path) {
    const o = owner.value?.trim()
    const r = resolveRepo(repo.value)
    const b = branch.value?.trim() || 'main'
    const prefix = (pathPrefix.value?.trim() || '').replace(/\/+$/, '')
    const p = path?.trim() ? (prefix ? `${prefix}/${path}`.replace(/\/+/g, '/') : path) : prefix
    if (!o || !r) return ''
    return `https://fastly.jsdelivr.net/gh/${o}/${r}@${b}/${p}`
  }

  /** 获取根据当前时间自动生成的前缀（供占位、重置使用） */
  function getDefaultPathPrefix() {
    return getCurrentDatePath()
  }

  /** 将 pathPrefix 设为当前日期 */
  function setPathPrefixToCurrent() {
    pathPrefix.value = getCurrentDatePath()
  }

  /**
   * 上传文件到 GitHub 仓库
   * @param {File} file
   * @param {string} path - 仓库内路径，如 2026/02/02/xxx.jpg
   * @returns {Promise<{ repo: string, path: string }>} 返回 repo 与 API 响应的 content.path（用于拼接加速域名）
   */
  async function uploadFileToGitHub(file, path) {
    const o = owner.value?.trim()
    const r = resolveRepo(repo.value)
    const b = branch.value?.trim() || 'main'
    const t = token.value?.trim()
    if (!o || !r) throw new Error('请配置 owner 和 repo')
    if (!t) throw new Error('上传到 GitHub 需要配置 Token')
    const content = await fileToBase64(file)
    if (!content) throw new Error('文件读取失败')
    const res = await fetch(
      `https://api.github.com/repos/${encodeURIComponent(o)}/${encodeURIComponent(r)}/contents/${encodeURIComponent(path)}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${t}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `upload ${path}`,
          content,
          branch: b,
        }),
      }
    )
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.message || res.statusText || `上传失败 ${res.status}`)
    }
    const data = await res.json()
    const contentPath = data?.content?.path ?? path
    return { repo: r, path: contentPath }
  }

  /** 导出配置为 JSON 对象 */
  function exportConfig() {
    return {
      owner: owner.value || '',
      repo: repo.value || '',
      branch: branch.value || 'main',
      pathPrefix: pathPrefix.value || '',
      token: token.value || '',
    }
  }

  /** 从 JSON 对象导入配置 */
  function importConfig(cfg) {
    if (!cfg || typeof cfg !== 'object') return
    owner.value = String(cfg.owner ?? '').trim()
    repo.value = String(cfg.repo ?? '').trim()
    branch.value = String(cfg.branch ?? 'main').trim() || 'main'
    pathPrefix.value = String(cfg.pathPrefix ?? '').trim()
    token.value = String(cfg.token ?? '').trim()
  }

  /** 使用指定 repo 生成 jsDelivr URL，path 为仓库内完整路径（如 2026/02/02/xxx.jpg） */
  function getJsdelivrUrlForRepo(repoName, path) {
    const o = owner.value?.trim()
    const b = branch.value?.trim() || 'main'
    const p = (path || '').trim().replace(/^\/+/, '')
    if (!o || !repoName || !p) return ''
    return `https://fastly.jsdelivr.net/gh/${o}/${repoName}@${b}/${p}`
  }

  return {
    owner,
    repo,
    branch,
    pathPrefix,
    token,
    getJsdelivrUrl,
    getJsdelivrUrlForRepo,
    getDefaultPathPrefix,
    setPathPrefixToCurrent,
    uploadFileToGitHub,
    exportConfig,
    importConfig,
  }
}
