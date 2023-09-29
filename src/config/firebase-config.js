// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Mmt_ehkmjqJlJ4xGhMI9DenjMsdsIZg",
  authDomain: "expense-tracker-4f3ea.firebaseapp.com",
  projectId: "expense-tracker-4f3ea",
  storageBucket: "expense-tracker-4f3ea.appspot.com",
  messagingSenderId: "388864632367",
  appId: "1:388864632367:web:c22d7710e3ccc042ebc8da",
  measurementId: "G-CJJZSSWRJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()
const analytics = getAnalytics(app);
export const db=getFirestore(app);