import firebase from "firebase/compat/app"
// import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNEbAANVPGCcolluR2s308bxu-XacVMUQ",
  authDomain: "faruk-amzon-clone.firebaseapp.com",
  projectId: "faruk-amzon-clone",
  storageBucket: "faruk-amzon-clone.firebasestorage.app",
  messagingSenderId: "482804764924",
  appId: "1:482804764924:web:431854c5304f1c94418779",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// initializing auth
export const auth= getAuth(app);
export const db = app.firestore();
// export const db = getFirestore(app);


