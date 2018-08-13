<template>
  <el-container>
    <el-header style="height:120px;border-bottom:1px solid #ccc;">
      <el-row :gutter="10">
        <el-col :span="6">
          <headnavLeft></headnavLeft>
        </el-col>
        <el-col :span="14">
          <div class="box nav">
            <template>
              <boyHeadNavCenter :activeIndex="activeIndex"></boyHeadNavCenter>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavBoyRight></headnavBoyRight>
        </el-col>
      </el-row> 
    </el-header> 
    <el-container>
      <el-aside width="300px">
        <div class="tab-name">
            
        </div>
        <div class="menu">
          <el-menu default-active="app">
            <el-menu-item index="app" @click="changeTab('app')">
                <i class="el-icon-document"></i>
                <span slot="title">APP</span>
            </el-menu-item>
            <el-menu-item index="demo" @click="changeTab('demo')">
                <i class="el-icon-location"></i>
                <span slot="title">DEMO</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="app" v-if="currentShow == 'app'">
            <el-row>
              <el-col :span="6" v-for="(o, index) in 4" :key="o">
                <el-card>
                  <div class="img">
                    <img src="../../../static/image/photo1.jpg" class="image">
                  </div>
                  <div style="padding: 14px;">
                    <span>App</span>
                    <div class="bottom clearfix">
                      <time class="time">2018-07-30</time>
                      <el-button type="text" class="button">下载</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
        </div>
        <div class="demo" v-if="currentShow == 'demo'">
          <el-row>
            <el-col :span="6" v-for="(o, index) in 8" :key="o">
              <el-card>
                <div class="img">
                  <img src="../../../static/image/photo2.jpg" class="image">
                </div>
                <div style="padding: 14px;">
                  <span>Demo</span>
                  <div class="bottom clearfix">
                    <time class="time">2018-07-30</time>
                    <el-button type="text" class="button">下载</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
    <el-footer style="height:20px">
      
    </el-footer>
    <codeDialog></codeDialog>
  </el-container>
</template>
<script>
import boyHeadNavCenter from "../../components/boyHeadNavCenter"
export default {
  name: 'BoySecond',
  data () {
    return {
      activeIndex: 'second',
      currentShow: "app"
    }
  },
  components:{
    boyHeadNavCenter:boyHeadNavCenter
  },
  methods:{
    changeTab:function(type){
      var _self = this;
      _self.currentShow = type;
    }
  }
}
</script>
<style scoped>
  .app img,.demo img{
    max-width: 100%;
  }
  .el-card{
    height: 300px;
    margin-bottom: 10px; 
  }
  div.img{
    text-align: center;
    height: 200px;
    background: #333;
  }
  img{
    max-width: 100%;
    max-height: 200px;
  }
</style>