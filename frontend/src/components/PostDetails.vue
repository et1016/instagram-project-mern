<script setup>
import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import TheModal from "../components/TheModal.vue";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { dateToRelative } from "../utils/date";

const content = ref("");
const store = useStore();
const post = computed(() => store.getters.postDetails);
const comments = computed(() => store.state.comment.list);
</script>

<template>
  <TheModal @close="$store.dispatch('hidePostDetails')">
    <div class="postDetails">
      <img class="postImage" :src="post?.image" alt="" />
      <div class="postMeta">
        <div class="author">
          <TheAvatar :src="post?.user?.avatar" />
          <!-- 頭像圖組件 -->
          <span>{{ post?.user?.name }}</span>
        </div>

        <pre class="postDesc">{{ post?.description }}</pre>

        <div class="comments">
          <div class="comment" v-for="comment in comments" :key="comment.id">
            <TheAvatar :src="comment.user?.avatar" />
            <!-- 頭像圖組件 -->
            <span class="user">{{ comment.user?.name }}</span>
            <span class="commentDate">{{
              dateToRelative(comment.pubDate)
            }}</span>
            <p class="commentContent">{{ comment.content }}</p>
          </div>
        </div>

        <div class="actions">
          <!-- <div class="postActions">
                <TheIcon icon="like" />
                <span>1.5w</span>
                <TheIcon icon="comment" />
                <span>1w</span>
                <TheIcon icon="favorite" />
                <span>99w</span>
              </div> -->
          <!-- 點讚圖,留言圖,最愛圖尚未組件化時, 即將把它設為PostActions組件 -->
          <PostActions
            :likes="post?.liked_bies"
            :comments="post?.comments"
            :favors="post?.favored_bies"
            :likedByMe="post?.likedByMe"
            :favoredByMe="post?.favoredByMe"
            @likeClick="$store.dispatch('toggleLike', post?.id)"
            @favorClick="$store.dispatch('toggleFavor', post?.id)"
          />
          <!-- 點讚圖,留言圖,最愛圖組件 -->
          <span class="postPubDate">{{
            dateToRelative(post?.publishedAt)
          }}</span>
          <input
            v-model="content"
            class="commentInput"
            type="text"
            name="comment"
            id=""
            placeholder="寫一條評論吧!"
          />
          <button
            @click="store.dispatch('addComment', { content, postId: post?.id })"
            class="commentPubBtn"
          >
            發布
          </button>
        </div>
      </div>
    </div>
  </TheModal>
</template>

<style scoped>
.postDetails {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 300px);
  grid-template-rows: minmax(0, 1fr);
  width: 80vw;
  height: 80vh;
}

.postImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.postMeta {
  padding: 24px;
  padding-top: 36px;
  display: grid;
  align-items: start;
  grid-template-rows: max-content max-content 1fr max-content;
  max-height: 100%;
  height: 100%;
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
}

.postDesc {
  width: 100%;
  white-space: pre-wrap;
  margin-top: 24px;
}

.comments {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  grid-gap: 28px;
  align-items: start;
  overflow-y: auto;
  height: 100%;
}

.comment {
  display: grid;
  grid-template-areas:
    "avatar name date"
    "comment comment comment";
  grid-template-columns: 34px 1fr 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 14px;
}

.commentDate {
  grid-area: date;
  justify-self: end;
  color: #a7a7a7;
}

.commentContent {
  grid-area: comment;
}

.commentInput {
  background: #f7f7f7;
  border-radius: 16px;
  border: none;
  grid-column: 1 / 4;
}

.commentInput::placeholder {
  color: #b9b9b9;
  border: none;
}

.commentPubBtn {
  color: #1da0ff;
  border: none;
  background: none;
  font-size: 16px;
  margin-left: 20px;
  grid-column: 4 / 6;
}

.actions {
  border-top: 1px solid #eaeaea;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  margin: 20px -24px 0px -24px;
  padding: 20px 24px 0 24px;
  row-gap: 16px;
}

.postActions > :deep(svg) {
  transform: scale(0.8125);
}

/* .postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
} */

/* .postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
} */

/* .postActions > span {
  font-size: 14px;
} */

.postPubDate {
  color: #9f9f9f;
  grid-column: 2 / 6;
  justify-self: end;
  font-size: 14px;
}
</style>
