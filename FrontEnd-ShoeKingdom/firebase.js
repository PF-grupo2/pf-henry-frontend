// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQRMofHyFhOvAnfPuP0WL0GLGtAsPvyiw",
  authDomain: "shoe-kingdom-ae164.firebaseapp.com",
  projectId: "shoe-kingdom-ae164",
  storageBucket: "shoe-kingdom-ae164.appspot.com",
  messagingSenderId: "952199441715",
  appId: "1:952199441715:web:d3ba3cf2c77574e7752246",
  measurementId: "G-4BL245B17H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);