<template>
  <div>
    <div>
      <!-- 悬浮球 -->
      <div
        ref="breathing_lamp"
        class="breathing_lamp"
        @click="show3 = !show3"
        @touchstart.stop="handleTouchStart"
        @touchmove.prevent.stop="handleTouchMove($event)"
        @touchend.stop="handleTouchEnd"
        :style="{left: left + 'px',top: top + 'px',width: itemWidth + 'px',height: itemHeight + 'px'}"
        v-text="text"
        v-if="isShow"
      ></div>
      <div id="buttonComBination" v-show="show3" class="collapseTransiton">
        <el-collapse-transition>
          <div class="transitionBoxs" :style="{left: left - 20+  'px', top: top + 30+ 'px'}">
            <div class="transition-box">返回</div>
            <div class="transition-box">编辑</div>
            <div class="transition-box">下一步</div>
          </div>
        </el-collapse-transition>
        <!-- <buttonComBination></buttonComBination> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    // 球名字默认：“球”
    text: {
      type: String,
      default: "ball",
    }, // 球宽度默认：“40”
    itemWidth: {
      type: Number,
      default: 50,
    }, // 球高度默认：“40”
    itemHeight: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      left: 0, // 距离左边距离
      top: 0, // 距离抬头距离
      startToMove: false, // 开始移动时候不显示
      isShow: true, // 组件是否显示
      timer: null, // 定时器
      currentTop: null, // 获取当前页面的滚动条纵坐标位置
      clientW: document.documentElement.clientWidth, //视口宽
      clientH: document.documentElement.clientHeight, //视口高
    };
  },
  created() {
    // 初始化定义距离四周距离
    this.left = this.clientW - this.itemWidth - 30;
    this.top = this.clientH / 2 - this.itemHeight / 2;
  },

  methods: {
    // 点击小球事件
    onclick() {
      console.log("I am a small clouds");
    }, // 开始移动方法

    handleTouchStart() {
      this.startToMove = true;
      this.$refs.breathing_lamp.style.transition = "none";
    }, // 移动中方法

    handleTouchMove(e) {
      const clientX = e.targetTouches[0].clientX; //手指相对视口的x
      const clientY = e.targetTouches[0].clientY; //手指相对视口的y
      const isInScreen =
        clientX <= this.clientW &&
        clientX >= 0 &&
        clientY <= this.clientH &&
        clientY >= 0;
      if (this.startToMove && e.targetTouches.length === 1) {
        if (isInScreen) {
          this.left = clientX - this.itemWidth / 2;
          this.top = clientY - this.itemHeight / 2;
        }
      }
    }, // 移动结束方法

    handleTouchEnd() {
      if (this.left < this.clientW / 2) {
        this.left = 30; //不让贴边 所以设置30没设置0
        this.handleIconY();
      } else {
        this.left = this.clientW - this.itemWidth - 30; //距边30px
        this.handleIconY();
      }
      this.$refs.breathing_lamp.style.transition = "all .3s";
    }, // 上下不贴边方法

    handleIconY() {
      if (this.top < 0) {
        this.top = 30; //不上帖上边所以设置为30 没设置0
      } else if (this.top + this.itemHeight > this.clientH) {
        this.top = this.clientH - this.itemHeight - 30; //距边30px
      }
    },
  },
};
</script>
<style>
.breathing_lamp {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: orange;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
</style>