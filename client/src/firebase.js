// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86dd2.firebaseapp.com",
  projectId: "mern-estate-86dd2",
  storageBucket: "mern-estate-86dd2.appspot.com",
  messagingSenderId: "793699165649",
  appId: "1:793699165649:web:5c68f1eccfe1324ca6acf0",
  measurementId: "G-1DY4LEDVQC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
