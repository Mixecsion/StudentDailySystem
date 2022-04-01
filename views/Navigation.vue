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
                    <div id='container'></div>
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
        this.initMap(this.center, this.zoom) 
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
                map: this.map,  //指定地图容器
                geometries: [],
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
        },

        // 添加点标记
        addPoint(point) { // 一个point需要有id和坐标
            this.markerLayer.add([
                {
                    'id': point['id'],
                    'styleId': 'mystyle',
                    "position": new window.TMap.LatLng(point['latitude'], point['longitude']),
                    "properties":{} // 自定义属性，可以没有
                }
            ])
        },
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


