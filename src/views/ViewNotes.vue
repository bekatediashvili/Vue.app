    <template>
       <div>
       <add-edit-notes ref="addEditNoteRef" v-model="newNote" placeholder="Add a new Note ">
        <template #buttons>
            
    <button @click="addNote" :disabled="!newNote" class="button is-link is-light">Add New Note</button>
  
        </template>
       </add-edit-notes>
<progress class="progress is-large is-success" max="100" v-if="!storeNotes.notesLoaded "></progress>
          
        <template v-else>
    <note v-for="note in storeNotes.notes" :key="note.id"
    :note="note"
    />
      </template>  
      <div v-if="!storeNotes.notes.length " class="is-size-4 has-text-centered has-text-grey is-family-monospace ">
        <p>Currently there are not notes</p>
      </div>
    </div>

    </template>


<script setup>
import { ref, registerRuntimeCompiler,onMounted } from 'vue'
import  { useWatchCharachters } from '../use/useWatchChatachters'
import Note from '../components/Notes/Note.vue'
import { useStoreNotes } from '../store/storeNotes.js'
import  AddEditNotes  from '../components/Notes/AddEditNotes.vue'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

      const addNote = () =>{
        storeNotes.addNote(newNote.value)
  
  newNote.value =''
  addEditNoteRef.value.focusEditText()

}
useWatchCharachters(newNote)







</script>