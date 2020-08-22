const userService = require("../models/user")
const User = module.exports = {}
const bcrypt = require("bcrypt")

User.addUser = async (req, res) => {
    const existingUser = await userService.find({$or:[{username:req.body.username},{email:req.body.email}]})
    if(existingUser.length > 0){
        res.json({status:false, error:"Duplicated username or email"})
    } else {
        userService.create(req.body)
        .then(
        (userReturn)=>{
            res.json({status:true, data:{email:userReturn.email}})   
        }).catch((e)=>{
            res.json({status:false, error:e})
        })
    }
}

User.checkUniqueUser = (req, res) => {
    if(userService.find({email:req.body.email}) != null){
        res.json({status:false, error:"Duplicated email"})
    } else if(userService.find({username:req.body.username}) != null){
        res.json({status:false, error:"Duplicated username"})
    } else {
        res.json({status:true})
    }
}

User.logout = async (req, res) => {
    req.session.userId = null
    res.sendStatus(200)
}

User.getUserById = async (req, res) => {
    res.json(await userService.find({_id:req.params.userId}))
}

User.getUserWithPassword = async (req, res) => {
    let user = req.body
    let newUser = await userService.findOne({$or:[{email:user.email},{username:user.username}]})
    if(newUser !== null){
        bcrypt.compare(user.password, newUser.password, (error, same)=>{
            if(same){
                req.session.userId = newUser._id
                newUser.password=""
                newUser.loggedIn = true
                res.json(newUser)
            }else{
                res.sendStatus(401)
            }
        })
    }else{
        res.sendStatus(401)
    }
    

}