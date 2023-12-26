<template>
  <div class="form-create">
    <el-container style="height: 100%; padding: 0 8px">
      <!-- 左侧选择 -->
      <el-aside width="266px">
        <template v-for="(item, index) in menuList">
          <div class="comp-group" :key="index">
            <h4 class="comp-title">{{ item.title }}</h4>
            <draggable
              :group="{ name: 'default', pull: 'clone', put: false }"
              :sort="false"
              :list="item.list"
              @start="dragStart($event, index)"
              @end="dragCompItem(item, index)"
            >
              <div
                class="comp-item"
                v-for="(fItem, fIndex) in item.list"
                :key="fIndex"
                @click="handleClickCompItem(fItem, fIndex)"
              >
                <div class="comp-icon">
                  <i :class="'fc-icon ' + fItem.icon"></i>
                </div>
                <span class="comp-name">{{ fItem.label }}</span>
              </div>
            </draggable>
          </div>
        </template>
      </el-aside>
      <!--可视区域-->
      <el-container class="form-container">
        <el-header class="form-container-header" height="45">
          <slot name="handle"></slot>
          <el-button
            type="primary"
            icon="fc-icon icon-preview"
            plain
            round
            size="mini"
            @click="handlePreview"
            >预 览
          </el-button>
        </el-header>

        <ElMain style="background: #f5f5f5; padding: 20px">
          <div class="form-comp-list" @dragover.prevent @drop="handleDrop">
            <!-- <component
              :is="FormCreate"
              :rule="dragForm.rule"
              :option="form.value"
              v-model="dragForm.api"
            ></component> -->
            <FormContent :formItemList="currentFormConfigList" />
          </div>
        </ElMain>
      </el-container>
      <ElAside class="_fc-r" width="320px">
        <ElContainer style="height: 100%; padding: 0 8px">
          <el-tabs>
            <el-tab-pane label="组件设置" name="compSetting">
              <ElDivider>基础配置</ElDivider>
            </el-tab-pane>
            <el-tab-pane label="表单配置" name="formSetting">
              <FormSetting />
            </el-tab-pane>
          </el-tabs>
        </ElContainer>
      </ElAside>
    </el-container>
  </div>
</template>

<script>
  import createMenu from "@/config";
  import draggable from "vuedraggable";
  import FormSetting from "@/config/formSetting";
  import FormContent from "@/config/formContent";
  import { mapGetters } from "vuex";

  export default {
    name: "formCreate",
    components: {
      draggable,
      FormSetting,
      FormContent,
    },
    data() {
      return {
        menuList: createMenu(),
        currentComp: null, // 当前组件
      };
    },
    created(){
      
    },
    computed: {
      ...mapGetters(["currentFormConfigList"]),
    },
    methods: {
      //预览
      handlePreview() {},

      //点击左侧组件
      handleClickCompItem(fItem, fIndex) {
        console.log(fItem, fIndex, "组件");
        // this.currentComp = fItem;
      },

      // 结束拖拽组件
      dragCompItem(item, index) {
        console.log(item, index, "end   item, index");
      },

      // 开始拖拽组件
      dragStart(event, index) {
        const draggedIndex = event.oldIndex; // 获取被拖动元素的索引
        const draggedValue = this.menuList[index].list[draggedIndex]; // 获取被拖动元素的值
        console.log(draggedValue,'draggedValue')
        this.currentComp = draggedValue;
      },

      // 拖拽到指定区域
      handleDrop(event) {
        // 在B区域中处理 drop 事件
        event.dataTransfer.dropEffect = "move";
        console.log(this.currentComp, "this.currentComp");
        this.$store.commit("get_form_config", this.currentComp);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form-create {
    height: 100%;
  }
  .comp-item {
    display: inline-block;
    background: #fff;
    color: #000;
    min-width: 70px;
    width: 33.33%;
    height: 70px;
    line-height: 1;
    text-align: center;
    transition: all 0.2s ease;
    cursor: all-scroll;
  }
  .comp-item i {
    font-size: 21px;
    display: inline-block;
  }

  .comp-item .comp-name {
    font-size: 12px;
  }

  .comp-item .comp-icon {
    padding: 10px 5px 12px;
  }

  .comp-item:hover {
    background: #2e73ff;
    color: #fff;
  }

  .form-container {
    border-top: 1px solid #ececec;
    box-sizing: border-box;
  }

  .form-container-header {
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    border: 1px solid #ececec;
    border-top: 0 none;
  }

  .form-comp-list {
    height: 100%;
    background-color: #ffffff;
  }

  ::v-deep .el-tabs {
    width: 100%;
  }
</style>
