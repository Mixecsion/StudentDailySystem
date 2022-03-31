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
                                        <td v-for="(course, courseIndex) in classTableData.courses" :key="courseIndex" @click="open()">
                                            {{classTableData.courses[courseIndex][lessonIndex] || '-'}}
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
                    '20:10-20:55',

                ],
                courses: [
                    ['', '', '', '', '', '', '', ''],
                    ['生物', '物理', '化学', '政治', '历史', '英语', '', '语文'],
                    ['语文', '数学', '英语', '历史', '', '化学', '物理', '生物'],
                    ['生物', '', '化学', '政治', '历史', '英语', '数学', '语文'],
                    ['语文', '数学', '英语', '历史', '政治', '', '物理', '生物'],
                    ['生物', '物理', '化学', '', '历史', '英语', '数学', '语文'],
                    ['语文', '数学', '英语', '', '', '', '', ''],
                ]
            }
        }
    },
    created() {
     /* mock随机数据*/
        // Mock.mock({
		//     lessons: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
		//     'courses|7': [['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']]
		// });
    },
    methods: {
        /**
        * 数字转中文
        * @param {Number} num 需要转换的数字
        * @param {String} identifier 标识符
        * @returns {String} 转换后的中文
        */
        digital2Chinese(num, identifier) {
            const character = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二','十三','十四'];
            return identifier === 'week' && (num === 0 || num === 7) ? '日' : character[num];
        },
            open() {
                this.$alert("课程数据balabala"+"\n"+"balabala", '课程名称', {});
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


