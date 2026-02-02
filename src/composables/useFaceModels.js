import { ref, onMounted } from 'vue'
import { loadModels } from '../faceApi.js'

/**
 * 人脸检测模型加载
 */
export function useFaceModels() {
  const modelsReady = ref(false)

  onMounted(async () => {
    try {
      await loadModels()
      modelsReady.value = true
    } catch (e) {
      console.error('模型加载失败:', e)
    }
  })

  return { modelsReady }
}
