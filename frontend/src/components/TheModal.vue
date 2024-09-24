<script setup>
import TheIcon from "../components/TheIcon.vue";

defineEmits(["close"]);
</script>

<template>
  <Teleport to="body">
    <!-- 此為vue3的特性,使用to允許將組件傳遞到指定的元素當中(這邊為body) -->
    <div class="modal">
      <div class="backdrop"></div>
      <!-- 遮罩 -->
      <div class="modalContent">
        <!-- 彈窗內容 -->
        <button class="closeBtn" @click="$emit('close')">
          <!-- 這邊使用我們傳給父組件的close屬性,然後父組件已利用
          這個close屬性進行commit('changesShowPostUpload',false) -->
          <TheIcon icon="close" />
          <!-- symbol圖示組件 -->
        </button>
        <slot></slot>
        <!-- slot會塞入TheModal的子組件 -->
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
}
.backdrop {
  background: rgba(0, 0, 0, 0.56);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.modalContent {
  position: relative;
  background: white;
  border-radius: 52px;
  overflow: hidden;
}
.closeBtn {
  position: absolute;
  background: none;
  border: none;
  right: 14px;
  top: 10px;
}
.closeBtn svg {
  width: 54px;
  height: 54px;
}
</style>
