import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '../services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beerList: [],
    favoriteBeers: [],
  },
  mutations: {
    GET_BEER_LIST(state, beerList) {
      state.beerList = beerList
    },
    FAVORITE_BEER(state, beer) {
      state.favoriteBeers.push(beer)
    },
  },
  actions: {
    getBeerList({ commit }, searchBeer) {
      EventService.getBeers(searchBeer).then((res) => {
        commit('GET_BEER_LIST', res.data)
      })
    },
    favoriteBeer({ commit }, beer) {
      commit('FAVORITE_BEER', beer)
    },
  },
  modules: {},
})
