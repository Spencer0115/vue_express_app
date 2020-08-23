<template>
    <div class="container shadow rounded font-weight-bold p-4 col-sm-10 col-md-8 col-lg-6 ml-auto mr-auto m-4">
      <form @submit.prevent="submit">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="firstName">First name</label>
            <input 
              type="text" 
              :input="$v.newUser.firstname.$touch"
              v-model="$v.newUser.firstname.$model" 
              class="form-control"
              :class="{'border-danger border':$v.newUser.firstname.$invalid && $v.newUser.firstname.$dirty}"
              id="firstName" 
              placeholder="" 
              value=""
            >
            <div v-if="$v.newUser.firstname.$dirty">
              <div class="block"><small class="text-danger" v-if="!$v.newUser.firstname.required">This field is required</small></div>
            </div>
         </div>
          <div class="col-md-6 mb-3">
            <label for="lastName">Last name</label>
            <input  type="text"
                    :input="$v.newUser.lastname.$touch"
                    v-model="$v.newUser.lastname.$model" 
                    class="form-control" 
                    :class="{'border-danger border':$v.newUser.lastname.$invalid && $v.newUser.lastname.$dirty}"
                    id="lastName" 
                    placeholder="" 
                    value="" 
                    required="required">
            <div v-if="$v.newUser.lastname.$dirty">
                <div class="block"><small class="text-danger" v-if="!$v.newUser.lastname.required">This field is required</small></div>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label for="username">Username</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">@</span>
            </div>
            <input type="text" 
                    v-model="$v.newUser.username.$model" 
                    class="form-control" 
                    :class="{'border-danger border':$v.newUser.username.$invalid && $v.newUser.username.$dirty}"
                    id="username" placeholder="Username" required>
          </div>
          <div v-if="$v.newUser.username.$dirty">
            <div class="block"><small class="text-danger" v-if="!$v.newUser.username.required">This field is required</small></div>
          </div>         
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input  type="email" 
                  v-model="$v.newUser.email.$model" 
                  class="form-control" 
                  id="email" 
                  placeholder="you@example.com">
          <div v-if="$v.newUser.email.$dirty">
          <div class="block"><small class="text-danger block" v-if="!$v.newUser.email.required">Please input a valid email address</small></div>
          <div class="block"><small class="text-danger block" v-if="!$v.newUser.email.email">Please input a valid email address</small></div>
          </div>
        </div>
         <div class="mb-3">
          <label for="password">Password</label>
          <input  type="password"
                  :input="$v.newUser.password.$touch"
                  v-model="$v.newUser.password.$model" class="form-control" id="password">
          <div v-if="$v.newUser.password.$dirty">
            <div class="block"><small class="text-danger block" v-if="!$v.newUser.password.required">This field is required</small></div>
            <div class="block"><small class="text-danger block" v-if="!$v.newUser.password.minLength">Minimum length is 6</small></div>
          </div>  
         </div>         
         <div class="mb-3">
          <label for="password-repeat">Confirm Password <span class="text-muted">(Please repeat you password)</span></label>
          <input  type="password" 
                  :input="$v.newUser.passwordConfirm.$touch"
                  v-model="$v.newUser.passwordConfirm.$model" 
                  class="form-control" id="password-confirm">
          <div v-if="$v.newUser.passwordConfirm.$dirty">
              <div class="block"><small class="text-danger" v-if="!$v.newUser.passwordConfirm.required">This field is required</small></div>
              <div class="block"><small class="text-danger" v-if="$v.newUser.passwordConfirm.$model !== $v.newUser.password.$model">Please input the same password</small></div>
          </div>                
        </div>        
        <hr class="mb-4">
         <button v-if="isSubmitting" class="btn btn-primary btn-block">
          <font-awesome-icon icon="spinner" spin /> Please wait...
        </button>
        <button v-if="!isSubmitting" class="btn btn-primary btn-block" type="submit">
          Sign Up
        </button>
      </form>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name : "SignUp",
  data : ()=> {
      return {
        isSubmitting:false,
        newUser:{
          firstname:"",
          lastname:"",
          username:"",
          email:"",
          password:"",
          passwordConfirm:"",
            }
        }
      },

  validations: {
      newUser:{
        firstname: {
          required
        },
        lastname: {
          required
        },
        username:{
          required,
        },
        email:{
          required,
          email,
        },
        password:{
          required,
          minLength:minLength(6)
        },
        passwordConfirm:{
          required
        }
    }
  },
  computed:{
      ...mapGetters("user", {user:"user"})
  },
  methods:{
    submit(){
      this.$v.$touch()//to check if the form
      if (this.$v.$invalid) {
        return false
      } else {
        this.isSubmitting = true
        this.$store.dispatch("user/addUser",{user:this.newUser, vm:this}).then(()=>{
          this.isSubmitting = false
        })
      }
    }
  }
}
</script>