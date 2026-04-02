<template>
  <n-modal
    :show="visible"
    :mask-closable="true"
    :closable="true"
    :auto-focus="false"
    :trap-focus="false"
    class="lightbox-modal"
    @update:show="onUpdateShow"
  >
    <template #default>
      <div class="lightbox-body" @click.self="$emit('close')">
        <n-button
          quaternary
          circle
          class="lightbox-close"
          aria-label="关闭"
          @click="$emit('close')"
        >
          ✕
        </n-button>
        <n-button
          v-if="hasPrev"
          quaternary
          circle
          class="lightbox-nav lightbox-nav--prev"
          aria-label="上一张"
          @click.stop="goPrev"
        >
          ‹
        </n-button>
        <n-button
          v-if="hasNext"
          quaternary
          circle
          class="lightbox-nav lightbox-nav--next"
          aria-label="下一张"
          @click.stop="goNext"
        >
          ›
        </n-button>
        <div class="lightbox-counter">
          {{ currentIndex + 1 }} / {{ totalCount }}
        </div>
        <img
          :src="currentImageUrl"
          :alt="currentAlt"
          class="lightbox-img"
          @click.stop
        />
      </div>
    </template>
  </n-modal>
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

function onUpdateShow(show) {
  if (!show) emit('close')
}

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

<style scoped>
.lightbox-body {
  position: relative;
  display: flex;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
  padding: 48px 16px 56px;
}

.lightbox-close {
  position: absolute;
  right: 8px;
  top: 8px;
  z-index: 2;
  font-size: 18px;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  font-size: 22px;
}

.lightbox-nav--prev {
  left: 8px;
}

.lightbox-nav--next {
  right: 8px;
}

.lightbox-counter {
  position: absolute;
  bottom: 12px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 14px;
  color: #fff;
  background: rgba(0, 0, 0, 0.55);
}

.lightbox-img {
  max-height: 85vh;
  max-width: 92vw;
  cursor: default;
  object-fit: contain;
}
</style>

<style>
.lightbox-modal.n-modal {
  width: auto !important;
  max-width: none;
}

.lightbox-modal .n-card {
  background: transparent;
  box-shadow: none;
}

.lightbox-modal .n-modal__content-wrapper {
  background: rgba(0, 0, 0, 0.78);
}
</style>
