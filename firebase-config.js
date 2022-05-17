// Firebase Configurations

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCowKlE-Zy-eya3edpw67bxmJLPBi0zY_s",

  authDomain: "myfirstauth-4223f.firebaseapp.com",

  projectId: "myfirstauth-4223f",

  storageBucket: "myfirstauth-4223f.appspot.com",

  messagingSenderId: "564216021810",

  appId: "1:564216021810:web:24f1b2fe6336504e1f0d2b",

  measurementId: "G-HSX5SV90NG"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
/* const analytics = getAnalytics(app); */
