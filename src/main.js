// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/css/header.css'
import VueRouter from 'vue-router'
import router from './router'
import "babel-polyfill"
import https from './https/http.js'
import store from './store/store.js'
import './assets/js/common/homeJs.js'
import App from './App'
import './assets/icon/iconfont.css'
import echarts from 'echarts'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$store = store
Vue.prototype.$echarts = echarts
/*路由拦截*/
router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth){//需要登录
		if(store.state.token){//当前是否已登录
			next();
		}else{
			next({
				path:'/login',
				query:{redirect: to.fullPath}
			})
		}
	}else{
		if(to.meta.requireCode){//需要邀请码验证
			if(store.state.code === ""){
				next({
					path:'/alarm',
					query:{redirect: to.fullPath}
				})
			}else{
				next();
			}
			
		}else{
			next();
		}
	}
})
if (window.sessionStorage.getItem('token')) {
    store.commit('login', window.sessionStorage.getItem('user'))
}
if (window.sessionStorage.getItem('code')) {
    store.commit('freshCode', window.sessionStorage.getItem('code'))
}
/*全局设置ajax请求头*/
/*
axios.defaults.headers = {
    "Content-Type":"application/x-www-form-urlencoded"
}
axios.defaults.transformRequest = [function (data) {
    var newData = "";
    for(var k in data){
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k])+'&'
    }
    return newData
}]
*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

