<template>
<div class="posts">
<div class="container mb-4">  
    <div class="form-inline mt-3">
        <router-link to="/newPost" class="btn btn-outline-primary rounded-pill mr-2">
        <font-awesome-icon icon="pen" class="mr-2"/><span class="font-weight-bold ml-auto">Compose</span>  
        </router-link>
        <div class="input-group col-sm-12 col-md-5 col-lg-3 ml-auto">
            <input type="text" class="form-control" placeholder="Search for posts" >
                <div class="input-group-append">
                <div class="btn btn-primary" id="searchBtn">
                    <font-awesome-icon icon="search" />
                </div>
            </div>
        </div>
    </div>
    <h6 class="h6 mt-3 mb-2">Recent Update</h6>   
    <div class="" v-for="post in posts" :key="post._id">
        <post :post=post />
    </div>
    <h6 class="h6 mt-3 mb-2">Popular</h6>   
    <div class="" v-for="post in posts" :key="post._id + post.title">
        <post :post=post />
    </div>    
</div>  
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import post from './Post'

export default {
    name: 'Posts',
    components : {
        post
    },
    props: {},
    computed: {
        ...mapGetters('post', {
            posts: 'posts'
        }),
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