<template>
  <div class="header-index">
    <div class="logo"></div>
    <div class="menu"><c-menu /></div>
    <div class="opreate-btn">
      <div class="opreate-content">
        <el-badge value="new" class="item">
          <i class="el-icon-date"></i>
        </el-badge>
        <el-badge :value="12" class="item">
          <i class="el-icon-message"></i>
        </el-badge>
        <i class="el-icon-setting"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="40" :src="circleUrl" /><i
              class="el-icon-arrow-down el-icon--right"
            ></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ElHeader",
    components: {
      CMenu: () => import("./menu.vue"),
    },
    data() {
      return {
        circleUrl:
          "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      };
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
  .header-index {
    height: 60px;
    width: 100%;
    display: flex;
    .logo {
      flex: 1;
      min-width: 200px;
      border-bottom: solid 1px #e6e6e6;
    }
    .menu {
      flex: 7;
    }
    .opreate-btn {
      flex: 2;
      border-bottom: solid 1px #e6e6e6;
      height: 100%;
      .opreate-content {
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        i {
          font-size: 22px;
          cursor: pointer;
        }
      }
    }
  }

  ::v-deep .el-dropdown-link {
    display: flex;
    align-items: center;
  }
</style>
