<template>
<div>
    <div v-for="post in posts" :key="post._id">
        <post :post=post />
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import post from './Post'

export default {
    name: 'Posts',
    props:{
        posts:Array
    },
    components : {
        post
    },
    computed: {
        ...mapGetters('user', {
            user: 'user'
        })
    },
    methods: {
    },
    created () {
        this.$store.dispatch('post/fetchPostsByUserId', this.user.userId)
    } 
}

</script>

<style>
.posts{
    min-height: 400px;
}
</style>