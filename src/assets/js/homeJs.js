import Vue from 'vue'
import Bus from './eventBus'

Vue.component('headnavLeft',{
  template:'<div class="box title"></div>'
})
Vue.component('headnavCenter',{
  props:['activeIndex'],
  methods:{
  	checkCode:function(){
  		if(this.$store.state.code === ''){
  			//this.$store.dialog = true;
  			//alert("需要邀请码");
  			Bus.$emit("transCode",true);
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
Vue.component('boyHeadNavCenter',{
  props:['activeIndex'],
  template:'<el-menu :default-active="activeIndex" class="top-nav" mode="horizontal">'
                +'<el-menu-item index="home">'
                  +'<router-link to="/boy">Home</router-link>'
                +'</el-menu-item>'
                +'<el-menu-item index="first">'
                  +'<router-link to="/boyFirst">A</router-link>'
                +'</el-menu-item>'
                +'<el-menu-item index="second">'
                  +'<router-link to="/boySecond">B</router-link>'
                +'</el-menu-item>'
                +'<el-menu-item index="third">'
                   +'<router-link to="/boyThird">C</router-link>'
                +'</el-menu-item>'
              +'</el-menu>'
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