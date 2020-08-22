const mongoose = require("mongoose")
const Post = require("./models/post")

mongoose.connect("mongodb://localhost/spencer_database", {useNewUrlParser: true, useUnifiedTopology: true} )

Post.create({title:"This is my first post", body:"This is the post body"}, (error, post)=>{
    console.log(error, post)
})