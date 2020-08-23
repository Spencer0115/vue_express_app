import userApi from '../../api/user'

// initial state
// shape: [{ title, body }]
const state = () => ({
  user: {_id:null},
  signUpStatus:""
})

// getters
const getters = {
  user: (state) => {
    return state.user
  },
  signUpStatus:(state)=>{
    return state.signUpStatus
  }
}

// actions
const actions = {
  loginCheck({commit}){
    userApi.loginCheck().then(newUser =>{
      commit("updateUser", newUser)
    })
  },
  login({commit}, {user,vm}){
    userApi.login(user).then(newUser =>{
      commit("updateUser", newUser)
      vm.$router.push("/home")
  }) 
  },
  logout({commit},{user,vm}){
    userApi.logout(user).then(() =>{
      commit("updateUser", {})
      vm.$router.push("/home")
  })
  },
  addUser({commit},{user,vm}){
      userApi.addUser(user).then(user =>{
        commit("updateUser", user)
        vm.$store.dispatch("addNewNotification", {title:"Success", body:"Sign up success.", class:"success"})
        setTimeout(() => {
          vm.$router.push("/login")
        }, 3000);
      }).catch(()=>{
        commit("updateUser", {})
        vm.$store.dispatch("addNewNotification", {title:"Error", body:"Sign up failed.", class:"danger"})
      })
  },
  getUserById(commit){
      userApi.getUser("22",(user)=>{
          commit("updateUser", user)
      }) 
  },
  updateUser(commit, user){
      userApi.updateUser(user, ()=>{
          commit("updateUser", user)
      })  
  }
}

// mutations
const mutations = {
  updateUser (state, user) {
    state.user = user
  },
  setSignUpStatus (state, signUpStatus) {
    state.signUpStatus = signUpStatus
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}