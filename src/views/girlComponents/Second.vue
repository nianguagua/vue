<template>
  <div id="content">
    <div id="top">
      <el-row :gutter="10">
        <el-col :span="6">
          <headnavLeft></headnavLeft>
        </el-col>
        <el-col :span="14">
          <div class="box nav">
            <template>
              <el-menu :default-active="activeIndex" class="top-nav" mode="horizontal">
                <el-menu-item index="home">
                  <router-link to="/">Home</router-link>
                </el-menu-item>
                <el-menu-item index="first">
                  <router-link to="/first">First</router-link>
                </el-menu-item>
                <el-menu-item index="second">
                  <router-link to="/second">Second</router-link>
                </el-menu-item>
                <el-menu-item index="third">
                  <router-link to="/third">Third</router-link>
                </el-menu-item>
                <el-menu-item index="fourth">
                  <router-link to="/fourth">Fourth</router-link>
                </el-menu-item>
              </el-menu>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavRight></headnavRight>
        </el-col>
      </el-row> 
    </div> 
    <div id="center">
      <el-row>
        <el-col :span="2">
          <div class="box">&nbsp;</div>
        </el-col>
        <el-col :span="4" class="left">
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
        </el-col>
        <el-col :span="16" class="right">
          <div class="vueFirst" v-if="">
            1
          </div>
          <div class="comic">
            2
          </div>
        </el-col>
        <el-col :span="2">
          &nbsp;
        </el-col>
      </el-row>
    </div>
    <div id="bottom">
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'Second',
  data () {
    return {
      activeIndex: 'second',
      currentShow: 'vue'
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
  #center{
    margin-bottom: 60px;
    padding-top: 10px;
    border-top: 1px solid #ccc;
  }
  #center .left{
    background: #ccc;
  }
  #center .right{
    padding: 10px;
    max-height: 530px;
    background: #999;
    overflow-y: scroll;
  }
</style>