<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
        <time-setter></time-setter>
      </el-header>
      <el-main>
        <el-row style="margin-top: 20px">
          <el-col :span="12">
            <el-page-header
                @back="goBack()"
                content="作业列表"
            ></el-page-header>
          </el-col>
        </el-row>
        <div class="block" style="margin-top: 20px">
          <el-form
              :model="queryParams"
              ref="queryForm"
              size="small"
              :inline="true"
              label-width="68px"
          >
            <el-form-item label="排序方式" prop="dictType">
              <el-select v-model="queryParams.sortType" @on-change="getData">
                <el-option
                    v-for="dict in dict.types"
                    :key="dict.value"
                    :label="dict.label"
                    :value="dict.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button
                  type="primary"
                  icon="el-icon-search"
                  size="mini"
                  @click="handleQuery"
              >搜索</el-button
              >
              <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
              >重置</el-button
              >
            </el-form-item>
          </el-form>
          <el-table v-loading="loading" :data="dataList" >
            <el-table-column label="课程名称" align="center" prop="name" />
            <el-table-column label="作业" align="center" prop="homework" />
            <el-table-column label="截止日期" align="center" prop="ddl" />
            <el-table-column label="考试日期" align="center" prop="examtime" />
          </el-table>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/commonAside.vue";
import CommonHeader from "../src/components/commonHeader.vue";
import TimeSetter from "../src/components/timeSetter.vue";
import ClassBox from "../src/data/db238.json";

export default {
  name: "HomeworkPage",
  components: {
    CommonAside,
    CommonHeader,
    TimeSetter,
  },
  data() {
    return {
      loading: true,
      queryParams: {
        sortType: "",
      },
      dict: {
        types: [
          {
            value: "ddl",
            label: "截止日期",
          },
          {
            value: "examtime",
            label: "考试时间",
          },
        ],
      },
      dataList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      console.log("go back");
    },
    getData() {
      this.loading = true
      this.$forceUpdate
      console.log(ClassBox);
      this.dataList = this.selectSort(ClassBox.class);
      this.loading = false;
    },
    selectSort(arr) {
      var len = arr.length;
      var minIndex, temp;
      for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {

          if (
              this.getTimeStamp(arr[j][this.queryParams.sortType || "ddl"]) <
              this.getTimeStamp(arr[minIndex][this.queryParams.sortType || "ddl"])
          )
            minIndex = j;
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      return arr;
    },
    getTimeStamp(time) {
      return new Date(time).getTime();
    },
    handleQuery(){
      this.getData()
    },
    resetQuery(){
      this.queryParams.sortType = ''
    }
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
  background-color: rgb(234, 234, 234);
}
.userinfo {
  background-color: rgb(255, 255, 255);
}
</style>