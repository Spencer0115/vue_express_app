import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import user from './modules/user'

//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'
const state = () => ({
  darkTheme: false
})

const actions = {
  setDarkTheme: ({commit}, darkTheme)=> {
    commit("setDarkTheme", darkTheme)
  }
}

const mutations = {
  setDarkTheme:(state, darkTheme)=>{
    state.darkTheme = darkTheme
  }
}

const getters = {
  darkTheme: (state) => {
      return state.darkTheme
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    post,
    user
  }
})

