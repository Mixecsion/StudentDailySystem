<template>
    <el-container style="height:100vh">
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
                <div class="block" >
                  
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
import TimeSetter from '../src/components/timeSetter.vue'
import ClassBox from '../src/data/db238.json'

export default {
  name: "HomeworkPage",
  components: {
    CommonAside,
    CommonHeader,
    TimeSetter,
  },
  data() {
    return {
        
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      console.log("go back");
    },
  }
}

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