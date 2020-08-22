<template>
  <div id="app" :class="darkAppClass">
    <NavBar :class="darkThemeNavClass"/>
    <router-view :class="darkThemeClass"></router-view>
    <Footer :class="darkAppClass"/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  computed:{
    ...mapGetters({darkTheme:"darkTheme"}),
    darkThemeClass: function () {
        return {
          "bg-dark": this.darkTheme,
          "text-light": this.darkTheme
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
          "bg-dark ": this.darkTheme
          }
      }
  },
  methods: {
      },
  created() {
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}

</style>
