import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beerList: [],
  },
  mutations: {
    GET_BEER_LIST(state, beerList) {
      state.beerList = beerList
    },
  },
  actions: {
    getBeerList({ commit }) {
      EventService.getBeers().then((res) => {
        commit('GET_BEER_LIST', res.data)
      })
    },
  },
  modules: {},
})
