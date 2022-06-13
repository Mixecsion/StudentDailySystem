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
                    <el-date-picker v-model="value" align="right" value-format="yyyy-MM-dd" type="date"  placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
                </div>
                <div class="block" >
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
import ClassBox from '../src/data/db238.json'

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
            
        } 
    },
    methods:{
        chooseDate(){
            let arr = [];
            var i,j=0;
            var day=this.value.toString();
            for(i = 0; i < 10;i++){
                if((day)==(ClassBox.schedule[i].date)){
                    arr[j]=[];
                    arr[j][0]=ClassBox.schedule[i].name;
                    arr[j][1]=ClassBox.schedule[i].date;
                    arr[j][2]=ClassBox.schedule[i].time;
                    arr[j][3]=ClassBox.schedule[i].content;
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


