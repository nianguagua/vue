<template>
  <el-menu :default-active="activeIndex" class="top-nav" mode="horizontal">
    <el-menu-item index="home">
      <router-link to="/boy"><div>Home</div></router-link>
    </el-menu-item>
    <el-menu-item index="first">
      <router-link to="/boyFirst"><div>A</div></router-link>
    </el-menu-item>
    <el-menu-item index="second">
      <router-link to="/boySecond"><div>B</div></router-link>
    </el-menu-item>
    <el-menu-item index="third">
       <router-link to="/boyThird"><div>C</div></router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import Bus from '../assets/js/common/eventBus'
export default {
  name: 'boyHeadNavCenter',
  props:['activeIndex'],
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
  
</style>
