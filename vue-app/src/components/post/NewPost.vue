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