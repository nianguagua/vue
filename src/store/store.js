import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		user:"",
		token:false,
		code:""
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
		freshCode(state,code){
			state.code = code;
			sessionStorage.code = code;
		}
	}
})