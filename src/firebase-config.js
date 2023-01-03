import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyA_ddUVRFnLGUDuIBp67iqJ0mw9ETlgsPY",
    authDomain: "auth-routing-demo.firebaseapp.com",
    projectId: "auth-routing-demo",
    storageBucket: "auth-routing-demo.appspot.com",
    messagingSenderId: "158792035622",
    appId: "1:158792035622:web:854fdcd286fa4eee4de5e7"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {app, db}