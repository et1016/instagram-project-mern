<script setup>
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostDetails from "../components/PostDetails.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();

const searchResult = computed(() => store.state.post.searchResult);

const route = useRoute();
const router = useRouter();

const showPostDetails = computed(() => store.state.showPostDetails);

onMounted(() => store.dispatch("searchPosts", route.params.term));
</script>

<template>
  <div>
    <h2 class="title">搜尋結果：{{ route.params.term }}</h2>
    <!-- 這邊route.params.term來自於NavBar組件使用者輸入的input內容
    push至params.term,而這個params.term的值會跑到url,我們再利用route.params.term取得該值去做展示 -->
    <PostList
      ><PostItem v-for="post in searchResult" :post="post" :key="post.id"
    /></PostList>
    <!-- 來自於loadPosts api回傳的資料灌進searchresult再利用pors遍歷出來 -->

    <PostDetails v-if="showPostDetails" />
  </div>
</template>

<style scoped>
.title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
