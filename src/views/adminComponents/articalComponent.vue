<template>
 	<el-dialog title="文章编辑" :visible.sync="dialogVisible" width="60%" :close-on-click-modal="false">
    <el-row style="margin-top:-30px;">
      <el-form>
        <el-form-item>
          <el-input v-model="title" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="6">
            <el-select v-model="sortData" placeholder="请选择分类">
              <el-option v-for="op in selectOption" :key="op.value" v-bind:label="op.label" v-bind:value="op.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6" style="margin-left:10px;">
            <el-input v-model="tag" placeholder="请输入标签"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row>
      <quill-editor v-model="content" ref="myQuillEditor" :content="content" :options="editorOption" 
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
      content:"",
      title:"",
      sortData:"",
      tag:"",
      selectOption:[
        {label:"VUE",value:"VUE"},
        {label:"LESS",value:"LESS"},
        {label:"HTML5",value:"HTML5"},
        {label:"ES6",value:"ES6"},
        {label:"CSS3",value:"CSS3"},
        {label:"其他",value:"Other"}
      ],
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
      this.content = "";
      this.title = "";
      this.sortData = "";
      this.tag = "";
    },
    edit:function(data){
      this.dialogVisible = true;
      this.content = data.msg;
      this.title = data.title;
      this.sortData = data.type;
      this.tag = data.tag.name;
      //console.log(data);
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
<style scoped>
  .el-dialog__header{
    border-bottom: 1px solid red;
  }
</style>