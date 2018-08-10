<template>
 	<el-dialog title="图片上传" :visible.sync="dialogVisible" width="60%" :close-on-click-modal="false">
    <el-row :gutter="10">
  		<el-col :span="14">
  			<div style="height:250px;border;">
  				<el-upload class="avatar-uploader" action="/upload" :show-file-list="false"
  				  :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
  				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  				</el-upload>
  			</div>
  		</el-col>
  		<el-col :span="10">
  			<el-form label-position="top" label-width="80px" :model="picInfo">
  			  <el-form-item label="名称">
  			    <el-input v-model="picInfo.name"></el-input>
  			  </el-form-item>
  			  <el-form-item label="描述">
  			    <el-input type="textarea" v-model="picInfo.des"></el-input>
  			  </el-form-item>
  			</el-form>
  		</el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">保 存</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'uploadPicture',
  data () {
    return {
    	dialogVisible:false,
      msg:"uploadPicture",
      imageUrl:"",
      picInfo:{
      	name:"",
      	des:""
      }
    }
  },
  mounted:function(){
  },
  methods: {
  	upload:function(){
      this.dialogVisible = true;
    },
    handleAvatarSuccess:function(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    beforeAvatarUpload:function(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    save:function(){
    	alert("保存成功");
    	this.dialogVisible = false;
    }
  }
}
</script>
<style scoped>
  .avatar-uploader{
  	text-align: center;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #409EFF;
    width: 250px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    border:1px dashed #409EFF;
    background: #eee;
  }
  .avatar {
    width: 250px;
    height: 250px;
    display: block;
  }
</style>