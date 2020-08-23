<template>
<div class="shadow rounded mt-4 p-3">
    <div class="d-flex flex-row">
        <svg class="mr-1 rounded shadow" alt="..." width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <small class="align-self-center font-weight-bold text-info">@{{post.username}}</small>
    </div>   
    <div class="media rounded mt-2 mb-2">
        <p class="media-body mb-0 small">
            <strong class="d-block text-gray-dark">{{post.title}} </strong>
            <small class="d-block text-info font-weight-bold">{{ post.createdAt | moment("dddd, MMMM Do YYYY") }}</small>       
            <span v-html="post.body"></span>
        </p>
   </div>
   <div class="d-flex flex-row">
       <font-awesome-icon icon="heart" color="tomato"/>
   </div>
</div>
</template>

<script>
export default {
    name : "Post",
    props: {
        post : {}
    },
    methods:{
    }
}
</script>

<style lang="css">
.card {
    border-radius:20px;
    border:0px;
}
</style>