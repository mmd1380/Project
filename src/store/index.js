import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentication: false,
    layout: "Auth"
  },
  mutations: {
    SET_AUTHENTICATION: (state, payload) => (state.authentication = payload),
    SET_LAYOUT: (state, payload) => (state.layout = payload)
  },
  actions: {
  },
  modules: {
  }
})
