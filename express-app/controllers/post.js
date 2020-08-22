const postService = require("../models/post")
const userService = require("../models/user")

const Post = module.exports = {}
Post.addPost = async (req, res)=>{
    let user = await userService.findById(req.session.userId)
    console.log(req.session)
    let post = req.body
    if(user !== null){
        post.author = user
    }
    res.json(await postService.create(post))
}

//geting all posts
Post.getAllPostsByUserId = async (userId) => {
    return await postService.find({})
}

//get by id
Post.getPostById = async (postId) => {
    return await postService.find({_id:postId})
}


