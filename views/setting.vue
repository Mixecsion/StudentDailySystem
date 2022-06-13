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
                <el-form
                status-icon
                ref="form"
                label-width="100px"
                class="login-container"
                >
                <h3 class="login-title">系统登录</h3>
                
                <el-form-item
                    label="密码"
                    label-width="80px"
                    prop="password"
                    class="password"
                >
                    <el-input
                    type="password"
                    v-model="password"
                    auto-complete="off"
                    placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item class="login-submit">
                    <el-button
                    type="primary"
                    class="login-submit"
                    @click="loginadmin()"
                    index="/"
                    >登录</el-button
                    >
                </el-form-item>
                </el-form>
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
        return{
            msg:'setting',
            password:''
            }
    },
    methods:{
       loginadmin(){
            if(this.password=='1111'){
                this.$router.push('/setting/addnew')
            }
            else{
                this.$alert("您没有权限进入此系统", "登录失败");
            }
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
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>


