<script setup>
import { computed, ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import { loadPostsByMe, loadPostsLikedOrFavoredByMe } from "../apis/post";
import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import PostDetails from "../components/PostDetails.vue";

const store = useStore();

const user = computed(() => store.state.user.user);

const showPostDetails = computed(() => store.state.showPostDetails);

const tabs = ref([
  {
    label: "我的",
    icon: "posts",
  },
  {
    label: "讚過",
    icon: "like",
  },
  {
    label: "收藏",
    icon: "favorite",
  },
]);

const currentTab = ref(0);

const myPosts = reactive({
  0: [],
  // 0 = 我發布的帖子列表,默認值為空數組,之後把返回的結果放進myPosts[0]變量中
  1: [],
  // 1 = 我讚過的帖子列表,默認值為空數組,之後把返回的結果放進myPosts[1]變量中
  2: [],
  // 2 = 我收藏過的帖子列表,默認值為空數組,之後把返回的結果放進myPosts[2]變量中
});

watch(
  currentTab,
  async () => {
    switch (currentTab.value) {
      case 0:
        // 當監聽到currentTab的index為0時
        if (myPosts[0].length == 0) {
          myPosts[0] = await loadPostsByMe();
        }
        break;
      case 1:
        // 當監聽到currentTab的index為1時
        if (myPosts[1].length == 0) {
          myPosts[1] = await loadPostsLikedOrFavoredByMe();
        }
        break;
      case 2:
        // 當監聽到currentTab的index為2時
        if (myPosts[2].length == 0) {
          myPosts[2] = await loadPostsLikedOrFavoredByMe("favors");
        }
        break;
      default:
        return;
    }
  },
  { immediate: true }
);

const handleDetailsEvent = (postId) => {
  store.dispatch("loadAllPosts");
  store.dispatch("showPostDetails", postId);
};
</script>

<template>
  <div>
    <div class="profileContainer">
      <TheAvatar :width="186" :height="186" :src="user.avatar" />
      <div class="profile">
        <p class="name">
          <span>{{ user.name }}</span>
          <router-link to="/profile/edit">編輯個人資料</router-link>
        </p>
        <p class="handle">@{{ user.username }}</p>
        <div class="description">
          <pre>{{ user.intro }}</pre>
        </div>
        <p class="website">{{ user.website }}</p>
      </div>
    </div>

    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        class="tab"
        :class="{ active: index == currentTab }"
        :key="index"
        @click="currentTab = index"
      >
        <!-- @click="currentTab = index"
        :class="{ active: index == currentTab }"
        這代表當click其中一個tab時將該tab的index放進currentTab
        這時動態class物件中如果該index和放進去的currentTab相等
        那就代表是活躍的,這邊會將class加上active變成焦點元素 -->

        <TheIcon :icon="tab.icon" />
        <p>{{ tab.label }}</p>
      </div>
    </div>
    <div class="tabContent">
      <p>{{ myPosts[currentTab].length }}</p>
      <div class="posts">
        <img
          v-for="post in myPosts[currentTab]"
          @click="handleDetailsEvent(post.id)"
          class="postImage"
          :src="post.image"
          :key="post.id"
        />
      </div>
    </div>

    <PostDetails v-if="showPostDetails" />
  </div>
</template>

<style scoped>
.profileContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vw;
}

.avatar {
  justify-self: end;
}

.profile .name {
  display: flex;
  align-items: center;
}

.profile .name > span {
  font-size: 26px;
}
.profile .name > a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}
.profile .handle {
  margin-top: 4px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  margin-bottom: 22px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 88px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 20px;
}

.tab {
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
}
.tab > svg {
  width: 32px;
  height: 32px;
  stroke: #8a9194;
  fill: #8a9194;
}

.tab.active {
  background: #f6f9fb;
  border-radius: 18px;
}

.tab.active > svg {
  stroke: #1787d9;
  fill: #1787d9;
}
.tab.active > p {
  color: #1787d9;
}

.tabContent > p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.postImage {
  width: 100%;
  height: 321px;
  background: #eee;
  object-fit: cover;
  cursor: pointer;
}
</style>
