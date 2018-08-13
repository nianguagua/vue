<template>
  <el-menu :default-active="activeIndex" class="top-nav" mode="horizontal">
    <el-menu-item index="home">
      <router-link to="/"><div>首页</div></router-link>
    </el-menu-item>
    <el-menu-item index="first">
      <router-link to="/first"><div>创作中心</div></router-link>
    </el-menu-item>
    <el-menu-item index="second">
      <router-link to="/second"><div>学习</div></router-link>
    </el-menu-item>
    <el-menu-item index="third">
      <router-link to="/third"><div>工具库</div></router-link>
    </el-menu-item>
    <el-menu-item index="fourth" v-on:click="checkCode">
      <router-link to="#">经历</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
import Bus from '../assets/js/common/eventBus'
export default {
  name: 'headnavCenter',
  props:['activeIndex'],
  data () {
    return {
      
    }
  },
  methods:{
    checkCode:function(){
      if(this.$store.state.code === ''){
        //this.$store.dialog = true;
        //alert("需要邀请码");
        Bus.$emit("transCode",true);
      }else{
        this.$router.push({path:'/fourth'});
      }
      //this.$store.state.code = "123";
    }
  }
}
</script>
