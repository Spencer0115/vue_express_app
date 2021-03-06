import Vue from 'vue'
import App from './App.vue'
import store from './store'
import userApi from './api/user'
import VueMoment from 'vue-moment'
Vue.use(VueMoment);

import Vuelidate from 'vuelidate'//form validation 
Vue.use(Vuelidate)

import VueRouter from 'vue-router' //router
Vue.use(VueRouter)

import Home from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import NewPost from '@/components/post/NewPost.vue'
import SignUp from '@/components/SignUp.vue'
import Me from '@/components/user/Me.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/home', component: Home},
  { path: '/login', name:"login", component: Login},
  { path: '/sign-up', name:"signUp", component: SignUp},
  { path: '/newPost', name:"newPost", component: NewPost},
  { path: '/me', name:"me", component: Me }

]

const router = new VueRouter({
  routes
})

router.beforeResolve(async (to, from, next)=>{
  userApi.loginCheck().then(function (user){
    if(!user._id){
      if(to.name === "newPost" || to.name === "me"){
        next({name:"login"})
      } else {
        next()
      }
    }else if(to.name === "login" || to.name==="signUp"){
      next(false)
    }else {
      next()
    }
  })
})

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSpinner, faSun, faMoon, 
        faHeart, faEye, faSearch, faPen, faCode, 
        faBold, faItalic, faUnderline, faStrikethrough, 
        faQuoteLeft, faUndo, faRedo,
        faParagraph, faListUl, faListOl} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faSpinner,faHeart,faSun,faUserSecret,faMoon,faEye, faSearch,faPen, faCode,
  faBold, faItalic, faUnderline, faStrikethrough, faQuoteLeft, faUndo, faRedo,
  faParagraph, faListUl, faListOl)

//Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
