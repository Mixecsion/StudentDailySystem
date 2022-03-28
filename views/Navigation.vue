<template>
    <el-container style="height:100vh">
    <el-aside width="auto">
        <common-aside></common-aside>
    </el-aside>
        <el-container>
            <el-header></el-header>
            <div>
                <h1>navigation</h1>
                <p>{{msg}}</p>
            </div>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
export default{
    name:'NavigationPage',
    components:{
        CommonAside
    },
    data(){
        return{msg:"navigation here"}
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
</style>


