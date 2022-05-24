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
                <time-setter></time-setter>
                <el-row span="8" style="margin-top:20px" :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p class="name">姓名：<span>李华</span></p>
                            <p class="number">学号: 2020211211</p>
                            <p class="college">学院：计算机学院（国家示范性软件学院）</p>
                            <p class="college">班级: 2020211301</p>
                            <el-divider></el-divider>
                        </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="8">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p>课程查询：</p>
                            <el-input v-model="search.content" placeholder="请输入课程名称"></el-input>
                            <el-divider></el-divider>
                            <el-button type="primary" round @click="onClick1(search.content)">查询</el-button>
                        </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="7">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <img class="time" :src="timeImg">
                        </div>
                        </el-card>
                    </el-col> 
                </el-row>
                <el-row span="8" style="margin-top:20px" :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p>当前课程：</p>
                            <p>形式语言与自动机</p>
                            <p>上课时间：8：00</p>
                            <p>上课地点：N511</p>
                            <el-row><el-button type="primary" round>导航</el-button><el-button type="success" round>详细信息</el-button></el-row>
                        </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p>未交作业：</p>
                            <p>计算机组成原理</p>
                            <p>第五章练习题</p>
                            <p>截止日期：5-4</p>
                            <el-button type="warning" round>交作业</el-button>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="userinfo">
                            <p>当前日程：</p>
                            <p>大班班会</p>
                            <p>时间：13：00</p>
                            <p>地点：学活301</p>
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

export default{
    name:'HomePage',
    components:{
        CommonAside,
        CommonHeader,
        TimeSetter
    },
    data(){
        return{
            msg:"home here",
            timeImg: require('../src/assets/time.png'),
            search:{
                content:''
            }
        }
        
    },
    methods:{
        onClick1(name){
            this.$router.push({name:'classcontent',params:{name:name}});
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
