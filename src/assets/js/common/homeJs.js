import Vue from 'vue'
import Bus from './eventBus'

Vue.component('headnavLeft',{
  template:'<div class="box title"></div>'
})
Vue.component('headnavGirlRight',{
  template:'<div class="box change-sex"><router-link to="/boy"><img class="boy" src="../../../static/image/boy.png" alt="" /></router-link><router-link to="/"><img class="girl active" src="../../../static/image/girl.png" alt="" /></router-link></div>'
})
Vue.component('headnavBoyRight',{
  template:'<div class="box change-sex"><router-link to="/boy"><img class="boy active" src="../../../static/image/boy.png" alt="" /></router-link><router-link to="/"><img class="girl" src="../../../static/image/girl.png" alt="" /></router-link></div>'
})
Vue.component('codeDialog',{
	data:function(){
		return {
			openDialog:false,
			code:""
		}
	},
	mounted:function(){
		var _self = this;
		Bus.$on("transCode",function(msg){
			_self.openDialog = msg;
		})
	},
	methods:{
		submiteCode:function(){
			var getCode = this.code;
      if(getCode == ""){
        alert("code不能为空");
        return;
      }
			this.$store.commit('freshCode',getCode);
			// alert("提交CODE");
			this.openDialog = false;
			this.$router.push({path:"/fourth"});
		}
	},
	template:'<el-dialog title="提示" :visible.sync="openDialog" width="30%">'
				+'<span><el-input placeholder="请输入邀请码" v-model="code"></el-input></span>'
				+'<span slot="footer" class="dialog-footer">'
					+'<el-button @click="openDialog = false">取消</el-button>'
					+'<el-button @click="submiteCode">确定</el-button>'
				+'</span>'
			+'</el-dialog>'
})