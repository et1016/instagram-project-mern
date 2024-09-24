<script setup>
import "./assets/base.css";
import NavBar from "./components/NavBar.vue";
import TheIcon from "./components/TheIcon.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<template>
  <div>
    <template v-if="$route.name !== 'login'">
      <!-- 因為login頁面不需要展示NavBar和TheLayout,而NavBar和TheLayout
      都剛好在根元素App.vue中設定給router-view(其餘頁面組件),所以我們可以判斷說
      非login頁面我們給予NavBar + TheLayout並包在router-view
      是login頁面我們就單純給router-view,不需要給NavBar + TheLayout -->

      <!-- 假設目前頁面不是login就渲染NavBar + TheLayout + router-view -->

      <!-- <TheIcon icon="home" /> -->
      <!-- icon - 傳遞給子組件的prop名稱
         home - 傳遞icon這個屬性名稱,然後它的value是"home" -->

      <header class="header">
        <NavBar />
        <!-- 導覽列組件 -->
      </header>

      <TheLayout><router-view></router-view></TheLayout>
      <!-- 寬度組件 -->
    </template>

    <template v-else>
      <!-- 假設目前頁面是login渲染router-view就好 -->
      <router-view></router-view>
    </template>

    <footer class="footer" :class="{ inside: $route.name === 'login' }">&copy;Fenghua. All Rights Reserved.</footer>
    <!-- 如果當前頁面是login的話就給予inside class,因為登入頁面的footer應該是要在頁面內部的
    它不應超出整個頁面的高度所以需要單獨設定他的樣式 -->

    <!-- 此組件主要可以讓父組件自定義button的內容 -->
    <!-- class動態綁定如果為物件形式將會判斷$route.name是否為'login',如果成立的話class就會是物件中的
    inside屬性,如果不成立就是沒有 -->
  </div>
</template>

<style scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}

.footer {
  text-align: center;
  padding: 38px 0;
  color: #828282;
}

.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
