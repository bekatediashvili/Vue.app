import { defineStore } from 'pinia'
import {  createUserWithEmailAndPassword ,signOut ,signInWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";
import { auth } from '../FireBase/FireBase'
import { useStoreNotes } from './storeNotes.js'
import { onMounted } from 'vue';

export const useStoreAuth = defineStore('storeAuth', {
  state: () => {
        return {
            user:{}
        }
    },
    actions: {
        init() {
            const storeNotes = useStoreNotes()
            onAuthStateChanged(auth, (user) => {
                if (user) {
      
        
               
           
      this.user.id = user.uid,
          this.user.email = user.email
                    this.router.push('/')
                     storeNotes.init()
   
        } else {
        this.user= {}
        this.router.replace('auth')
          storeNotes.clearNotes()                  
        }
        });
      },
      registerUser(credantials) {
     createUserWithEmailAndPassword(auth, credantials.email, credantials.password)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      console.log('user',user)
    // ...
  })
  .catch((error) => {
 
   console.log('Error- Message',error.message)
    // ..
  });

      },
      logOutUser() {
          signOut(auth).then(() => {
              console.log('user Sigend out')
}).catch((error) => {
       console.log(error.message)
});
        },

      logInUser(credantials) { 
          signInWithEmailAndPassword(auth, credantials.email, credantials.password)
  .then((userCredential) => {
 
      const user = userCredential.user
         console.log(user)
    // ...
  })
  .catch((error) => {
    
    console.log(error.message) 
  });

      }
  },
  
 
})


