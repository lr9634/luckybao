// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import './http/axios'
import store from './store'
import VueBetterScroll from 'vue2-better-scroll'

Vue.use(VueBetterScroll)
Vue.component('VueBetterScroll')

import { AjaxPlugin } from 'vux'
// weui.alert('111')

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = ''
let instance = AjaxPlugin.$http.create({
  transformRequest: [function (data) {
    console.log(data)
    let urlData = ''
    for (let key in data) {
      urlData += key + '=' + JSON.stringify(data[key]) + '&'
    }
    urlData = urlData.slice(0, -1)
    console.log(urlData)
    return urlData
  }]
})
AjaxPlugin.$http.interceptors.request.use(function (response) {
  store.commit('updateLoadingStatus', {isLoading: true})
  return Promise.resolve(response)
}, function ({response}) {
  return Promise.reject(response)
})
// 添加一个响应拦截器
AjaxPlugin.$http.interceptors.response.use(function (response) {
  store.commit('updateLoadingStatus', {isLoading: false})
  return Promise.resolve(response)
}, function ({response}) {
  console.log('请求后错误')
  if (response.status === 403) {
    vm.$router.replace('/login')
  }
  // Do something with response error
  return Promise.reject(response)
})

Vue.prototype.$http = instance
vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
export default vm
