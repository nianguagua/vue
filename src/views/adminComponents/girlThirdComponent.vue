<template>
  <div>
    <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="App" name="first">
      App
    </el-tab-pane>
    <el-tab-pane label="Demo" name="second">
      Demo
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
//import Bus from '../../assets/js/common/eventBus'
export default {
  name: 'girlThirdComponent',
  props:["thirdInfo"],
  data () {
    return {
    	activeName:"first"
    }
  },
  mounted:function(){
  },
  methods: {
  }
}
</script>
<style scoped>
  
 
</style>
