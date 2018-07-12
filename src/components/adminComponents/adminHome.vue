<template>
 <div>
   <div id="top">
     <el-row :gutter="10">
        <el-col :span="12">12</el-col>
        <el-col :span="12">
          <i class="el-icon-menu" style="float:right"></i>
        </el-col>
     </el-row>
   </div>
   <div id="center">
      <el-row :gutter="10">
        <el-col :span="4">
          <div id="left">
            <el-menu default-active="boyHome" :unique-opened=true>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>Boy</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="boyHome" @click="changeTab('boyHome')">boyHome</el-menu-item>
                  <el-menu-item index="boySecond" @click="changeTab('boySecond')">boySecond</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">Girl</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="girlHome" @click="changeTab('girlHome')">girlHome</el-menu-item>
                  <el-menu-item index="girlSecond" @click="changeTab('girlSecond')">girlSecond</el-menu-item>
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
          </div>
        </el-col>
        <el-col :span="20">
          <div id="right">
            <div id="boyHomeAdmin" v-if="currentShow == 'boyHome'">
              boyHomeAdmin
            </div>
            <div id="boySecondAdmin" v-if="currentShow == 'boySecond'">
              boySecondAdmin
            </div>
            <div id="girlHomeAdmin" v-if="currentShow == 'girlHome'">
              girlHomeAdmin
            </div>
            <div id="girlSecondAdmin" v-if="currentShow == 'girlSecond'">
              girlSecondAdmin
            </div>
            <div id="commonHomeAdmin" v-if="currentShow == 'commonHome'">
              commonHomeAdmin
            </div>
            <div id="commonSecondAdmin" v-if="currentShow == 'commonSecond'">
              commonSecondAdmin
            </div>
          </div>
        </el-col>
      </el-row> 
   </div>
 </div>
</template>
<script>
export default {
  name: 'AdminHome',
  data () {
    return {
      currentShow:'boyHome'
    }
  },
  methods: {
    changeTab:function(val){
      var _self = this;
      _self.currentShow = val;
    }
  }
}
</script>
<style scoped>
  .el-menu{
    border:none;
  }
  #left,#right{
    height: 600px;
  }
  #right{
    background: #ccc;
  }
</style>