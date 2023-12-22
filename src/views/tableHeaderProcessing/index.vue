<template>
  <div class="table-header-processing-index">
    <div class="left-opreate">
      <el-checkbox-group v-model="checkList" @change="handleChange">
        <vuedraggable v-model="checkboxList">
          <el-checkbox
            v-for="(item, index) in checkboxList"
            :key="index"
            :label="item.label + '~' + item.value"
            >{{ item.label }}</el-checkbox
          >
        </vuedraggable>
      </el-checkbox-group>
    </div>

    <div class="dynamic-table">
      <div class="btn-opreate">
        <el-button @click="handleClickGetData">获取数据</el-button>
        <el-button @click="handleClickAddRow">新增行</el-button>
      </div>

      <el-table :data="tableData" border>
        <vuedraggable v-model="tableHeaderTitleList">
          <el-table-column
            v-for="item in tableHeaderTitleList"
            :key="item.prop"
            :label="item.label"
            :prop="item.prop"
            align="center"
          >
            <template slot-scope="scope">
              <el-input v-model="tableData[scope.$index][item.prop]"></el-input>
            </template>
          </el-table-column>

          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="handleClickDeleteRow(scope)"
                >删除行</el-button
              >
            </template>
          </el-table-column>
        </vuedraggable>
      </el-table>
    </div>
  </div>
</template>

<script>
  import vuedraggable from "vuedraggable";
  // import { downloadFile } from "util_tool_clx";
  import { testAlert } from "clx_test_npm";
  export default {
    name: "TableHeaderProcessing",
    components: {
      vuedraggable,
    },
    watch: {
      // checkList: {
      //   handler(newVal) {
      //     console.log(newVal, "newVal");
      //     this.tableHeaderTitleList = newVal.map((i) => {
      //       let arr = i.split("~");
      //       let label = arr[0];
      //       let prop = arr[1];
      //       return { label, prop };
      //     });
      //   },
      // },
    },
    data() {
      return {
        tableData: [],
        tableHeaderTitleList: [],
        propObj: {},
        checkList: [],
        checkboxList: [
          { label: "测试1", value: "test1" },
          { label: "测试2", value: "test2" },
          { label: "测试3", value: "test3" },
          { label: "测试4", value: "test4" },
          { label: "测试5", value: "test5" },
          { label: "测试6", value: "test6" },
          { label: "测试7", value: "test7" },
          { label: "测试8", value: "test8" },
        ],
      };
    },
    methods: {
      handleChange(list) {
        this.tableHeaderTitleList = [];
        console.log(list, "list");
        this.tableHeaderTitleList = list.map((i) => {
          let arr = i.split("~");
          let label = arr[0];
          let prop = arr[1];
          return { label, prop };
        });
        //获取所有属性
        this.propObj = {};
        this.tableHeaderTitleList.forEach((i) => {
          this.propObj[`${i.prop}`] = null;
        });
        console.log(this.propObj, "propObj");
        this.tableData.map((i) => {
          const result = {};
          for (const k in this.propObj) {
            result[k] = i[k] || null;
          }
          console.log(result, "result");
          return result;
        });

        console.log(this.tableData, "tableData");
      },
      handleClickGetData() {
        console.log(this.tableData);
        testAlert("123");
        // downloadFile("", "name");
      },
      handleClickAddRow() {
        this.tableData.push(this.propObj);
      },

      /**删除行 */
      handleClickDeleteRow(scope) {
        console.log(scope, "scope");
        this.tableData.splice(scope.$index, 1);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .table-header-processing-index {
    width: 100%;
    height: 100%;
    display: flex;
    .left-opreate {
      flex: 1;
      border-right: 2px solid #66b1ff;
    }
    .dynamic-table {
      flex: 6;
    }
  }
</style>
