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
                <el-row span="8" style="margin-top:20px">
                    <el-col :span="8">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p class="name">姓名：<span>李华</span></p>
                            <p class="number">学号：2020211211</p>
                            <p class="college">学院：计算机学院（国家示范性软件学院）</p>
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
export default{
    name:'HomePage',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{msg:"home here"}
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
