<template>
  <div>
    <el-card class="box-card" v-for="o in secondInfo" :key="o.id">
      <div slot="header" class="clearfix">
        <div style="margin:-8px;">
          <el-tag v-bind:type="o.tag.type">{{o.tag.name}}</el-tag>
          <span class="title">{{o.title}}</span>
          <span><small>({{o.edittime}})</small></span>
          <el-button style="float: right; padding: 3px 0" type="text">
            <i class="el-icon-delete"></i>
            <span>/</span>
            <i class="el-icon-edit" @click="eidtArtical(o)"></i>
          </el-button>
        </div>
      </div>
      <div class="text item">
        {{o.msg}}
      </div>
    </el-card>
  </div>
</template>
<script>
import Bus from '../../assets/js/common/eventBus'
export default {
  name: 'girlSecondData',
  props:["secondInfo"],
  data () {
    return {
    	dialogVisible:true
    }
  },
  mounted:function(){
  },
  methods: {
  	eidtArtical:function(data){
      Bus.$emit("transEdit",data);
    }
  }
}
</script>
<style scoped>
  
  .el-card{
    margin-bottom: 5px;
  }
  .text.item{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
