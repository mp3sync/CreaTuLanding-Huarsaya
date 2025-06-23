// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvq0Lr_2x_-64EkH-YgSiVnQlqoX-oDsc",
  authDomain: "coder-app-cyn.firebaseapp.com",
  projectId: "coder-app-cyn",
  storageBucket: "coder-app-cyn.firebasestorage.app",
  messagingSenderId: "208529979901",
  appId: "1:208529979901:web:b7f213bd4477937a3bc194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)