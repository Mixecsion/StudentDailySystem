/* eslint-disable no-unused-vars */
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
                    content="管理员发布"
                    ></el-page-header>
                </el-col>
                </el-row>
                <el-row style="margin-top:40px">
                    <el-col :span="24">
                        <el-card shadow="hover">
                        <div class="info">
                            <h2 class="name">发布作业</h2>
                            <p>输入课程名称</p>
                            <el-col :span="6">
                                    <el-input
                                v-model="homework.name"
                                placeholder="请输入课程名称"
                                ></el-input>
                            </el-col>
                            <el-button
                            type="primary"
                            round
                            @click="onClick1(homework.name)"
                            >查询</el-button
                            >
                            <el-form :model="form">
                                    <el-form-item label="作业内容" :label-width="formLabelWidth">
                                        <el-input v-model="homework.content" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="最晚提交日期" :label-width="formLabelWidth">
                                        <el-date-picker v-model="homework.date"  type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="最晚提交时间" :label-width="formLabelWidth">
                                        <el-time-picker
                                        v-model="homework.time"
                                        :picker-options="{
                                        selectableRange: '00:00 - 23:59'
                                        }"
                                        placeholder="选择时间">
                                    </el-time-picker>
                                    </el-form-item>
                            </el-form>
                            <el-button
                            type="primary"
                            round
                            @click="onClick2()"
                            >发布</el-button
                            >
                            <el-divider></el-divider>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row style="margin-top:40px">
                    <el-col :span="24">
                        <el-card shadow="hover">
                        <div class="info">
                            <h2 class="name">发布考试</h2>
                            <p>输入课程名称</p>
                            <el-col :span="6">
                                    <el-input
                                v-model="exam.name"
                                placeholder="请输入课程名称"
                                ></el-input>
                            </el-col>
                            <el-button
                            type="primary"
                            round
                            @click="onClick1(exam.name)"
                            >查询</el-button
                            >
                            <el-form :model="form">
                                    <el-form-item label="考试内容" :label-width="formLabelWidth">
                                        <el-input v-model="exam.content" autocomplete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="考试日期" :label-width="formLabelWidth">
                                        <el-date-picker v-model="exam.date"  type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                                    </el-form-item>
                                    <el-form-item label="考试时间" :label-width="formLabelWidth">
                                        <el-time-picker
                                        v-model="exam.time"
                                        :picker-options="{
                                        selectableRange: '00:00 - 23:59'
                                        }"
                                        placeholder="选择时间">
                                    </el-time-picker>
                                    </el-form-item>
                                    <el-form-item label="考试地点" :label-width="formLabelWidth">
                                        <el-input
                                        v-model="exam.location"
                                        placeholder="请输入考试地点"
                                        ></el-input>
                                    </el-form-item>
                            </el-form>
                            <el-button
                            type="primary"
                            round
                            @click="onClick3()"
                            >发布</el-button
                            >
                            <el-divider></el-divider>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row style="margin-top:40px">
                    <el-col :span="24">
                        <el-card shadow="hover">
                        <div class="info">
                            <h2 class="name">发布资料</h2>
                            <p>输入课程名称</p>
                            <el-col :span="6">
                                    <el-input
                                v-model="zip.classname"
                                placeholder="请输入课程名称"
                                ></el-input>
                            </el-col>
                            <el-button
                            type="primary"
                            round
                            @click="onClick1(zip.classname)"
                            >查询</el-button
                            >
                            <el-upload
                                class="upload"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="zip.fileList"
                            >
                                <h3>上传资料</h3>
                                <div slot="tip" class="el-upload__tip">点击此处上传资料</div>
                            </el-upload>
                            <el-button size="small" type="primary" style="margin-top: 20px" @click="check(fileList)">打包查重</el-button>
                            <el-button size="small" type="primary" style="margin-top: 20px" @click="sub">提交</el-button>
                            <el-divider></el-divider>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                
                  
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
import TimeSetter from '../src/components/timeSetter.vue'
import { searchclass } from "../src/serve/searchclass.js";

export default{
    name:'AddnewPage',
    components:{
        CommonAside,
        CommonHeader,
        TimeSetter
    },
    data(){
        return{
            zip:{
                fileList:[],
                classname:''
            },
            homework:{
                content:'',
                name:'',
                date:'',
                time:''
            },
            exam:{
                name:'',
                content:'',
                date:'',
                time:'',
                location:''
            }
        }
        
    },
    methods: {
    check(fileList){
        for(let i = 0; i < fileList.length - 1; i += 1) {
          for(let j = 0; j < fileList.length; j += 1) {
            if(fileList[i].name === fileList[j].name) {
              this.$alert("您提交的文档中存在重复文档，请检查", "警告");
            }
          }
        }
    },
    sub(){
      this.$alert("您提交的资料已经成功上传", "提示");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}?`);
    },
    onClick1(name) {
      if (searchclass(name) != -1) {
        this.$router.push({ name: "classcontent", params: { name: name } });
      } else {
        this.$alert("您搜索的课程不在课表内，请重新搜索", "搜索失败");
      }
    },
    onClick2(){
        this.$alert("您布置的作业已成功发布", "提示");
    },
    onClick3(){
        this.$alert("您的考试已成功发布", "提示");
    },
    goBack() {
      this.$router.go(-1);
      console.log("go back");
    },
    }
}
</script>

<style lang="less" scoped>
.el-header{
    background-color:#333;
}
.el-main{
    padding-top: 0;
    background-color: rgb(234, 234, 234);
}
.userinfo{
    background-color: rgb(255, 255, 255);
}
</style>
