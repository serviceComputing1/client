import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    result: null
  },
  mutations: {
    updateResult (state, result) {
      state.result = result
    }
  },
  actions: {
    updateResult({ state, commit }, info) {
      commit('updateResult', info)
      //commit('updateUserStatus',info.userType)
    }
  },
  getters: {
    getResult: function(state) {
      return state.result
    }
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')



