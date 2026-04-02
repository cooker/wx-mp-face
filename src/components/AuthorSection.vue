<template>
  <n-card title="作者" size="small" :bordered="true">
    <n-image
      src="/zsm.jpg"
      alt="作者"
      object-fit="cover"
      preview-disabled
      class="author-img"
    />
  </n-card>
</template>

<script setup>
</script>

<style scoped>
.author-img {
  width: 100%;
  border-radius: var(--n-border-radius);
  overflow: hidden;
}

.author-img :deep(img) {
  width: 100%;
  display: block;
}
</style>
