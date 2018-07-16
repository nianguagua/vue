import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/girlComponents/Home'
import First from '@/views/girlComponents/First'
import Second from '@/views/girlComponents/Second'
import Third from '@/views/girlComponents/Third'
import Fourth from '@/views/girlComponents/Fourth'

import BoyHome from '@/views/boyComponents/BoyHome'
import BoyFirst from '@/views/boyComponents/BoyFirst'
import BoySecond from '@/views/boyComponents/BoySecond'
import BoyThird from '@/views/boyComponents/BoyThird'

import AdminHome from '@/views/adminComponents/AdminHome'

import Login from '@/components/Login'
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/first',
      name: 'First',
      component: First
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
    },
    {
      path: '/boy',
      name: 'BoyHome',
      component: BoyHome
    },
    {
      path: '/boyfirst',
      name: 'BoyFirst',
      component: BoyFirst
    },
    {
      path: '/boysecond',
      name: 'BoySecond',
      component: BoySecond
    },
    {
      path: '/boythird',
      name: 'BoyThird',
      component: BoyThird
    },
    {
      path: '/admin',
      name: 'AdminHome',
      meta:{
        requireAuth: true
      },
      component: AdminHome
    },{
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
  // ,
  // mode:'history'
  // 页面刷新时，重新赋值token
  
})
