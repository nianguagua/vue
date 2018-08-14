<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item v-for="da,index in itemInfo" :key="da.id" :name="index+1+''">
      <template slot="title">
        <div style="border-bottom:1px dashed #ccc;padding-left:5px;">
          <i class="header-icon el-icon-document"></i> {{da.title}} ({{da.time}})
        </div>
      </template>
      <div style="text-indent:2em;">
        {{da.content}}
      </div>
    </el-collapse-item>
   <!--  <div>
      {{itemInfo}}
    </div> -->
</el-collapse>
</template>
<script>
// import Bus from '../../assets/js/common/eventBus'
export default {
  name: 'secondDataComponent',
  props:["itemInfo","activeName"],
  data () {
    return {
    	
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
