import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentication: false,
  },
  mutations: {
    SET_AUTHENTICATION: (state, payload) => (state.authentication = payload)
  },
  actions: {
  },
  modules: {
  }
})
