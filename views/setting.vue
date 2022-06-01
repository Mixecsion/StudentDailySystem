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
            <div>
                <h1>setting</h1>
                <p>{{msg}}</p>
            </div>
            <time-setter></time-setter>
            <el-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
import TimeSetter from '../src/components/timeSetter.vue'

export default{
    name:'SettingPage',
    components:{
        CommonAside,
        CommonHeader,
        TimeSetter
    },
    data(){
        return{msg:'setting'}
    },
    methods:{
       
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
</style>


