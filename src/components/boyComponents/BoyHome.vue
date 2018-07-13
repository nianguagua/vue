<template>
  <div>
    <div id="top">
      <el-row :gutter="10">
        <el-col :span="8">
          <headnavLeft></headnavLeft>
        </el-col>
        <el-col :span="14">
          <div class="box nav">
            <template>
              <el-menu :default-active="activeIndex" class="top-nav" mode="horizontal" @select="changeTab">
                <el-menu-item index="home">A</el-menu-item>
                <el-menu-item index="second">B</el-menu-item>
                <el-menu-item index="third">C</el-menu-item>
              </el-menu>
            </template>
          </div>  
        </el-col>
        <el-col :span="2">
          <headnavRight></headnavRight>
        </el-col>
      </el-row> 
    </div> 
    <div id="center">
      <el-row :gutter="10">
        <el-col :span="2">
          2
        </el-col>
        <el-col :span="4">
          <div class="box indroduce">
            <transition name="rotate">
              <div class="home boy-rotate" v-if="currentShow == 'home'">
                home
              </div>
            </transition>
            <transition name="rotate">
              <div class="second boy-rotate" v-if="currentShow == 'second'">
                second
              </div>
            </transition>
            <transition name="rotate">
              <div class="third boy-rotate" v-if="currentShow == 'third'">
                third
              </div>
            </transition>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="box content">
            <div class="home boyhome-content" v-if="currentShow == 'home'">
              home
              <router-link to="/boyfirst">
                <div class="go go-first">
                  Go
                </div>
              </router-link>
            </div>
            <div class="second boysecond-content" v-if="currentShow == 'second'">
              second
              <router-link to="/boysecond">
                <div class="go go-second">
                  Go
                </div>
              </router-link>
            </div>
            <div class="third boythird-content" v-if="currentShow == 'third'">
              third
              <router-link to="/boythird">
                <div class="go go-third">
                  Go
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          2
        </el-col>
      </el-row>
    </div>
    <div id="bottom">
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoyHome',
  data () {
    return {
      msg: 'BoyHome',
      activeIndex: 'home',
      currentShow:"home"
    }
  },
  methods:{
      changeTab:function(key,keyPath){
        var _self = this;
        _self.currentShow = key;
      }
    }
}
</script>
<style scoped>
  #center .indroduce,#center .content{
    height: 500px;
    background: #ccc;
    padding-top: 10px;
  }
  #center .indroduce{
    position: relative;
  }
  #center .boy-rotate{
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 90px;
    background: #666;
    margin-left: -50px;
    padding: 10px;
    text-align: center;
  }
  #center .go{
    position: absolute;
    right: -50px;
    top: 360px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 50px;
    background: #666;
    box-shadow: 3px 3px #333;
  }
  .home,.second,.third{
    position: relative;
  }
</style>