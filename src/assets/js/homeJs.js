import Vue from 'vue'

Vue.component('headnavLeft',{
  template:'<div class="box title"></div>'
})
Vue.component('headnavCenter',{
  props:['activeIndex'],
  data:function(){
  	return{
  		// active
  	}
  },
  methods:{
  	checkCode:function(){
  		if(this.$store.state.code === ''){
  			//this.$store.dialog = true;
  			alert("需要邀请码");
  		}else{
  			this.$router.push({path:'/fourth'});
  		}
  		//this.$store.state.code = "123";
  	}
  },
  template:'<el-menu :default-active="activeIndex" class="top-nav" mode="horizontal">'
            +'<el-menu-item index="home">'
              +'<router-link to="/">Home</router-link>'
            +'</el-menu-item>'
            +'<el-menu-item index="first">'
              +'<router-link to="/first">First</router-link>'
            +'</el-menu-item>'
            +'<el-menu-item index="second">'
              +'<router-link to="/second">Second</router-link>'
            +'</el-menu-item>'
            +'<el-menu-item index="third">'
              +'<router-link to="/third">Third</router-link>'
            +'</el-menu-item>'
            +'<el-menu-item index="fourth" v-on:click="checkCode">'
              +'<router-link to="#">Fourth</router-link>'
            +'</el-menu-item>'
          +'</el-menu>'
})
Vue.component('headnavRight',{
  template:'<div class="box change-sex"><router-link to="/boy"><img class="boy" src="../../../static/image/boy.png" alt="" /></router-link><router-link to="/"><img class="girl" src="../../../static/image/girl.png" alt="" /></router-link></div>'
})

Vue.component('codeDialog',{
	data:function(){
		return {
			openDialog:false
		}
	},
	methods:{
		submiteCode:function(){
			alert("提交CODE");
			this.openDialog = false;
		}
	},
	template:'<el-dialog title="提示" :visible.sync="openDialog" width="30%">'
				+'<span>diolog</span>'
				+'<span slot="footer" class="dialog-footer">'
					+'<el-button @click="openDialog = false">取消</el-button>'
					+'<el-button @click="submiteCode">确定</el-button>'
				+'</span>'
			+'</el-dialog>'
})