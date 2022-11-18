
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: 'AIzaSyBZhBkDUuDrnbKUAn7hM8SaI47eo74UTj0',
  authDomain: 'noteballs-20bfa.firebaseapp.com',
  projectId: 'noteballs-20bfa',
  storageBucket: 'noteballs-20bfa.appspot.com',
  messagingSenderId: '652976774636',
  appId: '1:652976774636:web:6f8e185302f7b96855b4c9'
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export {
  db,
  auth
}