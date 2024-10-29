// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5egB8V9jg_YfoJyDK3Vo_0cfDNXFJgWs",
  authDomain: "dummy-chat-2539b.firebaseapp.com",
  projectId: "dummy-chat-2539b",
  storageBucket: "dummy-chat-2539b.appspot.com",
  messagingSenderId: "675733142921",
  appId: "1:675733142921:web:248ddb0067929387c7f558",
  measurementId: "G-PGZ5V8X0HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
