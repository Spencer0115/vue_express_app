<template>
    <Editor @publishPost="addPost" />
</template>

<script>
import { mapGetters } from 'vuex'
import Editor from "./Editor"
export default {
    name : 'NewPost',
    components:{
        Editor
    },
    data :() => {
        return {
            post:{}
        }
    },
    computed:{
        ...mapGetters("user", {user:"user"})
    },
    methods:{
        addPost(post) {
            post.userId = this.user._id
            if(!this.user._id){
                this.$router.push("/login")
            }else {
                if(post.title.trim().length === 0){
                    let msg = {title:"Failed to post", body:"Post title can't be empty.", class:"warning"}
                    this.$store.dispatch("addNewNotification",msg)
                    return false
                } else if(post.body.trim().length === 0){
                    let msg = {title:"Failed to post", body:"Post content can't be empty.", class:"warning"}
                    this.$store.dispatch("addNewNotification",msg)
                    return false                   
                }
                let msg = {title:"Success", body:"You added a new post.", class:"success"}
                this.$store.dispatch("post/addPost", post)
                this.$store.dispatch("addNewNotification",msg)
            }
        },
    }
}
</script>

<style lang="stylus">

</style>