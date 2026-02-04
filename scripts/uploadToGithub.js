/**
 * 将本地图片上传到 GitHub 仓库的工具
 * 使用: node scripts/uploadToGithub.js [本地文件路径] [可选: 仓库内文件名]
 * 或作为模块: import { uploadToGithub, createUploader } from './scripts/uploadToGithub.js'
 */

import fs from 'fs'
import path from 'path'

// --- 配置（可通过 process.env 覆盖）---
const CONFIG = {
  token: process.env.GITHUB_TOKEN || '你的_GITHUB_TOKEN',
  username: process.env.GITHUB_USERNAME || '你的用户名',
  repo: process.env.GITHUB_REPO || 'img0',
  branch: process.env.GITHUB_BRANCH || 'master',
  directory: process.env.GITHUB_UPLOAD_DIR || 'uploads/2026', // 自定义目录（不需要以 / 开头）
}

/**
 * 上传图片到 GitHub
 * @param {string} localFilePath 本地图片路径
 * @param {string} [fileName] 存储到仓库的文件名，不传则使用本地文件名
 * @returns {Promise<string>} 成功返回 Raw 图片链接
 */
export async function uploadToGithub(localFilePath, fileName) {
  const token = CONFIG.token?.trim()
  const username = CONFIG.username?.trim()
  const repo = CONFIG.repo?.trim()
  const branch = CONFIG.branch?.trim() || 'master'
  const directory = (CONFIG.directory || '').trim().replace(/^\/+/, '')

  if (!token || !username || !repo) {
    throw new Error('请配置 token、username、repo（或设置环境变量 GITHUB_TOKEN、GITHUB_USERNAME、GITHUB_REPO）')
  }

  const name = fileName || path.basename(localFilePath)
  const remotePath = directory ? `${directory}/${name}` : name

  const fileBuffer = fs.readFileSync(localFilePath)
  const base64Content = fileBuffer.toString('base64')

  const url = `https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repo)}/contents/${encodeURIComponent(remotePath)}`

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Upload image: ${name}`,
      content: base64Content,
      branch: branch,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || res.statusText || `上传失败 ${res.status}`)
  }

  const rawUrl = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${remotePath}`
  return rawUrl
}

/**
 * 使用自定义配置创建上传函数
 * @param {object} options { token, username, repo, branch, directory }
 * @returns {(localFilePath: string, fileName?: string) => Promise<string>}
 */
export function createUploader(options = {}) {
  const cfg = { ...CONFIG, ...options }
  return async function (localFilePath, fileName) {
    const token = cfg.token?.trim()
    const username = cfg.username?.trim()
    const repo = cfg.repo?.trim()
    const branch = (cfg.branch || 'master').trim()
    const directory = (cfg.directory || '').trim().replace(/^\/+/, '')

    if (!token || !username || !repo) {
      throw new Error('请提供 token、username、repo')
    }

    const name = fileName || path.basename(localFilePath)
    const remotePath = directory ? `${directory}/${name}` : name

    const fileBuffer = fs.readFileSync(localFilePath)
    const base64Content = fileBuffer.toString('base64')

    const url = `https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(repo)}/contents/${encodeURIComponent(remotePath)}`

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Upload image: ${name}`,
        content: base64Content,
        branch: branch,
      }),
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw new Error(err.message || res.statusText || `上传失败 ${res.status}`)
    }

    return `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${remotePath}`
  }
}

// --- CLI 入口 ---
const isMain = process.argv[1] && process.argv[1].endsWith('uploadToGithub.js')
if (isMain && process.argv[2]) {
  const localPath = process.argv[2]
  const fileName = process.argv[3] || path.basename(localPath)
  uploadToGithub(localPath, fileName)
    .then((rawUrl) => {
      console.log('✅ 上传成功！')
      console.log('🔗 图片链接:', rawUrl)
    })
    .catch((err) => {
      console.error('❌ 上传失败:', err.message)
      process.exit(1)
    })
}
