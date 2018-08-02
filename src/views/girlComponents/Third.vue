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
          app
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
export default {
  name: 'Third',
  data () {
    return {
      activeIndex: 'third',
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
  .comic-box{
    height: 250px;
    background: #ccc;
    margin-bottom: 10px;
  }
</style>