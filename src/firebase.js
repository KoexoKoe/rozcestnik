// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYQWoOgKrwCyWVfyP80mvXY5OPA0VlEM",
  authDomain: "booking-2d868.firebaseapp.com",
  projectId: "booking-2d868",
  storageBucket: "booking-2d868.appspot.com",
  messagingSenderId: "183047449887",
  appId: "1:183047449887:web:c75b2c43aad9b091e0142a",
  measurementId: "G-NK0W9Q61FN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
