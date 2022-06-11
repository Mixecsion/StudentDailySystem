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
                <el-dialog title="添加日程" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                                <el-form-item label="日程名称" :label-width="formLabelWidth">
                                    <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="具体内容" :label-width="formLabelWidth">
                                    <el-input v-model="form.content" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="执行日期" :label-width="formLabelWidth">
                                    <el-date-picker v-model="form.date"  type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                                </el-form-item>
                                <el-form-item label="起始时间" :label-width="formLabelWidth">
                                    <el-time-picker
                                    v-model="form.start"
                                    :picker-options="{
                                    selectableRange: '00:00 - 23:59'
                                    }"
                                    placeholder="起始时间">
                                </el-time-picker>
                                </el-form-item>
                                <el-form-item label="结束时间" :label-width="formLabelWidth">
                                    <el-time-picker
                                        arrow-control
                                        v-model="form.end"
                                        :picker-options="{
                                        selectableRange: '00:00 - 23:59'
                                        }"
                                        placeholder="结束时间">
                                    </el-time-picker>
                                </el-form-item>
                                <el-form-item label="重复" :label-width="formLabelWidth">
                                    <el-radio v-model="form.nothing" label=1>无</el-radio>
                                    <el-radio v-model="form.repeat" label=1>每周</el-radio>
                                </el-form-item> 
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="Add()">确 定</el-button>
                        </div>
                </el-dialog>
                <div class="tool">
                    <el-button class="add" type="primary" icon="el-icon-plus" circle  @click="dialogFormVisible=true"></el-button>
                    <el-date-picker v-model="value" align="right" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                </div>
                <div class="block">
                    <el-timeline>
                        <el-timeline-item 
                        v-for="(schedule, i) in chooseDate()" :key="i" :timestamp="chooseDate()[i][2]" placement="top">
                        <el-card>
                            <h4>{{chooseDate()[i][0]}}</h4>
                            <p>{{chooseDate()[i][3]}}</p>
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
            value: '2022-6-21',
            dialogFormVisible: false,
            form: {
                name: '',
                content:'',
                date:'',
                start:new Date(),
                end:new Date(),
                repeat:'',
                nothing:''
            },
            formLabelWidth: '120px',
            schedules:[
                {
                    "name": "社团周常活动",
                    "time": "2022-6-20  19:00 ",
                    "date": "2022-6-20",
                    "content": "学生活动中心三楼社团活动",
                    "start": "19:00",
                    "end": "20:30",
                    "repeat": 0
                },
                {
                    "name": "锻炼",
                    "time": "2022-6-20 10:00",
                    "date": "2022-6-20",
                    "content": "体育馆打羽毛球",
                    "start": "10:00",
                    "end": "11:00",
                    "repeat":0
                },
                {
                    "name": "开会",
                    "time": "2022-6-21 15:50",
                    "date": "2022-6-21",
                    "content": "教学楼N103党团建设会议",
                    "start": "15:50",
                    "end": "16:50",
                    "repeat": 0
                },
                {
                    "name": "志愿",
                    "time": "2022-6-21 10:00",
                    "date": "2022-6-21",
                    "content": "校内贡献单车志愿活动",
                    "start": "10:00",
                    "end": "11:30",
                    "repeat": 1
                },
                {
                    "name": "观看话剧",
                    "time": "2022-6-22 18:00",
                    "date": "2022-6-22",
                    "content": "科学会堂观看话剧演出",
                    "start": "18:00",
                    "end": "20:00",
                    "repeat": 0
                },
                {
                    "name": "取快递",
                    "time": "2022-6-23 11:00",
                    "date": "2022-6-23",
                    "content": "快递站取一个快递",
                    "start": "11:00",
                    "end": "11:20",
                    "repeat": 0
                },
                {
                    "name": "锻炼",
                    "time": "2022-6-23 19:00",
                    "date": "2022-6-23",
                    "content": "操场跑步练习1km",
                    "start": "19:00",
                    "end": "19:30",
                    "repeat": 0
                },
                {
                    "name": "志愿",
                    "time": "2022-6-24 10:00",
                    "date": "2022-6-24",
                    "content": "校内环保行动志愿",
                    "start": "10:00",
                    "end": "11:30",
                    "repeat": 0
                },
                {
                    "name": "开会",
                    "time": "2022-6-24 16:00",
                    "date": "2022-6-24",
                    "content": "学生活动中心百花节策划会议",
                    "start": "16:00",
                    "end": "17:30",
                    "repeat": 0
                },
                {
                    "name": "研讨会",
                    "time": "2022-6-25 15:00",
                    "date": "2022-6-25",
                    "content": "图书馆研讨室小组讨论",
                    "start": "15:00",
                    "end": "17:00",
                    "repeat": 1
                },
                {
                    "name": "锻炼",
                    "time": "2022-6-26 13:00",
                    "date": "2022-6-26",
                    "content": "游泳馆练习游泳",
                    "start": "13:00",
                    "end": "15:00",
                    "repeat": 0
                },
                {
                    "name": "思政学习",
                    "time": "2022-6-26 19:00",
                    "date": "2022-6-26",
                    "content": "学习公社学习党史内容",
                    "start": "19:00",
                    "end": "20:00",
                    "repeat": 0
                },
                {
                    "name": "志愿",
                    "time": "2022-6-27 16:00",
                    "date": "2022-6-27",
                    "content": "校内垃圾分类志愿活动",
                    "start": "16:00",
                    "end": "17:30",
                    "repeat": 0
                },
                {
                    "name": "社团活动",
                    "time": "2022-6-27 19:00",
                    "date": "2022-6-27",
                    "content": "学生活动中心三楼社团活动",
                    "start": "19:00",
                    "end": "20:00",
                    "repeat": 0
                },
                {
                    "name": "研讨会",
                    "time": "2022-6-28 10:00",
                    "date": "2022-6-28",
                    "content": "图书馆研讨室开展研讨会",
                    "start": "10:00",
                    "end": "12:00",
                    "repeat": 0
                },
                {
                    "name": "学习分享会",
                    "time": "2022-6-29 10:00",
                    "date": "2022-6-29",
                    "content": "大班活动  分享学习笔记与经验",
                    "start": "10:00",
                    "end": "11:30",
                    "repeat":0
                },
                {
                    "name": "取快递",
                    "time": "2022-6-29 12:30",
                    "date": "2022-6-29",
                    "content": "到快递站取快递",
                    "start": "12:30",
                    "end": "12:50",
                    "repeat": 0
                },
                {
                    "name": "科学讲座",
                    "time": "2022-6-30 9:30",
                    "date": "2022-6-30",
                    "content": "学生活动中心 听科学讲座",
                    "start": "9:30",
                    "end": "11:30",
                    "repeat":0
                },
                {
                    "name": "选课",
                    "time": "2022-6-30 12:30",
                    "date": "2022-6-30",
                    "content": "教务系统选课",
                    "start": "12:30",
                    "end": "13:00",
                    "repeat":0
                },
                {
                    "name": "心理健康活动",
                    "time": "2022-6-30 14:00",
                    "date": "2022-6-30",
                    "content": "行政楼参加心理健康活动",
                    "start": "14:00",
                    "end": "16:00",
                    "repeat":0
                }
            ] 
        } 
    },
    methods:{
        chooseDate(){
            let arr = [];
            var i,j=0;
            var day=this.value.toString();
            for(i = 0; i < 10;i++){
                if((day)==(this.schedules[i].date)){
                    arr[j]=[];
                    arr[j][0]=this.schedules[i].name;
                    arr[j][1]=this.schedules[i].date;
                    arr[j][2]=this.schedules[i].time;
                    arr[j][3]=this.schedules[i].content;
                    j++;
                }
            }
            return arr;
        },
        checkClass(){
            return 1;
        },
        checkSchedule(){
            return 1;
        },
        Add(){
            this.dialogFormVisible = false
            
            let item={"name":this.form.name,
                        "time":"",
                        "date":this.form.date,
                        "content":this.form.content,
                        "start":this.form.start,
                        "end":this.form.end,
                        "repeat":this.form.repeat
                        };
            this.$set(this.schedules, '0' ,item)
            console.log(item);
            this.$notify({
                title: '添加成功',
                message: '日程已成功添加',
                type: 'success'
            });
            return;
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


