import Vue from 'vue'
Vue.component('headnavLeft',{
  template:'<div class="box title">title</div>'
})
Vue.component('headnavRight',{
  template:'<div class="box change-sex"><router-link to="/boy">Boy</router-link><router-link to="/">Girl</router-link></div>'
})