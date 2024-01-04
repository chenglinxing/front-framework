<template>
  <div class="form-content-index">
    <el-form :model="formData" label-suffix="：" v-bind="currentFormSetting">
      <div
        ref="fieldWrapper"
        class="field-wrapper"
        v-for="(formItem, formIndex) in formItemList"
        :key="formIndex"
        @click="handleClickFormItem(formItem, formIndex)"
        :draggable="formIndex == dragableIndex"
        @dragstart="onDragStart(formItem, formIndex, $event)"
        @dragover="onDragOver(formItem, $event)"
        @drop="onDrop(formItem, $event)"
        @dragend="onDragEnd(formItem, $event)"
      >
        <div
          class="drag-handler background-opacity"
          v-if="activeFormItem == formIndex"
          @click.stop="handleDrag(formItem, formIndex)"
        >
          <i title="拖拽手柄" class="el-icon-rank"></i><i>单行输入</i>
        </div>

        <div class="field-action" v-show="activeFormItem == formIndex">
          <i title="选中父组件" class="el-icon-back"></i
          ><i
            title="上移组件"
            class="el-icon-top"
            @click="moveUp(formItem, formIndex)"
          ></i
          ><i
            title="下移组件"
            class="el-icon-bottom"
            @click="moveDown(formItem, formIndex)"
          ></i
          ><i
            title="移除组件"
            class="el-icon-delete"
            @click="handleClickDeltetItem(formItem, formIndex)"
          ></i>
        </div>

        <el-form-item
          :label="formItem.label"
          v-bind="formItem"
          :class="{ selected: activeFormItem == formIndex }"
        >
          <!-- input 文本框-->
          <template v-if="formItem.name === 'input'">
            <el-input
              v-model="formData[formItem.prop]"
              v-bind="formItem"
              @change="
                (formItem, formIndex) => {
                  return formItem.handleChange(formItem, formIndex);
                }
              "
            ></el-input>
          </template>

          <!-- inputNumber 文字输入框-->
          <template v-else-if="formItem.name === 'inputNumber'">
            <el-input-number
              v-model="formData[formItem.prop]"
              v-bind="formItem"
              @change="
                (formItem, formIndex) => {
                  return formItem.handleChange(formItem, formIndex);
                }
              "
            ></el-input-number>
          </template>

          <!-- select 下拉框-->
          <template v-else-if="formItem.name === 'select'">
            <el-select
              v-model="formData[formItem.prop]"
              v-bind="formItem"
              @change="
                (formItem, formIndex) => {
                  return formItem.handleChange(formItem, formIndex);
                }
              "
            >
              <el-option
                v-for="(selItem, selIndex) in formItem.selList"
                :key="selIndex"
                :label="selItem.label"
                :value="selItem.value"
              ></el-option>
            </el-select>
          </template>

          <!-- checkbox 多选框-->
          <template v-else-if="formItem.name === 'checkbox'">
            <el-checkbox-group
              v-model="formData[`${formItem.prop}`]"
              v-bind="formItem"
              @change="
                formItem.change
                  ? item.change(formData[formItem.prop], formItem, index)
                  : handleChange(formData[formItem.prop], formItem, index)
              "
            >
              <el-checkbox
                v-for="(checkItem, checkIndex) in formItem.checkList"
                :key="checkIndex"
                :label="checkItem.value"
                >{{ checkItem.label }}</el-checkbox
              >
            </el-checkbox-group>
          </template>

          <!-- radio 单选-->
          <template v-if="formItem.type === 'radio'">
            <el-radio-group
              v-model="formData[`${formItem.prop}`]"
              v-bind="formItem"
              @change="
                formItem.change
                  ? formItem.change(formData[formItem.prop], formItem, index)
                  : handleChange(formData[formItem.prop], formItem, index)
              "
            >
              <el-radio
                v-for="(radioItem, radioIndex) in formItem.radioList"
                :key="radioIndex"
                :label="radioItem.value"
                >{{ radioItem.label }}
              </el-radio>
            </el-radio-group>
          </template>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "FormContentIndex",
    props: {
      formItemList: {
        type: Array,
        default: () => [],
      },
    },
    computed: {
      ...mapGetters(["currentFormSetting"]),
    },
    data() {
      return {
        formData: {},
        activeFormItem: null,
        dragableIndex: false,
      };
    },
    methods: {
      handleClickFormItem(formItem, formIndex) {
        this.activeFormItem = formIndex;
        console.log(formItem, formIndex, "formItem, formIndex");
      },

      // 点击拖拽按钮
      handleDrag(item, index) {
        this.dragableIndex = index;
      },
      // 上移
      moveUp(formItem, formIndex) {
        console.log(formItem, formIndex, "上移");
        if (formIndex == 0) {
          this.$message.info("已经再顶部了~");
          return;
        }
        this.$store.commit("moveup_form_config", { formItem, formIndex });
      },

      // 下移
      moveDown(formItem, formIndex) {
        console.log(formItem, formIndex, "下移");
        let formConfigList = this.$store.state.formConfigList;
        if (formConfigList.length == formIndex + 1) {
          this.$message.info("已经再底部了~");
          return;
        }
        this.$store.commit("movedown_form_config", { formItem, formIndex });
      },

      // 移除
      handleClickDeltetItem(formItem, formIndex) {
        console.log(formItem, formIndex, "移除");
        // 获取当前表单列表信息
        this.$store.commit("delete_form_config", { formItem, formIndex });
      },

      //////////////////////////// 拖拽
      // 拖拽开始时触发
      onDragStart(item, index, event) {
        // 设置传递的数据
        event.dataTransfer.setData("text/plain", item.prop);
        // 添加拖拽的样式
        event.target.classList.add("dragging");
        this.dragableIndex =  Array.from(event.target.parentNode.children).indexOf(event.target);;
        console.log("拖拽开始时触发  onDragStart", item, event.target);
      },

      // 拖拽元素在目标区域中移动时触发
      onDragOver(item, event) {
        event.preventDefault();
        // console.log("拖拽元素在目标区域中移动时触发  onDragOver", item, event);
        const droppable = event.target;
        const rect = droppable.getBoundingClientRect();
        const mouseY = event.clientY;

        // 计算鼠标相对于接收区域的位置
        const position = mouseY - rect.top > rect.height / 2 ? "bottom" : "top";
        this.dragableIndex = Array.from(droppable.parentNode.children).indexOf(
          droppable
        );
        if (position === "bottom") {
          this.dragableIndex++;
        }
      },

      // 拖拽元素释放到目标区域时触发
      onDrop(item, event) {
        event.preventDefault();
        event.target.classList.remove("dragging");
        // const draggedItemId = event.dataTransfer.getData("text/plain");
        console.log("拖拽元素释放到目标区域时触发  onDrop", item, event.target.parentNode);
        const draggingElement = event.target;
        const droppingElement = event.currentTarget;
        if (
          this.dragableIndex !== null &&
          this.dragableIndex !== this.dragableIndex
        ) {
          const parent = draggingElement.parentNode;
          parent.removeChild(draggingElement);
          parent.insertBefore(draggingElement, droppingElement);
        }
        this.dragableIndex = null;
        this.dragableIndex = null;
      },

      // 拖拽结束时触发
      onDragEnd(item, event) {
        // 移除拖拽的样式
        event.target.classList.remove("dragging");
        console.log("拖拽结束时触发  onDragEnd", item, event.target.parentNode);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .form-content-index {
    padding: 6px 10px;
  }
  .field-wrapper {
    position: relative;
    margin-bottom: 4px;
  }
  .drag-handler {
    position: absolute;
    top: 0;
    left: -1px;
    height: 20px;
    line-height: 20px;
    z-index: 99999;
    background: rgba(64, 158, 255, 0.6);
    i {
      font-size: 12px;
      font-style: normal;
      color: #fff;
      margin: 4px;
      cursor: move;
    }
  }

  .field-wrapper .field-action {
    position: absolute;
    bottom: 0;
    right: -2px;
    height: 22px;
    line-height: 22px;
    background: #409eff;
    z-index: 9;
    i {
      font-size: 14px;
      color: #fff;
      margin: 0 5px;
      cursor: pointer;
    }
  }

  .selected {
    outline: 2px solid #409eff;
  }

  ::v-deep .el-form {
    padding: 10px 4px;
  }

  ::v-deep .el-form-item {
    width: 100% !important;
  }

  ::v-deep.el-form--inline {
    .el-input,
    .el-select {
      width: 100%;
    }
  }

  .dragging {
    background: red;
  }
</style>
