import { createStore } from "vuex";
import { user } from "../store/user";
import { post } from "../store/post";
import { comment } from "../store/comment";

export const store = createStore({
  modules: {
    user,
    post,
    comment,
  },
  state() {
    return {
      showPostUpload: false,
      showPostDetails: false,
    };
  },
  mutations: {
    changeShowPostUpload(state, show) {
      state.showPostUpload = show;
    },
    changeShowPostDetails(state, show) {
      // console.log(show);
      state.showPostDetails = show;
    },
  },
  actions: {},
});
