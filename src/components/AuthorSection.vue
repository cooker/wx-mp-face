<template>
  <n-card title="作者" size="small" :bordered="true">
    <img :src="authorImageUrl" alt="作者" class="author-img" />
  </n-card>
</template>

<script setup>
/** 构建时由 Vite 解析为带 base 的 assets 路径，子路径部署（如 GitHub Pages）可靠 */
import authorImageUrl from '../assets/zsm.jpg?url'
</script>

<style scoped>
.author-img {
  width: 100%;
  display: block;
  border-radius: var(--n-border-radius);
  object-fit: cover;
  aspect-ratio: 1;
}
</style>
