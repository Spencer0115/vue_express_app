const postService = require("../models/post")
const userService = require("../models/user")

const Post = module.exports = {}
Post.addPost = async (req, res)=>{
    let user = await userService.findById(req.session.userId,{username:1, firstname:1, lastname:1})
    console.log(user)
    let post = req.body
    if(user !== null){
        post.author = user
    }
    res.json(await postService.create(post))
}

//geting all posts
Post.getAllPostsByUserId = async (userId) => {
    const posts = await postService.aggregate([
        {
           $lookup:
              {
                from: "users",
                let: { author: "$author" },
                pipeline: [
                   { $match:
                      { $expr:
                         { $and:
                            [
                              { $eq: [ "$_id",  "$$author" ] },
                            ]
                         }
                      }
                   },
                   { $project: { username: 1, _id: 1, email:1 } }
                ],
                as: "userInfo"
              }
            },
            {
                $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$userInfo", 0 ] }, "$$ROOT" ] } }
            },
            { $project: { userInfo: 0 } }
     ])
    return posts
}

//get by id
Post.getPostById = async (postId) => {
    return await postService.find({_id:postId})
}


