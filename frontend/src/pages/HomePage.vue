<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
import PostDetails from "../components/PostDetails.vue";

const store = useStore();

const showPostDetails = computed(() => store.state.showPostDetails);

const posts = computed(() => store.state.post.list);

onMounted(() => {
  store.dispatch("loadAllPosts");
});
</script>

<template>
  <div>
    <!-- 取消content class, 這邊已獨立成TheLayout組件
    但這邊一樣預留一個乾淨根元素div -->

    <PostList>
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
      <!-- 首頁帖子列表 -->
    </PostList>

    <!-- <PostUpload v-if="showPostUpload" /> -->
    <!-- 上傳照片組件 -->

    <PostDetails v-if="showPostDetails" />
    <!-- Modal彈窗組件 -->
  </div>
</template>

<style scoped></style>
