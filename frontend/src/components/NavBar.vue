<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import TheIcon from "./TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";
import PostUpload from "../components/PostUpload.vue";

const store = useStore();

const router = useRouter();

const showDropdown = ref(false);

const inputValue = ref("");

const user = computed(() => store.state.user.user);

const showPostUpload = computed(() => store.state.showPostUpload);

function pulishPost() {
  store.commit("changeShowPostUpload", true);
}

async function searchPosts(e) {
  await store.dispatch("searchPosts", e.target.value);
  router.push({
    name: "search_result",
    params: {
      term: e.target.value,
    },
  });

  inputValue.value = "";
}

async function logout() {
  await store.dispatch("logoutUser");
  router.push("/login");
}
</script>

<template>
  <nav class="navbar">
    <router-link to="/"><img src="../assets/logo.svg" /></router-link>
    <!-- logo回首頁 -->

    <div class="searchInput">
      <input type="text" @change="searchPosts" v-model="inputValue" />
      <TheIcon icon="search" />
      <!-- symbol圖示組件(搜尋) -->
    </div>

    <div class="navItems">
      <router-link to="/"
        ><TheIcon icon="home" />
        <!-- symbol圖示組件(回首頁) -->
      </router-link>

      <button @click="pulishPost()">
        <TheIcon icon="publish" />
        <!-- symbol圖示組件(發布帖子) -->
      </button>
      <PostUpload v-if="showPostUpload" />
      <!-- 發布帖子組件 -->

      <div class="profileDropDown">
        <!-- <img src="../assets/avatarDefault.png" width="42" height="42" alt="" /> -->
        <!-- 頭像圖尚未組件化時, 即將把它設為TheAvatar組件 -->
        <TheAvatar
          @click="showDropdown = !showDropdown"
          :src="user.avatar"
          :width="42"
          :height="42"
          style="cursor: pointer"
        />
        <!-- 頭像圖示組件(點擊顯示下拉選單) -->

        <div
          class="dropdownMenu"
          v-show="showDropdown"
          @click="showDropdown = false"
        >
          <ul class="profileMenu">
            <li><router-link to="/profile">個人主頁</router-link></li>
            <li @click="logout">退出登入</li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  width: 80vw;
  height: 80px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
}

.navbar svg {
  width: 38px;
  height: 38px;
}

.searchInput {
  position: relative;
}

.searchInput input {
  width: 100%;
  padding: 12px;
  padding-left: 36px;
  background: #f1f1f1;
  border-radius: 14px;
  border: none;
}

.searchInput > svg {
  position: absolute;
  left: 0;
  top: 11px;
  left: 12px;
}

.navItems {
  justify-self: end;
  display: flex;
  gap: 24px;
  align-items: center;
}

.navItems > button {
  border: none;
  background: none;
}

.profileDropDown {
  position: relative;
}

.profileMenu {
  position: absolute;
  width: max-content;
  padding: 24px 26px;
  list-style: none;
  background: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  right: 0;
  display: grid;
  row-gap: 18px;
  transform: translateY(18px);
}

.profileMenu::before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  top: -12px;
  right: 10px;
  border-bottom: 12px solid white;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.profileMenu a,
.profileMenu li {
  text-decoration: none;
  cursor: pointer;
}

.profileMenu a:visited {
  color: initial;
}
</style>
