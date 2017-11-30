import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Share from '@/views/Share'
import Self from '@/views/Self'
import Describute from '@/views/Describute'
import Login from '@/views/Login'
import Insure from '@/views/Insure'
import store from '../store'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
    },
    {
      path: '/self',
      name: 'Self',
      component: Self
    },
    {
      path: '/describute/:id',
      name: 'Describute',
      component: Describute
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/insure',
      name: 'Insure',
      component: Insure
    }
  ]
})
router.beforeEach(function (to, from, next) {
  // console.log(to)
  store.commit('updateLoadingStatus', {isLoading: true})
  setTimeout(() => {
    next()
  }, 500)
})
router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})
export default router
