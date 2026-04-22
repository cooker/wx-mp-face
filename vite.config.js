import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/** GitHub Pages 项目页为 /<仓库名>/；CI 未带 VITE_BASE 时可用 GITHUB_REPOSITORY */
function resolveBase() {
  const fromEnv = (process.env.VITE_BASE || '').trim()
  if (fromEnv) {
    const withSlash = fromEnv.startsWith('/') ? fromEnv : `/${fromEnv}`
    return withSlash.endsWith('/') ? withSlash : `${withSlash}/`
  }
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]?.trim()
  if (repo) return `/${repo}/`
  return '/'
}

export default defineConfig({
  base: resolveBase(),
  plugins: [vue()],
})
