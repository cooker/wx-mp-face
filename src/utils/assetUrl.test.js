import { describe, it, expect } from 'vitest'
import { resolveAssetUrl } from './assetUrl.js'

describe('resolveAssetUrl', () => {
  it('在 GitHub Pages 子路径下正确拼接资源地址', () => {
    expect(resolveAssetUrl('zsm.jpg', '/wx-mp-face/')).toBe('/wx-mp-face/zsm.jpg')
  })

  it('处理根路径部署', () => {
    expect(resolveAssetUrl('zsm.jpg', '/')).toBe('/zsm.jpg')
  })
})
