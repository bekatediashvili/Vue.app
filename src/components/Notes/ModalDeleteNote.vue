<template>
        <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card"
    ref="modalCard">
        <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close"  @click="closeModel"></button>
        </header>
        <section class="modal-card-body">
        Are you sure you want to Delete the note ?
   
        
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModel">Cancel</button>
        <button class="button is-danger" @click="store.deleteNote(noteId)" >Delete</button>
        </footer>
    </div>
    </div>
</template>

   

<script setup>
import { ref } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core'
import {useStoreNotes} from '@/store/storeNotes.js'
import { onClickOutside } from '@vueuse/core'
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId:{
        type:String,
        required: true
    }
})
const store = useStoreNotes()
const emit= defineEmits(['update:modelValue'])

const closeModel = ()=>{
   emit('update:modelValue',false)
}
const modalCard = ref(null)

onClickOutside(modalCard, closeModel


)
/*
keyboard control
*/
const handleKeyboard = e =>{
   
if (e.key === 'Escape') closeModel()

}
onMounted(()=>{
   document.addEventListener('keyup',handleKeyboard)
})
onUnmounted(()=>{
    document.removeEventListener('keyup',handleKeyboard)
})


</script>