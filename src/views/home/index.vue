<template>
  <div class="home">
    <el-button type="primary" @click="theme('default')">默认</el-button>
    <el-button type="primary" @click="theme('light')">浅色</el-button>
    <el-button type="primary" @click="theme('dark')">深色</el-button>
    <el-color-picker
      v-model="color"
      @change="handleChangeColor"
    ></el-color-picker>

    <p>链接</p>
    <div>
      <el-link href="https://element.eleme.io" target="_blank"
        >默认链接</el-link
      >
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>

    <p>标签</p>
    <div>
      <el-tag>标签一</el-tag>
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>

    <p>分页</p>
    <div>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>

    <p>单选按钮</p>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>

    <p>多选框</p>
    <div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
  import "element-ui/lib/theme-chalk/index.css"; // 引入 Element UI 样式文件
  // @ is an alias to /src
  export default {
    name: "HomeView",
    data() {
      return {
        color: "",
        radio: "1",
        checkList: ["选中且禁用", "复选框 A"],
      };
    },
    methods: {
      //换主题
      theme(type) {
        this.$store.commit("changeTheme", type);
        document.documentElement.setAttribute("class", type);
      },

      //换颜色
      handleChangeColor(color) {
        this.$nextTick(() => {
          // 使用选定的颜色值更新主题样式
          document.body.style.setProperty("--primary-color", color);
          document.body.style.setProperty("--color-primary", color);
          this.color = color;
        });
      },
    },
  };
</script>
