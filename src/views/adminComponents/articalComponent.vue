<template>
 	<el-dialog title="文章编辑" :visible.sync="dialogVisible" width="60%" :close-on-click-modal="false">
      <el-row :gutter="10">
        <quill-editor v-model="content" ref="myQuillEditor"  :options="editorOption" 
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">保 存</el-button>
      </span>
    </el-dialog>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import Bus from '../../assets/js/common/eventBus'
export default {
  name: 'articalComponent',
  data () {
    return {
    	dialogVisible:false,
      content:null,
      editorOption:{
        placeholder:"请输入文本...",
        scrollingContainer:".ql-editor"
      }
    }
  },
  mounted:function(){
    var _this = this;
    Bus.$on("transEdit",function(msg){
      _this.edit(msg);
    })
  },
  methods: {
    open:function(){
      this.dialogVisible = true;
    },
    edit:function(id){
      this.dialogVisible = true;
    },
  	save:function(){

    },
    onEditorBlur(){//失去焦点事件
            },
    onEditorFocus(){//获得焦点事件
    },
    onEditorChange(){//内容改变事件
    }
  }
}
</script>
<style>
  .ql-editor{
    height: 300px !important;
  }
</style>