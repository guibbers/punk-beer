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
    UNFAVORITE_BEER(state, index) {
      state.favoriteBeers.splice(index, 1)
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
    unfavoriteBeer({ commit, getters }, id) {
      commit('UNFAVORITE_BEER', getters.getBeerIndex(id))
    },
  },

  modules: {},

  getters: {
    isFavorite: (state) => (id) => {
      let favorited = false
      state.favoriteBeers.forEach((beer) => {
        if (id === beer.id) favorited = true
      })
      return favorited
    },

    getBeerIndex: (state) => (id) => {
      state.favoriteBeers.forEach((beer) => {
        if (beer.id === id) {
          return state.favoriteBeers.indexOf(beer)
        }
      })
    },
  },
})
