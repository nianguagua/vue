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
        <el-menu default-active="vueFirst" :unique-opened=true>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Vue</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="vueFirst" @click="changeTab('vueFirst')">vueFirst</el-menu-item>
                <el-menu-item index="vueSecond" @click="changeTab('vueSecond')">vueSecond</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">Element UI</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="elementFirst" @click="changeTab('elementFirst')">elementFirst</el-menu-item>
                <el-menu-item index="elementSecond" @click="changeTab('elementSecond')">elementSecond</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">HTML5</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="htmlFirst" @click="changeTab('htmlFirst')">htmlFirst</el-menu-item>
                <el-menu-item index="htmlSecond" @click="changeTab('htmlSecond')">htmlSecond</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="vueFirst" v-if="currentShow == 'vueFirst'">
          vueFirst
        </div>
        <div class="vueSecond"  v-if="currentShow == 'vueSecond'">
          vueSecond
        </div>
        <div class="elementFirst" v-if="currentShow == 'elementFirst'">
          elementFirst
        </div>
        <div class="elementSecond"  v-if="currentShow == 'elementSecond'">
          elementSecond
        </div>
        <div class="htmlFirst" v-if="currentShow == 'htmlFirst'">
          htmlFirst
        </div>
        <div class="htmlSecond"  v-if="currentShow == 'htmlSecond'">
          htmlSecond
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
  name: 'Second',
  data () {
    return {
      activeIndex: 'second',
      currentShow: 'vueFirst'
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