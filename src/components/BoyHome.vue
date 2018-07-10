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
      activeIndex: 'second',
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
<style>

</style>