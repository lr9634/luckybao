import Vue from 'vue'
import axios from 'axios'
import vm from '../main'
var instance = axios.create({
  headers: {'X-Custom-Header': 'foobar'}
})
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  // console.log('请求后')
  return response
}, function ({response}) {
  if (response.status === 403) {
    vm.$router.replace('/login')
  } else {
    return Promise.reject(response)
  }
})
Vue.prototype.$https = instance
export default instance
