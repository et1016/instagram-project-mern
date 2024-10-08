import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import { getJwtToken } from "./apis/auth";
import HomePage from "./pages/HomePage.vue";
import SearchPage from "./pages/SearchPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import ProfileEdittingPage from "./pages/ProfileEdittingPage.vue";
import LoginPage from "./pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/search_result",
    name: "search_result",
    component: SearchPage,
  },
  {
    path: "/search_result/:term",
    name: "search_result",
    component: SearchPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/profile/edit",
    name: "profileEdit",
    component: ProfileEdittingPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  routes,
  // history: createWebHistory(),
  history: createWebHashHistory(),
});

router.beforeEach((to) => {
  // console.log(to);
  if (to.name !== "login" && !getJwtToken()) {
    return { name: "login" };
  }
  if (to.name == "login" && getJwtToken()) {
    return { name: "home" };
  }
});

export { router };
