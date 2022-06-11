import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
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
        ] ,
        logbook:[]
    },
    mutations:{
        writeSchedule(state,data){
            state.schedules.push(data);
        }
    },
    actions:{

    },
    getters:{

    },
})