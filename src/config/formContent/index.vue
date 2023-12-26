<template>
  <div class="form-content-index">
    <el-form :model="formData" label-suffix="：">
      <div
        class="field-wrapper"
        v-for="(formItem, formIndex) in formItemList"
        :key="formIndex"
        @click="handleClickFormItem(formItem, formIndex)"
        draggable="true"
      >
        <div
          class="drag-handler background-opacity"
          v-show="activeFormItem == formIndex"
        >
          <i title="拖拽手柄" class="el-icon-rank"></i><i>单行输入</i>
        </div>

        <div class="field-action" v-show="activeFormItem == formIndex">
          <i title="选中父组件" class="el-icon-back"></i
          ><i title="上移组件" class="el-icon-top"></i
          ><i title="下移组件" class="el-icon-bottom"></i
          ><i title="移除组件" class="el-icon-delete"></i>
        </div>

        <el-form-item
          :label="formItem.label"
          v-bind="formItem"
          :class="{ selected: activeFormItem == formIndex }"
        >
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
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "FormContentIndex",
    props: {
      formItemList: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        formData: {},
        activeFormItem: null,
      };
    },
    methods: {
      handleClickFormItem(formItem, formIndex) {
        this.activeFormItem = formIndex;
        console.log(formItem, formIndex, "formItem, formIndex");
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
</style>
