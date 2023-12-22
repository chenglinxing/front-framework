<template>
  <div class="layuout">
    <el-container>
      <el-header> <c-header /></el-header>
      <el-main style="padding: 0;"><router-view /></el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "CLayout",
    components: {
      CHeader: () => import("./header"),
      // CMenu: () => import("./menu.vue"),
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .layuout {
    height: calc(100vh);
  }

  .el-container {
    height: 100%;
  }

  ::v-deep .el-header {
    padding: 0 !important;
  }
</style>
