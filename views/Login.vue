<template>
  <div class="background">
    <el-form
      :model="form"
      status-icon
      ref="form"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login-title">系统登录</h3>
      <el-form-item
        label="学号"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          auto-complete="off"
          placeholder="请输入学号"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        label-width="80px"
        prop="password"
        class="password"
      >
        <el-input
          type="password"
          v-model="form.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="login-submit">
        <el-button
          type="primary"
          class="login-submit"
          @click="login()"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username:'',
        password:''
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入学号",
            trigger: "blur",
          },
          {
            min: 10,
            message: "学号为10位数字",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
      login(){
          if((this.form.username=='2020211211')&&(this.form.password=='12345678')){
            this.$router.push('/')
          }
      }
  },
};
</script>

<style lang="less" scoped>
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
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-submit {
  display: inline-block;
  width: 150px;
  margin: 10px auto 0px auto;
}
.background {
  display: inline-block;
  background-color: #b3e0ff;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
