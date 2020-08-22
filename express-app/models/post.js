const mongoose = require("mongoose")

const Schema = mongoose.Schema
const PostSchema = new Schema({
    title:String,
    body:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    likedBy:{
        type: Number,
        default:0
    },
    viewedBy:{
        type: Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    modifiedAt:{
        type:Date,
        default: new Date()
    }
})

const Post = mongoose.model("Post", PostSchema)
module.exports = Post