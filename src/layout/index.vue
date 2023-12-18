<template>
  <div class="layuout">
    <el-container>
      <el-header> <c-header /></el-header>
      <el-main><router-view /></el-main>
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
  }

  ::v-deep .el-header{
    padding: 0 !important;
  }
</style>
