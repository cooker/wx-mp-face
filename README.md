# 人脸裁剪排列 · wx-mp-face

基于人脸识别的图片上传、按尺寸分组、自定义裁剪与九宫格预览的 Web 应用。

## 技术栈

- **人脸识别**：face-api.js（Tiny Face Detector）
- **运行环境**：Node.js ≥ 22.14.0
- **包管理**：pnpm
- **前端**：Vue 3、Vite、Tailwind CSS

## 功能

- 上传图片：支持点击选择、拖拽上传、多选
- 按图片尺寸分组展示
- 自定义裁剪分辨率（默认取所有图片的最小宽×最小高）
- 勾选分组后实时预览，九宫格排列
- 右侧实时预览面板，支持拖动位置
- 清空已上传图片
- **GitHub 仓库图片**：配置 owner/repo/branch/pathPrefix 后，可按相对路径添加远程图片，以 jsDelivr 格式展示：`https://fastly.jsdelivr.net/gh/owner/repo@branch/路径`

## 快速开始

### 环境要求

- Node.js v22.14.0 或更高
- pnpm

### 安装

```bash
pnpm install
```

### 模型文件

人脸检测使用 Tiny Face Detector。请将模型文件放入 `public/models/`：

- `tiny_face_detector_model-weights_manifest.json`
- `tiny_face_detector_model-shard1`（无扩展名）

可从 [face-api.js/weights](https://github.com/justadudewhohacks/face-api.js/tree/master/weights) 下载。

### 开发

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

### 预览构建产物

```bash
pnpm preview
```

### GitHub Pages 部署

1. 仓库 **Settings → Pages**：Source 选择 **GitHub Actions**。
2. 推送 `main` 分支或手动触发 workflow **Deploy to GitHub Pages**，即可自动构建并部署。
3. 若仓库名为 `wx-mp-face`，访问地址为：`https://<你的用户名>.github.io/wx-mp-face/`。

### GitHub 仓库图片（jsDelivr）

在页面中配置 **GitHub 仓库图片**：填写 owner、repo、branch、可选 pathPrefix，在「添加远程图片」输入相对路径（如 `2026/02/03/xxx.jpg`）即可将图片以 `https://fastly.jsdelivr.net/gh/owner/repo@branch/路径` 格式加入列表并参与分组与预览。配置会保存在本地。

## 项目结构

```
wx-mp-face/
├── public/
│   └── models/          # face-api.js 模型文件
├── src/
│   ├── App.vue
│   ├── composables/     # useFaceModels, useUploadedImages, usePreviewDrag, useGitHubRepoConfig
│   ├── components/      # UploadSection, GitHubRepoConfig, GroupCropSection, PreviewAside, ...
│   ├── utils/            # imageUtils, copyRenderedStyle
│   ├── faceApi.js
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 许可证

Private.

---

## 作者

![作者](zsm.jpg)
