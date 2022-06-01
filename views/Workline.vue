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
                <div class="tool">
                    <el-button class="add" type="primary" icon="el-icon-plus" circle></el-button>
                    <el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                </div>
                <div class="block">
                    <el-timeline>
                        <el-timeline-item timestamp="2022/5/10    13:00" placement="top">
                        <el-card>
                            <h4>大班班会</h4>
                            <p>地点：学活301</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2022/5/10    16:00" placement="top">
                        <el-card>
                            <h4>计算机网络作业：第五章习题</h4>
                            <p>爱课堂</p>
                            <div><el-button type="primary" round>交作业</el-button></div>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2022/5/10    23:59" placement="top">
                        <el-card>
                            <h4>java练习：第三章 5题</h4>
                            <p>hustoj</p>
                            <div><el-button type="primary" round>交作业</el-button></div>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2022/7/2    23:59" placement="top">
                        <el-card>
                            <h4>计算机网络作业</h4>
                            <p>爱课堂</p>
                            <div><el-button type="primary" round>交作业</el-button></div>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2022/4/2    13:00" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2022/4/2    13:00" placement="top">
                        <el-card>
                            <h4>更新 Github 模板</h4>
                            <p>王小虎 提交于 2018/4/2 20:46</p>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
import TimeSetter from '../src/components/timeSetter.vue'

export default{
    name:'worklinePage',
    components:{
        CommonAside,
        CommonHeader,
        TimeSetter
    },
    data(){
        return{
             pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }]
        },
        value1: '',
        value2: '',
        }
    }
}
</script>

<style lang="less" scoped>
.el-header{
    background-color:#333;
}
.el-main{
    background-color: rgb(234, 234, 234);
}

.tool{
    text-align: right;
    margin-right: 20px;
}
.add{
    margin:20px
}
</style>


