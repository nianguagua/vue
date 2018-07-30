<template>
  <el-container>
    <el-header style="height:120px;">
      <el-row :gutter="10">
        <el-col :span="8">
          <headnavLeft></headnavLeft>
        </el-col>
        <el-col :span="12">
          <div class="box nav">
            <template>
              <el-menu :default-active="activeIndex" class="top-nav" mode="horizontal" @select="changeTab">
                <el-menu-item index="home">Home</el-menu-item>
                <el-menu-item index="second">Second</el-menu-item>
                <el-menu-item index="third">Third</el-menu-item>
              </el-menu>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavBoyRight></headnavBoyRight>
        </el-col>
      </el-row> 
    </el-header> 
    <el-main>
      <el-row :gutter="10">
        <el-col :span="2">&nbsp;</el-col>
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
              <el-row class="home-tip">
                <el-col>
                  <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 14px;">
                      <span>home</span>
                      <div class="bottom clearfix">
                        <time class="time">2018-07-27</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row class="home-tip">
                <el-col>
                  <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 14px;">
                      <span>home2</span>
                      <div class="bottom clearfix">
                        <time class="time">2018-07-27</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row class="home-tip">
                <el-col>
                  <el-card :body-style="{ padding: '0px' }">
                    <div style="padding: 14px;">
                      <span>home3</span>
                      <div class="bottom clearfix">
                        <time class="time">2018-07-27</time>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <router-link to="/boyfirst">
                <div class="go go-first">
                  Go
                </div>
              </router-link>
            </div>
            <div class="second boysecond-content" v-if="currentShow == 'second'">
              <el-row>
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="1">
                  <el-card :body-style="{ padding: '0px' }">
                    <img src="../../../static/image/photo1.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>demo</span>
                      <div class="bottom clearfix">
                        <time class="time">2018-07-30</time>
                        <el-button type="text" class="button">下载</el-button>
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
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
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
    </el-main>
    <el-footer style="height:20px">
      
    </el-footer>
  </el-container>
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
  .el-container{
    background-size: cover;
    background: url('../../../static/image/boyHomeBg.jpg');
  } 
  .box.content{
    background-size: cover;
    background: url('../../../static/image/boyHomeBg2.jpg');
  }
  .indroduce,.content{
    height: 500px;
    background: #000;
    padding-top: 10px;
  }
  .indroduce{
    position: relative;
  }
  .boy-rotate{
    position: absolute;
    width: 160px;
    height: 160px;
    border-radius: 90px;
    background: #40afab;
    margin-left: -50px;
    padding: 10px;
    text-align: center;
  }
  .go{
    position: absolute;
    right: -50px;
    top: 360px;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 50px;
    color: #fff;
    background: #40afab;
    box-shadow: 3px 3px #000;
  }
  .content>.home,.content>.second,.content>.third{
    position: relative;
  }
  .box.title{

  }
  .home-tip{
    margin-top: 10px;
  }
  .boysecond-content img{
    max-width: 100%;
  }
</style>