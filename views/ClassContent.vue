/* eslint-disable no-unused-vars */
<template>
    <el-container style="height:100vh">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
            </el-header>
            <el-main>
                <el-row style="margin-top:20px">
                  <el-col :span="12">
                      <el-page-header @back="this.$router.push(classtable)" content="详情页面"></el-page-header>
                  </el-col>
                </el-row>
                <el-row style="margin-top:20px">
                  <el-col :span="24">
                    <el-descriptions title="用户信息">
                        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
                        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
                        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
                        <el-descriptions-item label="备注">
                        <el-tag size="small">学校</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                    </el-descriptions>
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
                        <el-button size="small" type="primary" style="margin-top:20px">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">不超过500kb</div>
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
import ClassBox from '../src/data/db238.json'

export default{
    name:'ContentPage',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{
            back:{
                path:'/',
                name:'classtable',
                label:'课程表',
                icon:'date',
                url:'Class/Classtable'
              },
              fileList: []
        }
        
    },
    methods: {
      goBack() {
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
