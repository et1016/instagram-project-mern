<script setup>
import TheIcon from "../components/TheIcon.vue";

defineProps({
  likes: Number,
  comments: Number,
  favors: Number,
  likedByMe: Boolean,
  favoredByMe: Boolean,
});

const emit = defineEmits(["likeClick", "commentsClick", "favorClick"]);
</script>

<template>
  <div class="postActions">
    <TheIcon
      icon="like"
      @click="emit('likeClick')"
      :fill="likedByMe ? '#FF3C3C' : 'none'"
      :stroke="likedByMe ? '#FF3C3C' : '#000000'"
    />
    <!-- fill = 設置圖形填充色
    如果likedByMe為true就是紅色,為false則為空心
    stroke = 設置圖形邊框色
    如果likedByMe為true就是紅色,為false則為黑色 -->
    <span>{{ likes || "" }}</span>
    <!-- 如果有讀取到愛心數顯示愛心數,無則空值 -->
    <!-- symbol圖示組件 -->

    <TheIcon
      icon="comment"
      @click="emit('commentsClick')"
      fill="none"
      stroke="#000000"
    />
    <!-- fill = 設置圖形填充色
      stroke = 設置圖形邊框色 -->
    <span>{{ comments || "" }}</span>
    <!-- 如果有讀取到留言數顯示留言數,無則空值 -->
    <!-- symbol圖示組件 -->

    <TheIcon
      icon="favorite"
      @click="emit('favorClick')"
      :fill="favoredByMe ? '#FFD12E' : 'none'"
      :stroke="favoredByMe ? '#FFD12E' : '#000000'"
    />
    <!-- fill = 設置圖形填充色
    如果favoredByMe為true就是黃色,為false則為空心
    stroke = 設置圖形邊框色
    如果favoredByMe為true就是黃色,為false則為黑色 -->
    <span>{{ favors || "" }}</span>
    <!-- 如果有讀取到收藏數顯示收藏數,無則空值 -->
    <!-- symbol圖示組件 -->
  </div>
</template>

<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>
