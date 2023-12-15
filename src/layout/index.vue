<template>
  <div class="layuout">
    <el-container>
      <el-aside><c-menu /></el-aside>
      <el-container>
        <el-header>
          <c-header />
        </el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "CLayout",
    components: {
      CHeader: () => import("./header"),
      CMenu: () => import("./menu.vue"),
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .layuout {
  }
  ::v-deep .el-aside {
    width: 200px;
  }
</style>
