// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkhndNU9MM2L1j4-OqDg92OZ8E4rt7yJA",
  authDomain: "ayritech-internship.firebaseapp.com",
  projectId: "ayritech-internship",
  storageBucket: "ayritech-internship.firebasestorage.app",
  messagingSenderId: "382254300025",
  appId: "1:382254300025:web:59c549214c569c4dfa0da8",
  measurementId: "G-7DPGS13N6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);