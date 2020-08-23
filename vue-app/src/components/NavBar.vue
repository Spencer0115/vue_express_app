<template>
    <header  class="navbar navbar-expand-md navbar-collapse d-flex-column d-flex-row offcanvas-collapse shadow font-weight-bold">
    <span class="navbar-brand font-weight-bold text-info pr-3">
      SPENCER
    </span>
    <ul class="navbar-nav navbar-nav-lg bd-navbar-nav flex-row">
        <li class="nav-item"><router-link class="nav-link" to="/home">Home</router-link></li>
        <div v-if="user && user._id !== undefined">
            <li class="nav-item nav-selected"><router-link class="nav-link" to="/me">Me</router-link></li>
        </div>
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
                <span class="nav-link btn btn-link font-weight-bold">{{user.username}}</span>        
            </li>    
            <li class="nav-item">
                <span class="nav-link btn btn-link font-weight-bold text-danger" @click="logout">Logout</span>        
            </li>                     
        </div>
        <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>
        
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
        ...mapGetters({darkTheme:"darkTheme"})

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
