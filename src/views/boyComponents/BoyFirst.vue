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
        <el-menu default-active="pythonFirst" :unique-opened=true>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>Python</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="pythonFirst" @click="changeTab('pythonFirst')">pythonFirst</el-menu-item>
              <el-menu-item index="pythonSecond" @click="changeTab('pythonSecond')">pythonSecond</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">自动化测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="autotestFirst" @click="changeTab('autotestFirst')">autotestFirst</el-menu-item>
              <el-menu-item index="autotestSecond" @click="changeTab('autotestSecond')">autotestSecond</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">压力测试</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="pressureFirst" @click="changeTab('pressureFirst')">pressureFirst</el-menu-item>
              <el-menu-item index="pressureSecond" @click="changeTab('pressureSecond')">pressureSecond</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="pythonFirst" v-if="currentShow == 'pythonFirst'">
          pythonFirst
        </div>
        <div class="pythonSecond"  v-if="currentShow == 'pythonSecond'">
          pythonSecond
        </div>
        <div class="autotestFirst" v-if="currentShow == 'autotestFirst'">
          autotestFirst
        </div>
        <div class="autotestSecond"  v-if="currentShow == 'autotestSecond'">
          autotestSecond
        </div>
        <div class="pressureFirst" v-if="currentShow == 'pressureFirst'">
          pressureFirst
        </div>
        <div class="pressureSecond"  v-if="currentShow == 'pressureSecond'">
          pressureSecond
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
  name: 'BoyFirst',
  data () {
    return {
      activeIndex: 'first',
      currentShow: 'pythonFirst'
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
  .left .tab-name{
    height: 100px;
    background: #777;
  }
</style>