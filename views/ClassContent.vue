/* eslint-disable no-unused-vars */
<template>
  <el-container style="height: 100vh">
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header></common-header>
        <time-setter></time-setter>
      </el-header>
      <el-main>
        <el-row style="margin-top: 20px">
          <el-col :span="12">
            <el-page-header
              @back="goBack()"
              content="课程详情"
            ></el-page-header>
          </el-col>
        </el-row>
        <el-row style="margin-top: 40px">
          <el-col :span="24">
            <el-card shadow="hover">
              <div class="info">
                <h2 class="name">{{ getname() }}</h2>
                <p class="number" style="margin-top: 40px">
                  {{ "授课教师: " + searchteacher() }}
                </p>
                <p class="college">{{ "上课日期: " + searchweekdate() }}</p>
                <p class="college">{{ "上课时间: " + searchtime() }}</p>
                <p class="college">{{ "上课地点: " + searchloca() }}</p>
                <p class="college">{{ "考试内容: " + searchexam() }}</p>
                <p class="college">{{ "考试时间: " + searchexamtime() }}</p>
                <p class="college">{{ "考试地点: " + searchexamlo() }}</p>
                <el-divider></el-divider>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :span="24">
            <el-card shadow="hover">
              <el-upload
                class="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <h3>提交作业</h3>
                <p>{{ "当期作业内容：" +searchwork()}}</p>
                <p>{{ "截止时间：" +searchddl()}}</p>
                <div slot="tip" class="el-upload__tip">快点给我交作业</div>
              </el-upload>
              <el-button size="small" type="primary" style="margin-top: 20px" @click="submit(fileList)">打包查重</el-button>
              <el-button size="small" type="primary" style="margin-top: 20px" @click="sub">提交</el-button>
            </el-card>
          </el-col>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-col :span="24">
            <el-card shadow="hover">
                <h4>资料下载</h4>
                <el-button size="small" type="primary" style="margin-top: 20px" @click="download">下载</el-button>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/javascript" src="./jszip.min.js"></script>
<script>
import CommonAside from "../src/components/commonAside.vue";
import CommonHeader from "../src/components/commonHeader.vue";
import { searchclass } from "../src/serve/searchclass.js";
import TimeSetter from "../src/components/timeSetter.vue";

export default {
  name: "ContentPage",
  components: {
    CommonAside,
    CommonHeader,
    TimeSetter,
  },
  data() {
    return {
      classname: this.getname(),
      fileList: [],
    };
  },
  methods: {
    getname() {
      var id = this.$route.params.name;
      return id;
    },
    goBack() {
      this.$router.go(-1);
      console.log("go back");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}?`);
    },
    submit(){
      var zip = new JSZip()
      this.check(this.fileList);
      zip.generateAsync({
          type: 'blob',// 压缩类型
          compression: "DEFLATE", // STORE：默认不压缩 DEFLATE：需要压缩
          compressionOptions: {
              level: 9 // 压缩等级1~9 1压缩速度最快，9最优压缩方式
          }
      }).then(function(file) {
          // 下载的文件名
          var filename = 'work.zip';
          // 创建隐藏的可下载链接
          var eleLink = document.createElement('a');
          eleLink.download = filename;
          eleLink.style.display = 'none';
          // 下载内容转变成blob地址
          eleLink.href = URL.createObjectURL(content);
          // 触发点击
          document.body.appendChild(eleLink);
          eleLink.click();
          // 然后移除
          document.body.removeChild(eleLink);
      });
    },
    check(fileList){
        for(let i = 0; i < fileList.length - 1; i += 1) {
          for(let j = 0; j < fileList.length; j += 1) {
            if(fileList[i].name === fileList[j].name) {
              this.$alert("您提交的文档中存在重复文档，请检查", "警告");
            }
          }
        }
    },
    sub(){
      this.$alert("您提交的作业已经成功压缩打包提交", "提示");
    },
    searchteacher() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).teacher;
      } else {
        return -1;
      }
    },
    searchweekdate() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).date;
      } else {
        return -1;
      }
    },
    searchtime() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).begin;
      } else {
        return -1;
      }
    },
    searchloca() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).location;
      } else {
        return -1;
      }
    },
    searchwork() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).homework;
      } else {
        return -1;
      }
    },
    searchddl() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).ddl;
      } else {
        return -1;
      }
    },
    searchexam() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).exam;
      } else {
        return -1;
      }
    },
    searchexamtime() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).examtime;
      } else {
        return -1;
      }
    },
    searchexamlo() {
      var name = this.getname();
      if (searchclass(name) != -1) {
        return searchclass(name).examlocation;
      } else {
        return -1;
      }
    },
    download(){
      this.$alert("已经开始下载，请在浏览器下载页查询", "提示");
    }
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
  background-color: rgb(234, 234, 234);
}
.userinfo {
  background-color: rgb(255, 255, 255);
}
</style>
