<template>
  <Teleport to="body">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-4"
      @click.self="$emit('close')"
    >
      <button
        type="button"
        class="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white"
        aria-label="关闭"
        @click="$emit('close')"
      >
        ✕
      </button>
      <button
        v-if="hasPrev"
        type="button"
        class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white"
        aria-label="上一张"
        @click.stop="goPrev"
      >
        ‹
      </button>
      <button
        v-if="hasNext"
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-gray-600 hover:bg-white"
        aria-label="下一张"
        @click.stop="goNext"
      >
        ›
      </button>
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
        {{ currentIndex + 1 }} / {{ totalCount }}
      </div>
      <img
        :src="currentImageUrl"
        :alt="currentAlt"
        class="max-h-[90vh] max-w-[90vw] cursor-default object-contain"
        @click.stop
      />
    </div>
  </Teleport>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  imageUrl: { type: String, default: '' },
  alt: { type: String, default: '' },
  imageList: { type: Array, default: () => [] },
  currentIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['close', 'change-index'])

const totalCount = computed(() => props.imageList.length || 1)
const currentIdx = computed(() => props.currentIndex)
const hasPrev = computed(() => props.imageList.length > 0 && currentIdx.value > 0)
const hasNext = computed(() => props.imageList.length > 0 && currentIdx.value < totalCount.value - 1)
const currentImageUrl = computed(() => {
  if (props.imageList.length > 0) {
    const img = props.imageList[currentIdx.value]
    return img?.url || img?.imageUrl || ''
  }
  return props.imageUrl
})
const currentAlt = computed(() => {
  if (props.imageList.length > 0) {
    const img = props.imageList[currentIdx.value]
    return img?.alt || img?.file?.name || ''
  }
  return props.alt
})

function goPrev() {
  if (hasPrev.value) emit('change-index', currentIdx.value - 1)
}

function goNext() {
  if (hasNext.value) emit('change-index', currentIdx.value + 1)
}

function handleKeydown(e) {
  if (!props.visible) return
  if (e.key === 'ArrowLeft') {
    e.preventDefault()
    goPrev()
  } else if (e.key === 'ArrowRight') {
    e.preventDefault()
    goNext()
  } else if (e.key === 'Escape') {
    e.preventDefault()
    emit('close')
  }
}

watch(() => props.visible, (v) => {
  if (v) {
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

onMounted(() => {
  if (props.visible) document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>
