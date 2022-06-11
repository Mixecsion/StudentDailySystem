<template>
    <el-container style="height:100vh">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
                <time-setter :key="new Date().getTime()"></time-setter>
            </el-header>
            <el-main>
                <el-row span="8" style="margin-top:20px" :gutter="20" z-index:2>
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
                        <div class="searchclass" v-if="minute">
                            <p>课程查询：</p>
                            <el-input v-model="search.content" placeholder="请输入课程名称"></el-input>
                            <el-divider></el-divider>
                            <el-button type="primary" round @click="onClick1(search.content)">查询</el-button>
                        </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="7">
                        <el-card shadow="hover">
                        <div class="timeimg">
                            <img class="time" :src="timeImg">
                        </div>
                        </el-card>
                    </el-col> 
                </el-row>
                <el-row span="8" style="margin-top:20px" :gutter="20">
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="classinfo" v-if="minute">
                            <p>当前课程：</p>
                            <p>{{this.classremind().name}}</p>
                            <p>上课时间：{{this.classremind().begin}}</p>
                            <p>上课地点：{{this.classremind().location}}</p>
                            <el-row><el-button type="primary" round>导航</el-button>
                            <el-button type="success" round @click="onClick1(search.content1)">详细信息</el-button></el-row>
                        </div>
                        </el-card>
                    </el-col> 
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="homeworkinfo" v-if="minute">
                            <p>未交作业：</p>
                            <p>{{this.homeworkremind().name}}</p>
                            <p>{{this.homeworkremind().homework}}</p>
                            <p>{{"截止日期: "+this.homeworkremind().ddl}}</p>
                            <el-button type="warning" round @click="onClick1(search.content2)">交作业</el-button>
                        </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover">
                        <div class="scheinfo">
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
import {searchclass} from '../src/serve/searchclass.js'
import ClassBox from '../src/data/db238.json'
import {date} from '../src/serve/time.js'
import {hour} from '../src/serve/time.js'
import {minute} from '../src/serve/time.js'
import {month} from '../src/serve/time.js'
import {year} from '../src/serve/time.js'
import {week} from '../src/serve/time.js'
import {storelog1} from '../src/store/log.js'


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
                content:'',
                content1:this.classremind().name,
                content2:this.homeworkremind().name
            },
            minute,date,hour,month,year,week
            
        }
        
    },
    methods:{
        onClick1(name){
            if(searchclass(name)!=-1){
                this.$router.push({name:'classcontent',params:{name:name}});
                storelog1(name)
            }
            else{
                this.$alert('您搜索的课程不在您的课表内，请重新搜索', '搜索失败');
            }
        },
        homeworkremind(){
            var flag=0;
            var day=new Date(Date.parse(year+"-"+month+"-"+date))
            for(var i=0;i<ClassBox.class.length;i++){
                if((day)<new Date(Date.parse(ClassBox.class[i].ddl))){
                    if(flag==0){
                        flag=1;
                        return ClassBox.class[i];
                    }
                }
            }
            return {
            "name": "-",
            "homework": "-",
            "ddl": "-"}
        },
        classremind(){
            var flag=0;
            for(var i=0;i<ClassBox.class.length;i++){
                if(week==ClassBox.class[i].date){
                    if(hour<ClassBox.class[i].endtimeHour){
                        if(flag==0){
                            flag=1;
                            return ClassBox.class[i];
                        }
                    }
                }
            }
            return {
            "name": "-",
            "begin": "-",
            "location": "-"}
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
