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
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from '../src/components/commonAside.vue'
import CommonHeader from '../src/components/commonHeader.vue'
export default{
    name:'ContentPage',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return{
            msg:"content here"
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
    background-color: rgb(234, 234, 234);
}
.userinfo{
    background-color: rgb(255, 255, 255);
}
</style>
