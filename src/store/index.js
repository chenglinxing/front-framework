import Vue from "vue";
import Vuex from "vuex";
import createPersistedstate from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "default",
    formConfigList: [], // 表单的 组件列表
    formConfig: {}, // 表单对象属性配置
  },
  getters: {
    currentFormConfigList: (state) =>
      state.formConfigList ||
      JSON.parse(localStorage.getItem("user")).localStorage.getItem("user")
        .formConfigList,
  },
  mutations: {
    changeTheme(state, themeType) {
      state.theme = themeType;
      localStorage.setItem("theme", themeType);
    },

    // 添加组件
    get_form_config(state, config) {
      console.log(config, "c");
      state.formConfigList.push(config);
    },

    // 删除组件
    delete_form_config(state, config) {
      state.formConfigList.push(config);
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedstate({
      key: "user",
    }),
  ],
});
