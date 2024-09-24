<script setup>
import { useStore } from "vuex";
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import { dateToRelative } from "../utils/date";

defineProps({
  post: {
    type: Object,
    default: {},
  },
});

const store = useStore();
</script>

<template>
  <!-- Info區塊 -->
  <div class="postItem">
    <img
      :src="post.image"
      @click="store.dispatch('showPostDetails', post.id)"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
    />
    <!-- 發布者圖片 -->

    <!-- Info包裝器 -->
    <div class="postInfo">
      <!-- Info-上 -->
      <div class="postMeta">
        <!-- Info-上左 -->
        <!-- <img src="../assets/avatarDefault.png" width="42" height="42" alt="" /> -->
        <!-- 頭像圖尚未組件化時, 即將把它設為TheAvatar組件 -->
        <TheAvatar :src="post?.user?.avatar" />
        <!-- 頭像圖組件 -->
        <!-- 發布者頭貼 -->
        <span>{{ post?.user?.name }}</span>
        <!-- 發布者名稱 -->
        <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
        <!-- 多久時間前發布的帖子 -->

        <!-- Info-上右 -->
        <!-- <div class="postActions">
              <TheIcon icon="like" fill="none" stroke="#000000" />
              <span>1.5W</span>
              <TheIcon icon="comment" fill="none" stroke="#000000" />
              <span>1W</span>
              <TheIcon icon="favorite" fill="none" stroke="#000000" />
              <span>99W</span>
            </div> -->
        <!-- 點讚圖,留言圖,最愛圖尚未組件化時, 即將把它設為PostActions組件 -->
        <PostActions
          :likes="post.liked_bies"
          :comments="post.comments"
          :favors="post.favored_bies"
          :likedByMe="post.likedByMe"
          :favoredByMe="post.favoredByMe"
          @likeClick="$store.dispatch('toggleLike', post.id)"
          @favorClick="$store.dispatch('toggleFavor', post.id)"
          @commentsClick="$store.dispatch('showPostDetails', post.id)"
        />
        <!-- likes = 目前點讚數
             favors = 目前收藏數
             comments = 目前留言數
             likedByMe = 用戶針對此帖子是否點讚(true, false)
             favoredByMe = 用戶針對此帖子是否收藏(true, false)
             @likeClick = 將@likeClick屬性傳遞給子組件做使用,
             這邊的功能會是子組件點擊愛心時會觸發likeClick emit
             然後再觸發toggleLike actions
             @favorClick = 將@favorClick屬性傳遞給子組件做使用,
             這邊的功能會是子組件點擊收藏時會觸發favorClick emit
             然後再觸發toggleFavor actions
         -->
        <!-- 點讚圖,留言圖,最愛圖組件 -->
      </div>

      <!-- Info-下 -->
      <!-- 發文內容 -->
      <div class="postDesc">
        <p>
          {{ post.description }}
          <!-- 發布者內文 -->
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postInfo {
  padding: 24px;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}

.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubDate {
  grid-area: pubDate;

  color: #9f9f9f;
  font-size: 14px;
}

.postActions {
  grid-area: actions;

  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center; */
  justify-self: end;
  /* column-gap: 16px;
  row-gap: 4px; */
}

/* .postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1/2;
} */

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
