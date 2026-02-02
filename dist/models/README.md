# face-api.js 模型文件

当前使用 **Tiny Face Detector**（单分片，避免 SSD 双分片导致的张量错误）。

请从 [face-api.js/weights](https://github.com/justadudewhohacks/face-api.js/tree/master/weights) 下载并放入此目录：
- `tiny_face_detector_model-weights_manifest.json`
- `tiny_face_detector_model-shard1`（无扩展名，二进制文件）

若改用 SSD：需 `ssd_mobilenetv1_model-weights_manifest.json` 及 `ssd_mobilenetv1_model-shard1`、`ssd_mobilenetv1_model-shard2` 两个分片完整且与官方一致，否则会报 "tensor should have X values but has Y"。
