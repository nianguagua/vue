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
              <headnavCenter :activeIndex="activeIndex"></headnavCenter>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavGirlRight></headnavGirlRight>
        </el-col>
      </el-row> 
    </el-header> 
    <el-container style="padding-top:10px;background: #eee;">
      <el-aside width="300px">
        <div class="tab-name">
            
        </div>
        <div class="menu">
          <el-menu default-active="app" style="border:none;">
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
          <el-card shadow="never">
            <span style="margin-right:10px">名称:<font style="color:#409EFF">猫宁</font></span>
            <span>描述:this is a description...</span>
            <el-button style="float: right; padding: 3px 0" type="text">下载</el-button>
          </el-card>
          <el-card shadow="never">
            <span style="margin-right:10px">名称:<font style="color:#409EFF">猫宁</font></span>
            <span>描述:this is a description...</span>
            <el-button style="float: right; padding: 3px 0" type="text">下载</el-button>
          </el-card>
          <el-card shadow="never">
            <span style="margin-right:10px">名称:<font style="color:#409EFF">猫宁</font></span>
            <span>描述:this is a description...</span>
            <el-button style="float: right; padding: 3px 0" type="text">下载</el-button>
          </el-card>
        </div>
        <div class="demo" v-if="currentShow == 'demo'">
          demo
        </div>
      </el-main>
    </el-container>
    <el-footer style="height:20px">
      
    </el-footer>
    <codeDialog></codeDialog>
  </el-container>
</template>
<script>
import headnavCenter from "../../components/headnavCenter"
export default {
  name: 'Third',
  data () {
    return {
      activeIndex: 'third',
      currentShow: "app"
    }
  },
  components:{
    headnavCenter:headnavCenter
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
  .el-card{
    margin-bottom: 5px;
  }
  .el-aside{
    margin-right: 2px;
  }
</style>