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
                <el-row style="margin-top:20px">
                  <el-col :span="12">
                      <el-page-header @back=goBack() content="课程详情"></el-page-header>
                  </el-col>
                </el-row>
                <el-row style="margin-top:40px">
                    <el-col :span="24">
                        <el-card shadow="hover">
                        <div class="info">
                            <h2 class="name" >{{getname()}}</h2>
                            <p class="number" style="margin-top:40px">{{"授课教师: "+searchteacher()}}</p>
                            <p class="college">{{"上课日期: "+searchweekdate()}}</p>
                            <p class="college">{{"上课时间: "+searchtime()}}</p>
                            <p class="college">{{"上课地点: "+searchloca()}}</p>
                            <p class="college">班级: 2020211301</p>
                            <p class="college">班级: 2020211301</p>
                            <el-divider></el-divider>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row style="margin-top:20px">
                  <el-col :span="24">
                      <el-card shadow="hover">
                        <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <h3>提交作业</h3>
                        <p>{{"当期作业内容："}}</p>
                        <el-button size="small" type="primary" style="margin-top:20px">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">快点给我交作业</div>
                        </el-upload>
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
import {searchclass} from '../src/serve/searchclass.js'
import TimeSetter from '../src/components/timeSetter.vue'

export default{
    name:'ContentPage',
    components:{
        CommonAside,
        CommonHeader,
        TimeSetter
    },
    data(){
        return{
            classname :this.getname(),
            fileList: [],
 
        }
        
    },
    methods: {
        getname(){
            var id=this.$route.params.name;
            return id;
        },
        goBack() {
            this.$router.push({name:'classtable'});
            console.log('go back');
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file) {
            return this.$confirm(`确定移除 ${ file.name }?`);
        },
        searchteacher(){
            var name = this.getname();
            if(searchclass(name)!=-1){
                return searchclass(name).teacher;
            }
            else{
                return -1;
            }
        },
        searchweekdate(){
            var name = this.getname();
            if(searchclass(name)!=-1){
                return searchclass(name).date;
            }
            else{
                return -1;
            }
        },
        searchtime(){
            var name = this.getname();
            if(searchclass(name)!=-1){
                return searchclass(name).begin;
            }
            else{
                return -1;
            }
        },
        searchloca(){
            var name = this.getname();
            if(searchclass(name)!=-1){
                return searchclass(name).location;
            }
            else{
                return -1;
            }
        }
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
