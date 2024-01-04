<template>
  <div class="form-setting-index">
    <el-form
      size="mini"
      :model="formData"
      label-position="left"
      label-width="120px"
    >
      <el-form-item label="全局组件大小">
        <el-select v-model="formData.size" placeholder="请选择">
          <el-option
            v-for="item in compSizeList"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="字段标签位置">
        <el-radio-group v-model="formData.inline">
          <el-radio-button :label="true">左边</el-radio-button>
          <el-radio-button :label="false">顶部</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="标签对齐">
        <el-radio-group v-model="formData.labelPosition">
          <el-radio-button label="left">居左</el-radio-button>
          <el-radio-button label="center">居中</el-radio-button>
          <el-radio-button label="right">居右</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-divider>生成SFC设置</el-divider>

      <el-form-item label="数据对象名称">
        <el-input v-model="formData.dataObjName"></el-input>
      </el-form-item>

      <el-form-item label="引用名称">
        <el-input v-model="formData.referenceName"></el-input>
      </el-form-item>

      <el-divider>事件属性</el-divider>

      <el-form-item label="onFormCreated" label-width="150px">
        <el-button type="info" icon="el-icon-edit" round>编写代码</el-button>
      </el-form-item>

      <el-form-item label="onFormMounted" label-width="150px">
        <el-button type="info" icon="el-icon-edit" round>编写代码</el-button>
      </el-form-item>

      <el-form-item label="onFormDataChange" label-width="150px">
        <el-button type="info" icon="el-icon-edit" round>编写代码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "FormSetting",
    data() {
      return {
        compSizeList: [
          { value: 0, label: "default" },
          { value: 1, label: "large" },
          { value: 2, label: "medium" },
          { value: 3, label: "small" },
          { value: 4, label: "mini" },
        ],
        formData: {
          size: "default", // 全局组件大小
          propTagPosition: "left", // 字段标签位置
          labelPosition: "left", // 标签对齐
          tagWidth: "", // 标签宽度

          dataObjName: "formData", // 数据对象名称
          referenceName: "", // 引用名称
        },
      };
    },

    watch: {
      formData: {
        handler(newVal) {
          this.$store.commit("setting_form_prop", newVal);
        },
        deep: true,
      },
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>

</style>
