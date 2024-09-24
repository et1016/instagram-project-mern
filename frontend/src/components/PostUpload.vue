<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import TheModal from "./TheModal.vue";
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";

const store = useStore();
const imageObjUrl = ref("");

const image = ref(null);
const description = ref("");

async function handleImageUpload(e) {
  const imageFile = e.target.files[0];
  // console.log(imageFile);
  if (imageFile) {
    imageObjUrl.value = URL.createObjectURL(imageFile);
    // console.log(imageObjUrl);
    image.value = imageFile;
  }
}

function publishPost() {
  store.dispatch("uploadPost", {
    image: image.value,
    description: description.value,
  });
}
</script>

<template>
  <TheModal @close="store.commit('changeShowPostUpload', false)">
    <!-- 使用子組件TheModal傳遞過來的close屬性,然後我們將傳遞過來的
    close屬性進行store.commit('changeShoePostUpload', false) -->
    <div class="postUpload">
      <label class="upload">
        <img v-if="imageObjUrl" :src="imageObjUrl" class="preview" alt="" />
        <!-- imageObjUrl.value會抓到使用者上傳檔案的url -->
        <!-- 如果有imageObjUrl.value的話就顯示該img, 然後也會將路徑放進src中用於顯示圖片 -->
        <TheIcon v-else icon="upload-image" />
        <!-- 沒有imageObjUrl.value的話就顯示TheIcon組件,有imageObjUrl.value的話就消失 -->
        <input
          @change="handleImageUpload"
          class="fileChooser"
          type="file"
          name="file"
          accept="image/*"
        />
        <!-- accept="image/* 就是只能選擇圖片類型" -->
        <!-- @change代表當用戶選擇文件時便會觸發該事件 -->
      </label>

      <div class="postContent">
        <textarea
          v-model="description"
          class="postContentInput"
          placeHolder="寫點什麼吧 ..."
        ></textarea>
        <TheButton class="pubBtn" @click="publishPost">發布</TheButton>
      </div>
    </div>
  </TheModal>
</template>

<style scoped>
.postUpload {
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}

.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}

.upload > svg {
  width: 254px;
  height: 316px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}

.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.postContentInput::placeholder {
  color: #757575;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
</style>
