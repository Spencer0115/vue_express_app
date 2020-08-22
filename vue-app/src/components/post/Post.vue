<template>
    <div class="media rounded p-2 mt-2 mb-4 shadow">
        <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
        <p class="media-body pb-3 mb-0 small lh-125 border-gray">
            <strong class="d-block text-gray-dark">@username{{post.title}} <small class="d-block">{{post.createdAt}}</small></strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
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