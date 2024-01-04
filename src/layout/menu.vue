<template>
  <div class="menu-index">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <template v-for="(item, index) in routeList">
        <template v-if="item.children">
          <el-submenu :index="item.path" :key="index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(childItem, childIndex) in item.children"
                :key="childIndex"
                :index="childItem.path"
                >{{ childItem.title }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu></template
        >
        <template v-else>
          <el-menu-item :key="index" :index="item.path">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
      <!-- <menu-list :routeList="routeList" :menuMode="menuMode"></menu-list> -->
    </el-menu>
  </div>
</template>

<script>
  // import MenuList from "./subMenu.vue";

  export default {
    name: "DefaultMenu",
    components: {
      // MenuList,
    },
    data() {
      return {
        isCollapse: false,
        menuMode: "horizontal", //垂直
        activeIndex: "/test1",
        routeList: [
          {
            path: "/tableHeaderProcessing",
            icon: "el-icon-setting",
            title: "测试1",
          },
          {
            path: "/formCreate",
            icon: "el-icon-s-platform",
            title: "表单",
          },
          {
            path: "/test3",
            icon: "el-icon-s-setting",
            title: "测试3",
            children: [
              {
                path: "/test",
                icon: "el-icon-setting",
                title: "测试3-1",
                children: [
                  {
                    path: "/test3-1-1",
                    icon: "el-icon-setting",
                    title: "测试3-1-1",
                  },
                  {
                    path: "/test3-2-1",
                    icon: "el-icon-setting",
                    title: "测试3-2-2",
                    children: [
                      {
                        path: "/test3-1-1-1",
                        icon: "el-icon-setting",
                        title: "测试3-1-1-1",
                      },
                      {
                        path: "/test3-2-1-1",
                        icon: "el-icon-setting",
                        title: "测试3-2-2-2",
                      },
                    ],
                  },
                ],
              },
              { path: "/test3-2", icon: "el-icon-setting", title: "测试3-2" },
            ],
          },
        ],
      };
    },
    methods: {
      handleOpen() {},
      handleClose() {},
    },
  };
</script>

<style lang="scss" scoped></style>
