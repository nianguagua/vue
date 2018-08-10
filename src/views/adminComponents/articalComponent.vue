<template>
 	<el-dialog title="文章" :visible.sync="dialogVisible" width="60%" :close-on-click-modal="false">
      <el-row :gutter="10">
        123
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">保 存</el-button>
      </span>
    </el-dialog>
</template>
<script>
export default {
  name: 'articalComponent',
  data () {
    return {
    	dialogVisible:false
    }
  },
  mounted:function(){
  },
  methods: {
    edit:function(){
      this.dialogVisible = true;
    },
  	save:function(){

    }
  }
}
</script>