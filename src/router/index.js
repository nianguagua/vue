import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/girlComponents/Home'
import First from '@/components/girlComponents/First'
import Second from '@/components/girlComponents/Second'
import Third from '@/components/girlComponents/Third'
import Fourth from '@/components/girlComponents/Fourth'

import BoyHome from '@/components/boyComponents/BoyHome'
import BoyFirst from '@/components/boyComponents/BoyFirst'
import BoySecond from '@/components/boyComponents/BoySecond'
import BoyThird from '@/components/boyComponents/BoyThird'

import AdminHome from '@/components/adminComponents/AdminHome'

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
