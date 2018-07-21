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
import https from './https/http.js'
import store from './store/store.js'
import './assets/js/homeJs.js'
import App from './App'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$store = store
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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

