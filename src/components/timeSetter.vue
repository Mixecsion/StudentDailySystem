<template>
    <div class="home" id="home"> 
        <div :class="{'hand':true,'fold':true,'fode2-choose':foldClass}"  @click="show" @mouseover="mouseOver" @mouseleave="leave"><i :class="icon"></i></div>
        <transition name="el-zoom-in-top">
            <div v-show="icon!='el-icon-arrow-up'" class="transition-box" id="box">
              <el-row style="margin-top:50px">
                <el-col :span="24">
                  <h2>TimeMachine</h2>
                  <p>{{GetNowTime()[0]+"年"+GetNowTime()[1]+"月"+GetNowTime()[2]+"日"+GetNowTime()[3]+"点"+GetNowTime()[4]+"分"+"   "+GetNowTime()[5]}}</p>
                  <el-button icon="el-icon-caret-left" circle @click="backTime()"></el-button>
                  <el-button icon="el-icon-video-pause" circle @click="pauseTime()"></el-button>
                  <el-button icon="el-icon-video-play" circle @click="startTime()"></el-button>
                  <el-button icon="el-icon-caret-right" circle @click="forwardTime()"></el-button>
                  <h2>-</h2>
                  <h2>日志</h2>
                  <p>{{log1}}</p>
                </el-col>
              </el-row>
            </div>
        </transition>
    </div>
  
</template>

<script>
import { date } from "../serve/time.js";
import { hour } from "../serve/time.js";
import { minute } from "../serve/time.js";
import { month } from "../serve/time.js";
import { year } from "../serve/time.js";
import { week } from "../serve/time.js";
import { pause } from "../serve/time.js";
import { start } from "../serve/time.js";
import { forward } from "../serve/time.js";
import { back } from "../serve/time.js";


export default{
    name:"TimeSetter",
    data () {
        return {
            icon:'el-icon-arrow-up',
            foldClass:false,
            nowTime: null,
            log1:this.logcontent()
           
        }
    },
    methods:{
        show(){
          this.icon=this.icon=='el-icon-arrow-up'?'el-icon-arrow-down':'el-icon-arrow-up'
        },
        mouseOver(){
          this.foldClass=true
        },
        leave(){
          this.foldClass=false
        },
        GetNowTime(){
          var timebox = new Array(6)
          timebox[0]=year
          timebox[1]=month
          timebox[2]=date
          timebox[3]=hour
          timebox[4]=minute
          timebox[5]=week
          return timebox;
        },
        pauseTime(){
          pause();
        },
        startTime(){
           start();
        },
        forwardTime(){
           forward();
        },
        backTime(){
          back();
        },
        logcontent(){
          var logcon=[]
          logcon=(localStorage.getItem('logs'))
          return logcon
        },
        
    }
}
</script>


<style scoped>
#home {
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  position: relative;
}
#home >>> .fold {
  height: 18px;
  width: 40px;
  background-color: rgba(90, 90, 90, 0.85);
  position: absolute;
  top: -18px;
  left: 50%;
  z-index: 9999;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  border-color: #909399;
  color: #fff;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
}
#home >>> .fold:hover {
  border-color: #a6a9ad;
}
#home >>> .fode2-choose {
  top: 0;
}
</style>
<style>
.transition-box {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
