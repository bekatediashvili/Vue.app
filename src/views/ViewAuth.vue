<template>
<div class="auth">
    <div class="tabs is-centered">
  <ul>
    <li :class="{'is-active' : !register }" ><a @click.prevent="register=false">Log in</a></li>
    <li :class="{'is-active' : register }"><a @click.prevent="register=true">Register</a></li>
  
  </ul>
</div>
        <div class="card auth-form">
        <div class="card-content">
            <div class="title has-text-centered">
             {{title}}
            </div>
            <form @submit.prevent="onSubmit">
        <div class="field">
        <label class="label">Email</label>
        <div class="control">
            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model.trim="credantials.email">
        </div>
        </div>
           <div class="field">
        <label class="label">Password</label>
        <div class="control">
            <input class="input" type="password" placeholder="enter your password" v-model.trim="credantials.password">
        </div>
        </div>
        <div class="field is-grouped is-grouped-right">
  <p class="control">
    <button class="button is-primary">
   {{title}}
    </button>
  </p>
 
</div>
</form>
</div>
</div>
</div>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'
import {useStoreAuth} from '../store/storeAuth.js'

const storeAuthent= useStoreAuth()
const register = ref(false)
const title = computed(()=>{
    return register.value ? 'Register' : 'Log in'
}
)
/*
credantials
*/
const credantials = reactive({
    email: '',
    password: ''

})


const onSubmit = () =>{
if (credantials.email.length == 0 || credantials.password.length == 0){
    return alert('its empy ')
}else {
    if(register.value){
        storeAuthent.registerUser(credantials)
    }else{
        storeAuthent.logInUser(credantials)
    }
}
}
</script>

<style>
.auth-form{
    max-width: 400px;
    margin: 0 auto;
}
</style>
