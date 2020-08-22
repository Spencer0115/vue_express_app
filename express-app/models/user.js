const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema
const UserSchema = new Schema({
    username:String,
    firstname:{
        type:String,
        required:true,
        default:""
    },
    lastname:{
        type:String,
        required:true,
        default:""
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        index: {
            unique: true,
            partialFilterExpression: { email: { $type: 'string' } },
          },
        default:null
    },
    isActive:{
        type:Number,
        default:1
    },
    lastLogin:{
        type:Date,
        default: new Date()
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

UserSchema.pre("save", function (next){
    bcrypt.hash(this.password, 10, (error, hash)=>{
        this.password = hash
        next()
    }) 
})
const User = mongoose.model("User", UserSchema)
module.exports = User