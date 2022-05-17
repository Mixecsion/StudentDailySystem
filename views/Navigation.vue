/* eslint-disable no-undef */
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
                <body>
                    <el-row type="flex" class="row-bg">
                        <div id="searchPart" style="z-index:3">
                            <el-col :span="18"><el-input v-model="input" placeholder="请输入地点"></el-input></el-col>
                            <el-col :span="6"><el-button icon="el-icon-search" circle></el-button></el-col>
                        </div>
                    </el-row>
                    <div id='container' style="z-index:1"></div>
                </body>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
export default{
    name:'NavigationPage',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{
            markerUrl: require("../src/assets/logo.png"),  // 点标记图片路径
            map: '',
            zoom: 17.4,
            center: new window.TMap.LatLng(40.157096843174756, 116.28877263833273),  // 地图一开始的中心点
            markerLayer: '',
        }
    },
    mounted(){
        this.initMap(this.center, this.zoom);
        this.search = new window.TMap.service.Search({ pageSize: 10 });
    },
    methods:{
        initMap(center, zoom) {
            this.map = new window.TMap.Map(document.getElementById('container'), {
                center: center,
                zoom: zoom,  
                pitch: 0,  
                rotation: 0 ,
                mapStyleId: 'style2'
            });

            this.markerLayer = new window.TMap.MultiMarker({  // 创建标记层
                map: this.map, 
                geometries: [
            {
                "id": "1",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.156781,116.283969),  //点标记坐标位置
                "properties": {
                    "title": "西门"
                }
            },
            {
                "id": "2",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.15713,116.284192),  //点标记坐标位置
                "properties": {
                    "title": "快递站"
                }
            },
            {
                "id": "3",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.158477,116.286057),  //点标记坐标位置
                "properties": {
                    "title": "操场"
                }
            },
            {
                "id": "4",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.159394,116.291617),  //点标记坐标位置
                "properties": {
                    "title": "图书馆"
                }
            },
            {
                "id": "5",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.158871,116.289409),  //点标记坐标位置
                "properties": {
                    "title": "学生食堂"
                }
            },
            {
                "id": "6",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.159309,116.289305),  //点标记坐标位置
                "properties": {
                    "title": "教工食堂"
                }
            },
            {
                "id": "7",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.157807,116.288966),  //点标记坐标位置
                "properties": {
                    "title": "雁南S1"
                }
            },
            {
                "id": "8",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.157634,116.289274),  //点标记坐标位置
                "properties": {
                    "title": "雁南S2"
                }
            },
            {
                "id": "9",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.157149,116.289433),  //点标记坐标位置
                "properties": {
                    "title": "雁南S3"
                }
            },
            {
                "id": "10",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.156604,116.289546),  //点标记坐标位置
                "properties": {
                    "title": "雁南S4"
                }
            },
            {
                "id": "11",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.156274,116.29013),  //点标记坐标位置
                "properties": {
                    "title": "雁南S5"
                }
            },
            {
                "id": "12",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.155486,116.289349),  //点标记坐标位置
                "properties": {
                    "title": "雁南S6"
                }
            },
            {
                "id": "13",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.158601,116.292176),  //点标记坐标位置
                "properties": {
                    "title": "教学楼N楼"
                }
            },
            {
                "id": "14",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.158054,116.292425),  //点标记坐标位置
                "properties": {
                    "title": "教学楼S楼"
                }
            },
            {
                "id": "15",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.155417,116.292621),  //点标记坐标位置
                "properties": {
                    "title": "南门"
                }
            },
            {
                "id": "16",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.1589,116.29035),  //点标记坐标位置
                "properties": {
                    "title": "学生活动中心"
                }
            },
            {
                "id": "17",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.159677,116.291934),  //点标记坐标位置
                "properties": {
                    "title": "东配楼"
                }
            },
            {
                "id": "18",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.159431,116.290032),  //点标记坐标位置
                "properties": {
                    "title": "行政楼"
                }
            },
            {
                "id": "19",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.15892,116.293574),  //点标记坐标位置
                "properties": {
                    "title": "S1"
                }
            },
            {
                "id": "20",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.158263,116.293855),  //点标记坐标位置
                "properties": {
                    "title": "S2"
                }
            },
            {
                "id": "21",   
                "styleId": 'myStyle',  
                // eslint-disable-next-line no-undef
                "position": new TMap.LatLng(40.157556,116.294216),  //点标记坐标位置
                "properties": {
                    "title": "S3"
                }
            }
            ],
                styles: {  // 点标记样式
                    "mystyle": new window.TMap.MarkerStyle({
                        "width": 20,
                        "height": 20,
                        "src": this.markerUrl,
                        "anchor": { x: 10, y: 10 },
                        "opacity": 0.5
                    })
                }
            });

            this.label = new window.TMap.MultiLabel({
            id: 'label-layer',
            map: this.map, //设置折线图层显示到哪个地图实例中
            //文字标记样式
            styles: {
                // eslint-disable-next-line no-undef
                'label': new TMap.LabelStyle({
                    'color': '#3777FF', //颜色属性
                    'size': 20, //文字大小属性
                    'offset': { x: 0, y: 0 }, //文字偏移属性单位为像素
                    'angle': 0, //文字旋转属性
                    'alignment': 'center', //文字水平对齐属性
                    'verticalAlignment': 'middle' //文字垂直对齐属性
                })
            },
            //文字标记数据
            geometries: [
            {
                'id': 'label_1', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.156781,116.283969), //标注点位置
                'content': '西门', //标注文本
            },
            {
                'id': 'label_2', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.15713,116.284192), //标注点位置
                'content': '快递站', //标注文本
            },
            {
                'id': 'label_3', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.158477,116.286057), //标注点位置
                'content': '操场', //标注文本
            },
            {
                'id': 'label_4', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.159394,116.291617), //标注点位置
                'content': '图书馆', //标注文本
            },
            {
                'id': 'label_5', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.158871,116.289409), //标注点位置
                'content': '学生食堂', //标注文本
            },
            {
                'id': 'label_6', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.159396,116.289351), //标注点位置
                'content': '教工食堂', //标注文本
            },
            {
                'id': 'label_7', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.15781,116.289017), //标注点位置
                'content': '雁南S1', //标注文本
            },
            {
                'id': 'label_8', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.157634,116.289274), //标注点位置
                'content': '雁南S2', //标注文本
            },
            {
                'id': 'label_9', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.157149,116.289433), //标注点位置
                'content': '雁南S3', //标注文本
            },
            {
                'id': 'label_10', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.156604,116.289546), //标注点位置
                'content': '雁南S4', //标注文本
            },
            {
                'id': 'label_11', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.156274,116.29013), //标注点位置
                'content': '雁南S5', //标注文本
            },
            {
                'id': 'label_12', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.155486,116.289349), //标注点位置
                'content': '雁南S6', //标注文本
            },
            {
                'id': 'label_13', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.158601,116.292176), //标注点位置
                'content': '教学楼N楼', //标注文本
            },
            {
                'id': 'label_14', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.158054,116.292425), //标注点位置
                'content': '教学楼S楼', //标注文本
            },
            {
                'id': 'label_15', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.155417,116.292621), //标注点位置
                'content': '南门', //标注文本
            },
            {
                'id': 'label_16', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.1589,116.29035), //标注点位置
                'content': '学生活动中心', //标注文本
            },
            {
                'id': 'label_17', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.159677,116.291934), //标注点位置
                'content': '东配楼', //标注文本
            },
            {
                'id': 'label_18', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.159431,116.290032), //标注点位置
                'content': '行政楼', //标注文本
            },
            {
                'id': 'label_19', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.15892,116.293574), //标注点位置
                'content': 'S1', //标注文本
            },
            {
                'id': 'label_20', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.158263,116.293855), //标注点位置
                'content': 'S2', //标注文本
            },
            {
                'id': 'label_21', //点图形数据的标志信息
                'styleId': 'label', //样式id
                // eslint-disable-next-line no-undef
                'position': new TMap.LatLng(40.157556,116.294216), //标注点位置
                'content': 'S3', //标注文本
            }]
            });
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
.container{
    width:100%;
        height:100%;
        position: absolute;
        top: 0px;  
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: -1;
}

</style>


