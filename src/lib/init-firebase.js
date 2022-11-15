// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA56AfqJBd7iiQKBWBU6pID9JAaWjPfI0o",
  authDomain: "hotel-management-fcb6a.firebaseapp.com",
  projectId: "hotel-management-fcb6a",
  storageBucket: "hotel-management-fcb6a.appspot.com",
  messagingSenderId: "495991609509",
  appId: "1:495991609509:web:a3c0dc12355fc8b5a9554c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(app);
// Initialize Firebase Authentication
export const auth = getAuth()