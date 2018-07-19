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
          <div class="menu">
            <el-menu default-active="photo">
              <el-menu-item index="photo" @click="changeTab('photo')">
                  <i class="el-icon-document"></i>
                  <span slot="title">PHOTO</span>
              </el-menu-item>
              <el-menu-item index="comic" @click="changeTab('comic')">
                  <i class="el-icon-location"></i>
                  <span slot="title">COMIC</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="16" class="right">
          <div class="photo" v-if="currentShow == 'photo'">
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
              <el-col :span="6">
                <div class="comic-box">
                  6
                </div>
                <p class="heart">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </p>
              </el-col>
            </el-row>
          </div>
          <div class="comic" v-if="currentShow == 'comic'">
            comic
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
  name: 'First',
  data () {
    return {
      activeIndex: 'first',
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
  p.heart{
    text-align: right;
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