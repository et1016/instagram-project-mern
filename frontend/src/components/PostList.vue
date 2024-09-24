<script setup></script>

<template>
  <div class="postList"><slot></slot></div>
  <!-- slot存放PostItem組件 -->
</template>

<style scoped>
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
