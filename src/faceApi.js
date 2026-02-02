import * as faceapi from 'face-api.js'

const base = (import.meta.env.BASE_URL || '/').replace(/\/*$/, '') + '/'
const MODELS_BASE = base + 'models'
let modelsLoaded = false

/** 加载人脸检测模型（Tiny Face Detector，单分片，避免 SSD 双分片加载不完整） */
export async function loadModels() {
  if (modelsLoaded) return
  await faceapi.nets.tinyFaceDetector.loadFromUri(MODELS_BASE)
  modelsLoaded = true
}

/**
 * 检测图片中的所有人脸
 * @param {HTMLImageElement | HTMLCanvasElement} input
 * @returns {Promise<faceapi.FaceDetection[]>}
 */
export async function detectFaces(input) {
  if (!modelsLoaded) await loadModels()
  const detections = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions({ inputSize: 224, scoreThreshold: 0.5 }))
  return detections
}

export { faceapi }
