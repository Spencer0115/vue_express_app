<template>
    <Editor/>
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
        addPost() {
            this.post.userId = this.user.userId
            this.$store.dispatch("post/addPost", this.post)
        },
    }
}
</script>

<style lang="stylus">

</style>