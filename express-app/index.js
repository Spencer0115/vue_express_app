const express = require("express") 
const expressSession = require("express-session") 

const cors = require('cors')
const bodyParser = require("body-parser")

const path = require("path")
const ejs = require("ejs")

const mongoose = require("mongoose")//useing mongodb
mongoose.connect("mongodb://localhost/spencer_database", {useNewUrlParser: true, useUnifiedTopology: true} )
mongoose.set('useCreateIndex', true)

const postController = require("./controllers/post")
const userController = require("./controllers/user")

const app = express() //initialize express as an app
app.set("view engine", "ejs")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(expressSession({
    proxy: true,
    resave: true,
    saveUninitialized: true,
    secret:"unclerogerlovesrice"
}))

app.post("/user/addUser", userController.addUser)
app.post("/user/login", userController.getUserWithPassword)
app.post("/user/logout", userController.logout)

app.get("/post/allPosts", async(req, res) => {
    const allPosts = await postController.getAllPostsByUserId(req.query.userId)
    res.json(allPosts)
})

app.post("/post/addPost", postController.addPost)
app.post("/post/:postId", async (req, res) => {
    const post = await postController.getPostById(req.params.postId)
    res.json(post)
})

app.listen(3000, () => {
    console.log("express app is listening on 3000")
})

