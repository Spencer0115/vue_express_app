import postApi from '../../api/post'

// initial state
// shape: [{ title, body }]
const state = () => ({
  posts: []
})

// getters
const getters = {
  posts: (state) => {
    return state.posts
  }
}

// actions
const actions = {
   fetchPostsByUserId({commit}, userId){
        postApi.fetchPostsByUserId(userId).then(posts => {
            commit("setPosts", posts)
        })
    },

    deletePost ({ commit, state },  {userId, postId}) {
        const savedPosts = [...state.posts]//save old posts in case failed to delete
        postApi.deletePost(
        {userId, postId},
        () => {
            let posts = state.posts
            let index = posts.findIndex(p => p.id == postId)
            posts = posts.splice(index, 1)
            commit("setPosts", posts)
        },
        () => {//rollback
            commit('setPosts', savedPosts)
        })
    },

    addPost ({ commit }, post) {
        postApi.addPost(post).then((newPost)=>{
            commit("addPost", newPost)
        })
    }
}

// mutations
const mutations = {
  addPost (state, post) {
    state.posts.push(post)
  },

  setPosts (state, posts) {
    state.posts = posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}