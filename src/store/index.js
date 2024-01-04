import Vue from "vue";
import Vuex from "vuex";
import createPersistedstate from "vuex-persistedstate";
import { moveDown, moveUp } from "@/utils/processingArray";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: "default",
    formConfigList: [], // 表单的 组件列表
    formSetting: {}, // 表单对象属性配置
    currentCompSetting: {}, // 当前组件配置
  },
  getters: {
    currentFormConfigList: (state) => state.formConfigList || [],
    currentFormSetting: (state) => state.formSetting,
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
      console.log(config, "c");
      let { formIndex } = config;
      state.formConfigList.splice(formIndex, 1);
    },

    // 上移
    moveup_form_config(state, config) {
      console.log(config, "c");
      let { formIndex } = config;
      moveUp(state.formConfigList, formIndex);
    },

    // 下移
    movedown_form_config(state, config) {
      console.log(config, "c");
      let { formIndex } = config;
      moveDown(state.formConfigList, formIndex);
    },

    // 修改表单属性配置
    setting_form_prop(state, setting) {
      state.formSetting = setting;
    },

    // 拖拽后的列表内容
    drag_over(state, list) {
      state.formConfigList = list;
    },

    // 修改组件配置
    change_current_comp_content(state, setting) {
      state.currentCompSetting = setting;
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
