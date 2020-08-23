<template>
  <div id="app" :class="darkAppClass" >
    <NavBar :class="darkThemeNavClass"/>
    <Notification :class="darkAppClass"/>
    <div style="overflow:scroll" :style="{'max-height':windowHeight+'px'}">
      <router-view :class="darkAppClass" ></router-view>
      <Footer :class="darkAppClass"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar'
import Notification from './components/Notification'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Notification
  },
  computed:{
    ...mapGetters({darkTheme:"darkTheme"}),
    windowHeight:function(){
      return window.innerHeight - 60
    },
    darkThemeClass: function () {
        return {
          "dark-theme ": this.darkTheme,
        }
      },
      darkThemeNavClass: function () {
        return {
          "navbar-dark": this.darkTheme,
          "navbar-light": !this.darkTheme,
        }
      },
      darkAppClass: function () {
        return {
            "bg-dark": this.darkTheme,
            "text-light":this.darkTheme,
            "dark-theme":this.darkTheme
          }
      }
  },
  methods: {
    },
  created() {
    this.$store.dispatch("user/loginCheck")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
.dark-theme input{
  background-color: #2c3e50;
}
.dark-theme input:focus{
  background: #2c3e50;
  color:white
}
.dark-theme input:active {
  background: #2c3e50;
  color:white
}
</style>
