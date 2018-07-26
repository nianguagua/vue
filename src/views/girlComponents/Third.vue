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
              <headnavCenter :activeIndex="activeIndex"></headnavCenter>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavGirlRight></headnavGirlRight>
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
            app
          </div>
          <div class="demo" v-if="currentShow == 'demo'">
            demo
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
  name: 'Third',
  data () {
    return {
      activeIndex: 'third',
      currentShow: "photo"
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
  .el-main .left{
    background: #ccc;
  }
  .el-main .right{
    padding: 10px;
    max-height: 530px;
    background: #999;
    overflow-y: scroll;
  }
  .left .tab-name{
    height: 100px;
    background: #777;
  }
  .comic-box{
    height: 250px;
    background: #ccc;
    margin-bottom: 10px;
  }
</style>