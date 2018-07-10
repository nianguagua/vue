import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Second from '@/components/Second'
import Third from '@/components/Third'
import Fourth from '@/components/Fourth'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/second',
      name: 'Second',
      component: Second
    },
    {
      path: '/third',
      name: 'Third',
      component: Third
    },
    {
      path: '/fourth',
      name: 'Fourth',
      component: Fourth
    }
  ],
  mode:'history'
})
