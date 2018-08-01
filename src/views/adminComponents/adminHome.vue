<template>
 <el-container>
   <el-aside width="300px">
      <div class="title"></div>
      <el-menu background-color="#404b56" text-color="#ccc" active-text-color="#00d9ed" default-active="boyFirst" :unique-opened=true>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Boy</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="boyFirst" @click="changeTab('boyFirst')">boyFirst</el-menu-item>
            <el-menu-item index="boySecond" @click="changeTab('boySecond')">boySecond</el-menu-item>
            <el-menu-item index="boyThird" @click="changeTab('boyThird')">boyThird</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">Girl</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="girlFirst" @click="changeTab('girlFirst')">girlFirst</el-menu-item>
            <el-menu-item index="girlSecond" @click="changeTab('girlSecond')">girlSecond</el-menu-item>
            <el-menu-item index="girlThird" @click="changeTab('girlThird')">girlThird</el-menu-item>
            <el-menu-item index="girlFourth" @click="changeTab('girlFourth')">girlFourth</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">Common</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="commonHome" @click="changeTab('commonHome')">commonHome</el-menu-item>
            <el-menu-item index="commonSecond" @click="changeTab('commonSecond')">commonSecond</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
   </el-aside>
   <el-main>
      <el-container>
        <el-header style="text-align: right">
          <i class="el-icon-message header-icon"></i>
          <i class="el-icon-menu header-icon" @click="logout"></i>
        </el-header>
        <el-main>
          <div id="boyHomeAdmin" v-if="currentShow == 'boyFirst'">
            boyFirstAdmin
          </div>
          <div id="boySecondAdmin" v-if="currentShow == 'boySecond'">
            boySecondAdmin
          </div>
          <div id="boyThirdAdmin" v-if="currentShow == 'boyThird'">
            boyThirdAdmin
          </div>
          <div id="girlHomeAdmin" v-if="currentShow == 'girlFirst'">
            girlFirstAdmin
          </div>
          <div id="girlSecondAdmin" v-if="currentShow == 'girlSecond'">
            girlSecondAdmin
          </div>
          <div id="girlThirdAdmin" v-if="currentShow == 'girlThird'">
            girlThirdAdmin
          </div>
          <div id="girlFourthAdmin" v-if="currentShow == 'girlFourth'">
            girlFourthAdmin
          </div>
          <div id="commonHomeAdmin" v-if="currentShow == 'commonHome'">
            commonHomeAdmin
          </div>
          <div id="commonSecondAdmin" v-if="currentShow == 'commonSecond'">
            commonSecondAdmin
          </div>
        </el-main>
      </el-container>
   </el-main>
 </el-container>
</template>
<script>
export default {
  name: 'AdminHome',
  data () {
    return {
      currentShow:'boyFirst'
    }
  },
  methods: {
    changeTab:function(val){
      var _self = this;
      _self.currentShow = val;
    },
    logout:function(){
      this.$store.commit('logout','');
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style scoped>
  .header-icon{
    /*color: #fff;*/
    margin: 0 10px;
    line-height: 60px;
  }
  .el-aside{
    background: #404b56;
  }
  .el-main{
    background: #eee;
    padding: 0;
  }
  .el-header{
    background: #fff;
  }
  .title{
    height: 120px;
    background: #404b56;
  }
  .el-menu{
    border: none;
  }
</style>