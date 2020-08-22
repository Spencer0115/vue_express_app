const axios = require("axios")
export default {
    async addPost (post) {
    let newPost =  await axios.post("api/post/addPost", post)
    .then((response)=> {
        return response.data
    }).catch(e=>{
        console.log(e)
    })
    return newPost
    },

    async fetchPostsByUserId(userId){
        let posts = await axios.get("api/post/allPosts?userId="+userId)
        .then(response => {
            return response.data
        }).catch(e =>{
            console.log(e)
        });
        return posts              
    },

    deletePost({userId, postId}){
        axios
        .delete("api/deletePost?userId=" + userId + "&postId=" + postId)
        .then((response)=>{
            console.log(response)
        })
    }
  }