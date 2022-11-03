// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBb14ER_FZXXAxa9HxGwrVxXndM5pM17pM",
  authDomain: "ctproject-fbff5.firebaseapp.com",
  projectId: "ctproject-fbff5",
  storageBucket: "ctproject-fbff5.appspot.com",
  messagingSenderId: "377469528109",
  appId: "1:377469528109:web:634492cb86bf35e71230a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
