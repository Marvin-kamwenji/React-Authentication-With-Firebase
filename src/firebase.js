// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc7M59lw7ExA_2oJNRZO9YwnSisuwNveQ",
  authDomain: "react-with-firebase-58a74.firebaseapp.com",
  projectId: "react-with-firebase-58a74",
  storageBucket: "react-with-firebase-58a74.appspot.com",
  messagingSenderId: "691086157897",
  appId: "1:691086157897:web:5d4820aa4dca57f56a7798",
  measurementId: "G-JSP2GKH169"
};

// Initialize Firebase
export const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);