<template>
<form class="mt-5 mb-5 form-signin col-md-5 col-lg-4 ml-auto mr-auto rounded border-0 shadow p-3 m-3" @submit.prevent="login">
    <h1 class="h3 mb-3 font-weight-normal">Welcome</h1>
        <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" v-model="user.email" class="form-control" placeholder="Email address" required="" autofocus="">
        </div>
    <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" id="inputPassword" class="form-control" placeholder="Password" required="">
    </div>
    <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
    </div>
    <button class="btn btn-primary btn-block" type="submit">Login</button>
    <button class="btn btn-info btn-block" type="">Login with Google</button>
    </form>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name:"Login",
    data:()=>{
        return {password:""}
    },
    computed:{
        ...mapGetters("user", {user:"user"}),
    },
    // beforeRouteLeave (to, from, next) {
    // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    // if (answer) {
    //     next()
    // } else {
    //     next(false)
    // }
    // },
    methods:{
        login(){
            this.user.password = this.password
            this.$store.dispatch("user/login", {user:this.user, vm:this})
        }
    }
    
}
</script>