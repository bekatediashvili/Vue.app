import { defineStore } from 'pinia'
import { collection, onSnapshot,setDoc,doc,deleteDoc ,updateDoc,addDoc ,query, orderBy, limit } from 'firebase/firestore';
import { db } from '../FireBase/FireBase'
import { useStoreAuth } from '../store/storeAuth'

let notesCollectionRef 
let notesCollectionQuery 
 let getNotesSnapshot =null

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
        return {
            notes: [
    //            {
    //     id: 'id1',
    //     content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad necessitatibus aliquam cum vel, in ipsam saepe perspiciatis error est repellat nam et sit reprehenderit velit perferendis reiciendis quaerat autem.'
    // },
    //   {
    //     id: 'id2',
    //     content: 'This is a shorter version of previous one ',
    //   }
          ],
          notesLoaded: false
        }
    },
  actions: {
    init() {
 const userStoreA= useStoreAuth()

  
      notesCollectionRef = collection(db, 'users', userStoreA.user.id, 'notes')
       
 notesCollectionQuery = query(notesCollectionRef,orderBy('date', 'desc'));
      this.getNotes()
    },
    async getNotes() {
      this.notesLoaded = false
      if(getNotesSnapshot) getNotesSnapshot() //unsubscribe from any active listener
      getNotesSnapshot= onSnapshot(notesCollectionQuery, (querySnapshot) => {
      let notes=[]
        querySnapshot.forEach((doc) => {
         
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
             
        })
        
          this.notes = notes
          this.notesLoaded= true
      
      
    
     })
  
  
    },
    clearNotes() {
      this.notes = []
    },

      async  addNote(newNoteContent) {
               let currentTime = new Date().getTime()
        let date = currentTime.toString()
  //  let note = {
  //   id: id,
  //   content: newNoteContent
  //         }
         
       await addDoc(notesCollectionRef, {
         content: newNoteContent,
         date
});

      // this.notes.unshift(note)
        },
   async deleteNote(idToDelete) {
          await deleteDoc(doc(notesCollectionRef, idToDelete));
      // this.notes= this.notes.filter(note=>{ return note.id !== idToDelete})
      },
       async updateNote(id,content) {
        
          // let index = this.notes.findIndex(note => { return note.id === id })
         
          // this.notes[index].content = content
     await updateDoc(doc (notesCollectionRef,id ),{
       content
       })
      }
       
  },
  getters: {
    getNoteContent: (state) => {
     return (id) => {
        return state.notes.filter(notebi => { return notebi.id === id })[0].content
      }
    
    },
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharchters: (state) => {
      let count= 0
     state.notes.forEach(note => {
      count +=note.content.length
     })
      return count
    }
    }
 
})


