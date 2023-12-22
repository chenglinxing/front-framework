<template>
  <div class="input-index">
    <el-form-item v-bind="formItemProp">
      <el-input v-model="value"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  import InputProp from "@/config/rules/input";
  export default {
    name: "InputIndex",
    props: {
      formItemProp: {
        type: Object,
        default: () => {},
      },
    },
    data() {
      return {
        InputProp,
        value: "",
      };
    },
    methods: {},
  };
</script>

<style lang="scss" scoped></style>
