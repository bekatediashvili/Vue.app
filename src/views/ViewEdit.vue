<template>
<div class="edit-note">
  <add-edit-notes ref="addEditNoteRef" label="Please edit your Notes " v-model="noteContent" bgColor="link" placeHolder="Edit Note">
        <template #buttons>
               <button  class="button is-link is-light mr-3" @click="$router.push('/')">
          Cancel
     </button>
    <button  class="button is-link  has-background-link" :disabled="!noteContent" @click="handleSaveClicked">Save  Note</button>

  
  
        </template>
        
       </add-edit-notes>
</div>
   
</template>

<script setup>
import  AddEditNotes from '../components/Notes/AddEditNotes.vue'
import { ref } from 'vue'
import {useStoreNotes} from '../store/storeNotes'
import { useRoute,useRouter} from 'vue-router'


const route = useRoute()
const router = useRouter()

const noteContent = ref('')

const handleSaveClicked = ()=>{
 storeNotes.updateNote(route.params.id, noteContent.value)
 router.push('/')
}

const storeNotes = useStoreNotes()

noteContent.value = storeNotes.getNoteContent(route.params.id)


</script>