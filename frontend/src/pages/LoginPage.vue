<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const isLogin = ref(true);

const email = ref("");
const username = ref("");
const password = ref("");
const agreementChecked = ref(false);

const store = useStore();
const router = useRouter();

async function register() {
  if (!agreementChecked.value) {
    alert("請先閱讀並同意隱私權和使用規範");
    return;
  }
  await store.dispatch("registerUser", {
    email: email.value,
    username: username.value,
    password: password.value,
  });
  router.replace("/");
}

async function login() {
  await store.dispatch("loginUser", {
    email: email.value,
    password: password.value,
  });
  router.replace("/");
}
</script>

<template>
  <div class="loginPage">
    <img class="phoneImage" src="../assets/phone.png" alt="" />
    <div class="loginForm">
      <img src="../assets/logo.svg" alt="" />
      <form @submit.prevent>
        <!-- @submit.prevent = 阻止默認提交 -->
        <input type="email" placeHolder="郵件" v-model="email" />
        <input
          v-if="!isLogin"
          type="text"
          placeHolder="用戶名"
          v-model="username"
        />
        <input type="password" placeholder="密碼" v-model="password" />
        <button
          class="loginButton"
          type="submit"
          @click="isLogin ? login() : register()"
        >
          {{ isLogin ? "登入" : "註冊" }}
        </button>
        <!-- 接著給註冊按鈕添加事件監聽這裡按鈕是依照isLogin來判斷是[登入]還是[註冊]的
        我們現在沒有登入邏輯,所以先把register事件處理函數直接註冊到click事件上 -->
        <p @click="isLogin = !isLogin" class="info">
          {{ isLogin ? "還沒有帳號? 點擊註冊" : "已有帳號? 點擊登入" }}
        </p>
        <div v-if="!isLogin" class="agreement">
          <input
            type="checkbox"
            v-model="agreementChecked"
          />勾選表示同意隱私協議和使用規範
        </div>
        <!-- 整體邏輯為isLogin為false(用戶沒有帳號) 將顯示[郵件] [用戶名] [密碼] [註冊] [已有帳號?] [勾選規範]
        isLogin為true(用戶有帳號) 將顯示[郵件] [密碼] [登入] [還沒有帳號?] -->
      </form>
    </div>
  </div>
</template>

<style scoped>
.loginPage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #f8f9fb;

  padding: 0 10vw;
}

.phoneImage {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.loginForm {
  justify-self: start;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 74px 60px;

  display: grid;
  place-items: center;
  row-gap: 52px;
  width: 380px;
}

.loginForm > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}

input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
}

input::placeholder {
  color: #9e9e9e;
}

.loginButton {
  background: linear-gradient(89.93deg, #00c2ff 0.06%, #0047ff 105.68%);
  padding: 12px 0;
  color: white;
  border: none;
}

.info {
  color: #1da0ff;
  text-align: center;
  cursor: pointer;
}

.agreement {
  color: #a1a1a1;
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
