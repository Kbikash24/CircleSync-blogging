
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyDOdedzEMScXvm0KMB3jraxA6G6MJz-mtE",
  authDomain: "auth-ea5cc.firebaseapp.com",
  projectId: "auth-ea5cc",
  storageBucket: "auth-ea5cc.appspot.com",
  messagingSenderId: "239676878859",
  appId: "1:239676878859:web:e4a22dfbf101a4d1c5d70e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth= getAuth(app)
 const firestore=getFirestore(app)
 const storage=getStorage(app)
 export{auth,app,firestore,storage}

