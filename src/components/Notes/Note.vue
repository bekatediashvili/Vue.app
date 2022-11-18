<template>
       <div  class="card mb-4">
   
    <div class="card-content">
        <div class="content ">
      {{ note.content }}
      <div class=" columns  has-text-right has-text-grey-light">
       <small class="column has-text-left mt-2" > {{formatted}}</small>
         <small class=" column has-text-right"> {{ characterLength }} </small>
    
    </div>
    </div>
    </div>
    <footer class="card-footer">
    
        <router-link :to="`/editNote/${note.id}`" class="card-footer-item">Edit</router-link>
        <a href="#" class="card-footer-item" @click.prevent="modal.deleteNote = true">Delete</a>
    </footer>
    <modal-delete-note v-if="modal.deleteNote" v-model="modal.deleteNote" :noteId="note.id"></modal-delete-note>
    </div>
   
        
    </template>
        
   
<script setup>
import { computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from '../Notes/ModalDeleteNote.vue'
import { useStoreNotes } from '@/store/storeNotes.js'



const storeNotes = useStoreNotes()
const formatted = computed(()=>{
    let date = new Date(parseInt(props.note.date))
    let formatte = useDateFormat(date, 'YYYY-MM-DD HH:mm')
    return formatte.value
})

const characterLength = computed(()=>{
    console.log(props.note)
    let lenght = props.note.content.length
    let description =lenght > 1 ?"Characters" : "Character"
    return `${ lenght} ${description} `
})
const props = defineProps({
    note:{
        type: Object,
        required: true,
    }
})


/*
modals
*/
const modal = reactive({
    deleteNote: false
})







</script>