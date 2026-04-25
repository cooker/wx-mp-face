import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { copyImageBlobToClipboard } from './useClipboard.js'

describe('copyImageBlobToClipboard', () => {
  const originalClipboardItem = globalThis.ClipboardItem
  const originalNavigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator')

  beforeEach(() => {
    globalThis.ClipboardItem = vi.fn(function ClipboardItem(data) {
      this.data = data
    })
    Object.defineProperty(globalThis, 'navigator', {
      configurable: true,
      value: {
        clipboard: {
          write: vi.fn(),
        },
      },
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    globalThis.ClipboardItem = originalClipboardItem
    if (originalNavigatorDescriptor) {
      Object.defineProperty(globalThis, 'navigator', originalNavigatorDescriptor)
    }
  })

  it('jpeg 首次失败后，使用 image/png 键名重试成功', async () => {
    const blob = new Blob(['x'], { type: 'image/jpeg' })
    globalThis.navigator.clipboard.write
      .mockRejectedValueOnce(new Error('not support image/jpeg'))
      .mockResolvedValueOnce(undefined)

    const ok = await copyImageBlobToClipboard(blob)

    expect(ok).toBe(true)
    expect(globalThis.navigator.clipboard.write).toHaveBeenCalledTimes(2)
    expect(globalThis.ClipboardItem).toHaveBeenNthCalledWith(1, { 'image/jpeg': blob })
    expect(globalThis.ClipboardItem).toHaveBeenNthCalledWith(2, { 'image/png': blob })
    expect(globalThis.navigator.clipboard.write).toHaveBeenNthCalledWith(1, [
      expect.objectContaining({ data: { 'image/jpeg': blob } }),
    ])
    expect(globalThis.navigator.clipboard.write).toHaveBeenNthCalledWith(2, [
      expect.objectContaining({ data: { 'image/png': blob } }),
    ])
  })
})
