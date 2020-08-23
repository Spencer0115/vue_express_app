<template>
<div class="container posts rounded p-2">  
    <div class="form-inline mt-2">
        <router-link to="/newPost" class="btn btn-outline-primary rounded-pill mr-2 ">
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
    <Posts :posts=posts />
</div>
</template>

<script>
import Posts from './post/Posts.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components : {
    Posts
  },
  computed: {
    ...mapGetters("user",{user:"user"}),
    ...mapGetters("post",{posts:"posts"})
  },
  data: function () {
    return {
    }
  },
  created () {
  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
