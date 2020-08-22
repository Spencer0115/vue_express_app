<template>
 <Posts/> 
</template>

<script>
import Posts from './post/Posts.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components : {
    Posts
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters("user",{user:"user"})
  },
  data: function () {
    return {
      theme : 1
    }
  },
  created () {
  } 

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
