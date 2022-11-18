<template>
   <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2 ">

  <div class="navbar-brand">
    <div class="navbar-item is-size-4 is-family-monospace">
     NoteBalls
    </div>

    <a role="button" @click.prevent="showMobileNav = !showMobileNav"
     class="navbar-burger"
      :class="{'is-active' : showMobileNav}"
       aria-label="menu" 
       aria-expanded="false" 
       data-target="navbarBasicExample"
       ref="navbarBurgerRef">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" ref="navBarMenuRef" :class="{'is-active' : showMobileNav}" >
   
  </div>
  <div class="navbar-start">
    <button class="button is-small is-info mt-3" 
    v-if="storeAuthent.user.id"
    @click="logOut"
     >Log Out {{storeAuthent.user.email}}</button>
  </div>
    <div class="navbar-end">
       <router-link @click="showMobileNav =false" to="/" class="navbar-item "
       active-class="is-active">
        Notes
      </router-link>

      <router-link @click="showMobileNav = false"
       to="/stats" 
       class="navbar-item"
       active-class="is-active" >
        Stats
      </router-link>
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref} from 'vue'
import { onClickOutside } from '@vueuse/core'
import {useStoreAuth} from '@/store/storeAuth.js'

const storeAuthent= useStoreAuth()
const showMobileNav = ref(false)

const navBarMenuRef =ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navBarMenuRef, ()=>{ showMobileNav.value = false},{
  ignore:[navbarBurgerRef]
})

const logOut = ()=>{
  showMobileNav.value = false
  storeAuthent.logOutUser()
}
</script>


<style>
@media (max-width:1023px){
  .navbar-menu{
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
