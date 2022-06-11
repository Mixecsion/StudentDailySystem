<template>
    <el-menu id="menu" :router="true" :default-active="this.$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#FFFFFF" active-text-color="#80ffff"  @open="handleOpen" @close="handleClose" :collapse="isCollapse">
   <h3>学生日程管理中心</h3>
   <el-menu-item @click="this.$router.push(home)" index="/">
    <i class="el-icon-s-home"></i>
    <span slot="title">首页</span>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-date"></i>
      <span slot="title">课程</span>
    </template>
      <el-menu-item @click="this.$router.push(classtable)" index="/classtable">课程表</el-menu-item>
      <el-menu-item @click="this.$router.push(workline)" index="/workline">日程安排</el-menu-item>
  </el-submenu>
  <el-menu-item @click="this.$router.push(navigation)" index="/navigation" >
    <i class="el-icon-location"></i>
    <span slot="title">校园导航</span>
  </el-menu-item>
  <el-menu-item @click="this.$router.push(setting)" index="/setting">
    <i class="el-icon-user-solid"></i>
    <span slot="title">管理员</span>
  </el-menu-item>
</el-menu>
</template>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse){
      height: 100%;
      border: none;
      h3{
        color: #fff;
        text-align: center;
        line-height: 48px
      }
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
        menu:[
          {
            path:'/',
            name:'home',
            label:'首页',
            icon:'menu',
            url:'Home/Home'
          },
          {
            label:'课程',
            icon:'document',
            children:[
              {
                path:'/',
                name:'classtable',
                label:'课程表',
                icon:'date',
                url:'Class/Classtable'
              },
              {
                path:'/workline',
                name:'workline',
                label:'日程安排',
                url:'Class/workline'
              }
            ]
          },
          {
            path:'/navigation',
            name:'navigation',
            label:'校园导航',
            icon:'location',
            url:'Navigation/Navigation'
          },
          {
            path:'/',
            name:'setting',
            label:'设置',
            icon:'setting',
            url:'Setting/Setting'
          }
        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

    },
    computed:{
      noChildren(){
        return this.menu.filter(item => !item.children)
      },
      hasChildren(){
        return this.menu.filter(item => item.children)
      }      
    }
  }
</script>

