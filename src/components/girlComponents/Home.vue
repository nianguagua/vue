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
                <el-menu-item index="fourth">D</el-menu-item>
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
      <el-row>
        <el-col :span="2">
          <div class="box">2</div>
        </el-col>
        <el-col :span="6">
          <div class="box indroduce">
            <transition name="fadeLeft">
              <div id="home-indroduce" v-if="currentShow == 'home'">
                <i>it is {{home.indroduce}}</i>
              </div>
            </transition>
            <transition name="fadeLeft">
              <div id="second-indroduce" v-if="currentShow == 'second'">
                <i>it is {{second.indroduce}}</i>
              </div>
            </transition>
            <transition name="fadeLeft">
              <div id="third-indroduce" v-if="currentShow == 'third'">
                <i>it is {{third.indroduce}}</i>
              </div>
            </transition>
            <transition name="fadeLeft">
              <div id="fourth-indroduce" v-if="currentShow == 'fourth'">
                <i>it is {{fourth.indroduce}}</i>
              </div>
            </transition>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="box content">
            <div id="home-content" v-if="currentShow == 'home'">
              home
              <div class="next-box">
                <router-link to="/first">
                  <div class="box">
                    <span class="go">Go</span>
                  </div>  
                </router-link>
              </div>
            </div>
            <div id="second-content" v-if="currentShow == 'second'">
              second
              <div class="next-box">
                <router-link to="/second">
                  <div class="box">
                    <span class="go">Go</span>
                  </div>  
                </router-link>
              </div>
            </div>
            <div id="third-content" v-if="currentShow == 'third'">
              third
              <div class="next-box">
                <router-link to="/third">
                  <div class="box">
                    <span class="go">Go</span>
                  </div>  
                </router-link>
              </div>
            </div>
            <div id="fourth-content" v-if="currentShow == 'fourth'">
              fourth
              <div class="next-box">
                <router-link to="/fourth">
                  <div class="box">
                    <span class="go">Go</span>
                  </div>  
                </router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="2">
          
        </el-col>
      </el-row>
    </div>
    <div id="bottom">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: 'home',
      currentShow:"home",
      home:{
        indroduce:"homeHHH",
        content:""
      },
      second:{
        indroduce:"secondHHH",
        content:""
      },
      third:{
        indroduce:"thirdHHH",
        content:""
      },
      fourth:{
        indroduce:"fourthHHH",
        content:""
      }
    }
  },
  mounted:function(){
    var _self = this;
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
  /*---------动画-------------*/
 /* .slide-enter-active , .slide-leave-active{   
    transition: all 0.1s ease-in;
  }*/
  /*---------动画-------------*/

  /*-----center开始----------*/
  #center{
    height: 500px;
    margin-bottom: 70px;
    border: 1px solid #ccc;
  }
  #center .indroduce{
    height: 500px;
    background: #ddd;
    position: relative;
  }
  #home-indroduce,#second-indroduce,#third-indroduce,#fourth-indroduce{
    width: 300px;
    height: 300px;
    background: #ccc;
    position: absolute;
    top: 15px;
    right: -20px;
    box-shadow: 5px 5px #666;
  }
  #center .content{
    height: 500px;
    /*background: #999;*/
  }
  #home-content,#second-content,#third-content,#fourth-content{
    width: 600px;
    height: 500px;
    background: #999;
  }
  .next-box{
    position: relative;
    top:380px;
    left: 600px;
    /*z-index: -1;*/
    width: 40px;
    height: 70px;
    padding-top:10px;
    text-align: center;
    /*background: #666;*/
    overflow: hidden;
  }
  .next-box .box{
    width: 50px;
    height: 50px;
    margin-left: -25px;
    transform: rotate(45deg);
    box-shadow: 5px 5px #000;
  }
  .next-box span.go{
    float: right;
    margin-right: 8px;
    margin-top: 5px;
    transform: rotate(-45deg);
  }

  /*-----center结束----------*/
</style>
