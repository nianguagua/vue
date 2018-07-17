import Vue from 'vue'
Vue.component('headnavLeft',{
  template:'<div class="box title"></div>'
})
Vue.component('headnavRight',{
  template:'<div class="box change-sex"><router-link to="/boy"><img class="boy" src="../../../static/image/boy.png" alt="" /></router-link><router-link to="/"><img class="girl" src="../../../static/image/girl.png" alt="" /></router-link></div>'
})