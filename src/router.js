import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Progress from '@/views/Progress'
import Recruitment from '@/views/Recruitment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    },
    {
      path: '/recrutement',
      name: 'recrutement',
      component: Recruitment
    }
  ]
})
