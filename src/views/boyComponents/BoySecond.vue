<template>
  <el-container>
    <el-header style="height:120px;">
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
    <el-main>
      <el-row>
        <el-col :span="2">
          <div class="box">&nbsp;</div>
        </el-col>
        <el-col :span="4" class="left">
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
        </el-col>
        <el-col :span="16" class="right">
          <div class="app" v-if="currentShow == 'app'">
            <el-row>
              <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../../static/image/photo1.jpg" class="image">
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
              <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../../static/image/photo2.jpg" class="image">
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
            <el-row>
              <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../../static/image/photo2.jpg" class="image">
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
        </el-col>
        <el-col :span="2">
          &nbsp;
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="height:20px">
      
    </el-footer>
    <codeDialog></codeDialog>
  </el-container>
</template>
<script>
export default {
  name: 'BoySecond',
  data () {
    return {
      activeIndex: 'second',
      currentShow: "app"
    }
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
  .el-main{
    margin-bottom: 60px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
  }
  .app .el-row,.demo .el-row{
    margin-top: 5px;
  }
  .app img,.demo img{
    max-width: 100%;
  }
</style>