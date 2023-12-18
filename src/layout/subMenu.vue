<template>
  <div class="sub-menu-index">
    <template v-for="item in routeList">
      <el-submenu
        v-if="item.children && item.children.length"
        :key="item.path"
        :index="item.path"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <MenuList :routeList="item.children"></MenuList>
      </el-submenu>

      <el-menu-item
        v-else
        :key="item.path"
        :index="item.path"
        @click="goPage(item)"
      >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: "MenuList",
    props: {
      routeList: {
        type: Array,
        default: () => [],
      },
      menuMode: {
        type: String,
        default: "",
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  //   ::v-deep .el-menu-item:hover {
  //     background-color: #1A8CFE !important; /* 鼠标悬停时的背景颜色 */
  //   }
  //   ::v-deep .el-submenu__title:hover {
  //     background-color: #1A8CFE !important; /* 鼠标悬停时的背景颜色 */
  //   }

  //   ::v-deep .el-menu-item.is-active {
  //     background-color: #1A8CFE !important; /* 鼠标悬停时的背景颜色 */
  //   }
</style>
