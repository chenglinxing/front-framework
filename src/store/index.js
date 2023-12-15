import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "default",
  },
  getters: {},
  mutations: {
    changeTheme(state, themeType) {
      state.theme = themeType;
      localStorage.setItem("theme", themeType);
    },
  },
  actions: {},
  modules: {},
});
