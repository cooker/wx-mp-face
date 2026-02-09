# 复制代码按钮 - 实现提示词

## 功能描述

实现一个「复制代码」按钮，点击后将指定 HTML 内容复制到剪贴板，并显示复制成功反馈。

## 交互行为

- 默认文案：`复制代码`（或 `复制HTML` 根据场景）
- 复制成功后：文案切换为 `已复制`，约 3 秒后恢复
- 复制中：按钮禁用（`:disabled="isCopying"`）
- 无内容可复制时：可隐藏或禁用按钮（如 `v-if="images.length > 0"`）

## UI 结构

```html
<button
  @click="copyToClipboard"
  class="copy-btn"
  :disabled="isCopying"
>
  <!-- 复制图标（默认态） -->
  <svg v-if="!copySuccess" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke-width="2"/>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke-width="2"/>
  </svg>
  <!-- 勾选图标（成功态） -->
  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polyline points="20 6 9 17 4 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <span>{{ copySuccess ? '已复制' : '复制代码' }}</span>
</button>
```

## 样式规范

- 布局：`display: flex`，`align-items: center`，`gap: 0.5rem`
- 背景：`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- 文字：白色，`font-size: 0.875rem`，`font-weight: 500`
- 圆角：`border-radius: 12px`
- 内边距：`padding: 0.75rem 1.25rem`
- 阴影：`box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3)`
- 悬停：`transform: translateY(-2px)`，阴影加深
- 禁用：`opacity: 0.6`，`cursor: not-allowed`
- 图标：`width: 18px`，`height: 18px`

## 逻辑实现

使用 `useClipboard` composable：

```js
const { isCopying, copySuccess, copyHtml } = useClipboard()

const copyToClipboard = async () => {
  try {
    const success = await copyHtml(htmlContent)
    if (!success) throw new Error('copy failed')
  } catch (error) {
    console.error('复制失败:', error)
    alert('复制失败，请手动复制')
  }
}
```

复制策略：优先 ClipboardItem 富文本 → execCommand 降级 → 纯文本兜底。
