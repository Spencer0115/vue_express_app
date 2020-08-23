import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/post'
import user from './modules/user'

//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)
//const debug = process.env.NODE_ENV !== 'production'
const state = () => ({
  darkTheme: false,
  msg:{
    title:"",
    body:"hello",
    class:"success",
    show:false
  }
})

const actions = {
  setDarkTheme: ({commit}, darkTheme)=> {
    commit("setDarkTheme", darkTheme)
  },
  clearNotifications:({commit})=> {
    commit("clearNotifications")
  },
  addNewNotification:({commit}, msg)=> {
    commit("addNewNotification",msg)
    setTimeout(() => {
      commit("clearNotifications")
    }, 3000);
  }
}

const mutations = {
  setDarkTheme:(state, darkTheme)=>{
    state.darkTheme = darkTheme
  },
  clearNotifications:(state)=>{
    state.msg = {
                  title:"",
                  body:"",
                  class:"success",
                  show:false
                }
  },
  addNewNotification:(state, msg)=>{
    state.msg = {
                  title:msg.title,
                  body:msg.body,
                  class:msg.class,
                  show:true
                }
  }
}

const getters = {
  darkTheme: (state) => {
      return state.darkTheme
  },
  msg:(state) => {
    return state.msg
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

