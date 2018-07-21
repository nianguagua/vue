import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		user:"",
		token:false,
		code:"",
		dialog: false//邀请码验证弹出框  用于组件之间的通信
	},
	mutations:{
		login(state,user){
			state.token = true;
			state.user = user;
			sessionStorage.token = true;
			sessionStorage.user = user;
		},
		logout(state,user){
			state.token = false
			state.user = "";
			sessionStorage.removeItem('token');
			sessionStorage.removeItem('user');
		},
		showDialog(state,user){
			state.dialog = user;
		}
	}
})