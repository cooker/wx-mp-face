function normalizeBase(base) {
  const value = (base || '/').trim()
  if (value === '/') return '/'
  return `/${value.replace(/^\/+|\/+$/g, '')}/`
}

export function resolveAssetUrl(fileName, base) {
  if (!fileName) return ''
  const envBase = typeof base === 'string' ? base : (import.meta?.env?.BASE_URL || '/')
  const normalizedBase = normalizeBase(envBase)
  const normalizedFile = String(fileName).replace(/^\/+/, '')
  return normalizedBase === '/' ? `/${normalizedFile}` : `${normalizedBase}${normalizedFile}`
}
