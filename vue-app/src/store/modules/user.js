import userApi from '../../api/user'

// initial state
// shape: [{ title, body }]
const state = () => ({
  user: {},
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
        commit("setSignUpStatus", "SUCCESS")
        setTimeout(() => {
          commit("setSignUpStatus", "")
          vm.$router.push("/login")
        }, 3000);
      }).catch(()=>{
        commit("updateUser", null)
        commit("setSignUpStatus", "ERROR")
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