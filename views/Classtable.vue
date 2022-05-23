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
                <div class="class-table">
                    <div class="table-wrapper">
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>时间</th>
                                        <th v-for="(weekNum, weekIndex) in classTableData.courses.length" :key="weekIndex"> {{'周' + digital2Chinese(weekIndex, 'week')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(lesson, lessonIndex) in classTableData.lessons" :key="lessonIndex">
                                        <td>
                                            <p>{{'第' + digital2Chinese(lessonIndex+1) + "节"}}</p>
                                            <p class="period">{{ lesson }}</p>
                                        </td>
                                        <td v-for="(course, courseIndex) in classTableData.courses" :key="courseIndex" @click="onclick()" >
                                            {{classTableData.courses[courseIndex][lessonIndex]|| '-'}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
import ClassBox from '../src/data/db238.json'

export default{
    name:'ClasstablePage',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{
           classTableData: {
                lessons: [
                    '08:00-08:45',
                    '08:50-09:35',
                    '09:50-10:35',
                    '10:40-11:25',
                    '11:30-12:15',
                    '13:00-13:45',
                    '13:50-14:35',
                    '14:45-15:30',
                    '15:40-16:25',
                    '16:35-17:20',
                    '17:25-18:10',
                    '18:30-19:15',
                    '19:20-20:05',
                    '20:10-20:55'

                ],
                courses: [
                    this.PutInClass()[0],
                    this.PutInClass()[1],
                    this.PutInClass()[2],
                    this.PutInClass()[3],
                    this.PutInClass()[4],
                    this.PutInClass()[5],
                    this.PutInClass()[6]
                ],

            }
        }
    },
    methods: {
        digital2Chinese(num, identifier) {
            const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二','十三','十四'];
            return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num];
        },
        PutInClass(){
            let arr = [];
            var flag=0;
            var i1,i2;
            for (i1 = 0; i1 < 7; i1++) {
                arr[i1] = [];
                for(i2 = 0; i2 < 14;i2++){
                    flag = 0;
                    for(var i3 = 0; i3 < ClassBox.class.length;i3++){
                        if(ClassBox.class[i3].DateIndex==i1){
                            if(((i2+1)>=ClassBox.class[i3].ClassIndex)&&((i2+1)<(ClassBox.class[i3].ClassIndex+ClassBox.class[i3].amount))&&(flag==0)){
                                arr[i1][i2]=ClassBox.class[i3].name;
                                flag=1;
                            }
                        }
                    }
                }
            }
            console.log(arr);
            return arr
        },
        onclick(arr) {
            this.$alert('任课教师：'+arr.teacher +'</br>上课时间：'+arr.begin+'</br>课程材料:</br>考试时间：</br>作业：',arr.name,{dangerouslyUseHTMLString:true}, arr.name);
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
    background-color: rgb(227, 227, 227);
}
.class-table {
    .table-wrapper {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .table-container {
        margin: 20px;
        table {
            table-layout: fixed;
            width: 100%;

            thead {
                background-color: #67a1ff;
                th {
                    color: #fff;
                    line-height: 17px;
                    font-weight: normal;
                }
            }
            tbody {
                background-color: #eaf2ff;
                td {
                    color: #677998;
                    line-height: 12px;
                }
            }
            th,
            td {
                width: 60px;
                padding: 12px 2px;
                font-size: 12px;
                text-align: center;
            }

            tr td:first-child {
                color: #333;
                .period {
                    font-size: 8px;
                }
            }
        }
    }
}
</style>


