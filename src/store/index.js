import Vue from 'vue'
import Vuex from 'vuex'

import ProductList from './modules/ProductList'
import UserMessage from './modules/UserMessage'
Vue.use(Vuex)
let store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    ProductList,
    UserMessage
  }
})
store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      console.log(payload.isLoading)
      state.isLoading = payload.isLoading
    }
  }
})
export default store
