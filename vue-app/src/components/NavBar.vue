<template>
    <header  class="navbar navbar-expand-md navbar-collapse d-flex-column d-flex-row offcanvas-collapse shadow font-weight-bold">
    <span class="navbar-brand font-weight-bold text-info pr-3">
      WordsEasy
    </span>
    <ul class="navbar-nav navbar-nav-lg bd-navbar-nav flex-row">
        <li class="nav-item"><router-link class="nav-link" :class="{active:currentRouteName === 'home'}" to="/home">Home</router-link></li>
        <div v-if="user && user._id !== undefined">
            <li class="nav-item"><router-link class="nav-link" :class="{active:currentRouteName === 'me'}" to="/me">Me</router-link></li>
        </div>
        <li class="nav-item"><router-link class="nav-link" :class="{active:currentRouteName === 'about'}" to="/about">About</router-link></li>
     </ul> 
    <ul class="navbar-nav navbar-nav-lg ml-auto p-2">
        <li class="nav-item">
            <a class="nav-link btn btn-link" v-if="darkTheme"  @click="darkThemeSwitch" title="Change to light mode" > 
            <font-awesome-icon icon="sun" size="lg" />
            </a>
            <a class="nav-link btn btn-link" v-if="!darkTheme" @click="darkThemeSwitch" title="Change to dark mode"> 
            <font-awesome-icon icon="moon" size="lg" />
            </a>
        </li>
        <div v-if="user && user._id === undefined">
            <li class="nav-item font-weight-bold"><router-link class="nav-link" to="/login">Login</router-link></li>
            <li class="nav-item font-weight-bold"><router-link class="nav-link" to="/sign-up">Sign Up</router-link></li>
        </div>
        <div v-else>
            <li class="nav-item">
                <div class="dropdown">
                    <a class="nav-link btn btn-link font-weight-bold dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span >{{user.username}}</span>        
                    </a>
                <div class="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item btn btn-link font-weight-bold p-2" href="#">Profile</a>                   
                    <a class="dropdown-item btn btn-link text-danger font-weight-bold p-2" @click="logout">Logout</a>
                </div>
            </div>
            </li>                  
        </div>
        <!-- <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button> -->   
    </ul>
    </header>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name : "NavBar",
    components:{
    },
    data: function(){
        return {
        }
    },
    computed:{
        ...mapGetters("user",{user:"user"}),
        ...mapGetters({darkTheme:"darkTheme"}),
        currentRouteName() {
            return this.$route.name;
        }
    },
    methods: {
        darkThemeSwitch(){
            this.$store.dispatch("setDarkTheme",!this.darkTheme)
        },
        logout(){
            this.$store.dispatch("user/logout", {user:this.user, vm:this})
        }
    }
}
</script>
<style>
.active {
  color:cyan
}
</style>
