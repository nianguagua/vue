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
              <headnavCenter :activeIndex="activeIndex"></headnavCenter>
            </template>
          </div>  
        </el-col>
        <el-col :span="4">
          <headnavRight></headnavRight>
        </el-col>
      </el-row> 
    </div> 
    <div id="center">
      <div style="height: 600px;width:60px;margin:0 auto;text-align: center;">
        <el-steps direction="vertical" :active="4" finish-status="success">
        <el-step v-popover:popover1 title="2015"></el-step>
        <el-step v-popover:popover2 title="2016"></el-step>
        <el-step v-popover:popover3 title="2017"></el-step>
        <el-step v-popover:popover4 title="2018"></el-step>
      </el-steps>
      </div>
      <el-popover ref="popover1" placement="right" title="2015" width="400" trigger="manual">
          <i>2015发生的事</i>
          <p>hahahha</p>
          <p>hahahha</p>
      </el-popover>
      <el-popover ref="popover2" placement="left" title="2016" width="400" trigger="manual">
          <i>2016发生的事</i>
          <p>hahahha</p>
          <p>hahahha</p>
      </el-popover>
      <el-popover ref="popover3" placement="right" title="2017" width="400" trigger="manual">
          <i>2017发生的事</i>
          <p>hahahha</p>
          <p>hahahha</p>
      </el-popover>
      <el-popover ref="popover4" placement="left" title="2018" width="400" trigger="manual">
          <i>2018发生的事</i>
          <p>hahahha</p>
          <p>hahahha</p>
      </el-popover>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Fourth',
  data () {
    return {
      activeIndex: 'fourth'
    }
  },
  mounted:function(){
    this.$refs['popover1'].doShow();
    this.$refs['popover2'].doShow();
    this.$refs['popover3'].doShow();
    this.$refs['popover4'].doShow();
  }
}
</script>
<style scoped>
  #top{
    background: #999;
  }
  #center{
    min-height: 700px;
    padding-top: 15px;
  }
  #content{
    height: 100%;
    min-height: 700px;
    background: #333;
  }
</style>