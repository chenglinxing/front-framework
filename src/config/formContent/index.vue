<template>
  <div class="form-content-index">
    <el-form :model="formData" label-suffix="：">
      <el-form-item
        label="文本框"
        v-for="(formItem, formIndex) in formItemList"
        :key="formIndex"
        v-bind="formItem"
      >
        <template v-if="formItem.name === 'input'">
            <el-input v-model="formData[formItem.prop]"></el-input>
        </template>
      </el-form-item>
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
      };
    },
    methods: {},
  };
</script>

<style lang="scss" scoped></style>
