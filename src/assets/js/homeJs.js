import Vue from 'vue'
Vue.component('headnavLeft',{
  template:'<div class="box title"></div>'
})
Vue.component('headnavRight',{
  template:'<div class="box change-sex"><router-link to="/boy"><img src="../../../static/image/boy.jpg" alt="" /></router-link><router-link to="/"><img src="../../../static/image/girl.jpg" alt="" /></div>'
})