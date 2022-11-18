<template>
<div>
    <NavBar/>
    <div class="container is-max-desktop px-2 py-4">

    <RouterView/>
    </div>
    </div>
</template>


<script setup>

import { onMounted } from '@vue/runtime-core'
import NavBar from './components/Layout/NavBar.vue'
import { useStoreAuth } from './store/storeAuth.js'

const storeAuth = useStoreAuth()

onMounted(()=>{
    storeAuth.init()
})
</script>

<style >
@import 'bulma\css\bulma.min.css'

</style>