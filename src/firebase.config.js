// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbZibEv65VuRRV4o5rvTij6B4S0yy_0j8",
  authDomain: "house-marketplace-app-14d5e.firebaseapp.com",
  projectId: "house-marketplace-app-14d5e",
  storageBucket: "house-marketplace-app-14d5e.appspot.com",
  messagingSenderId: "898343759598",
  appId: "1:898343759598:web:fe95d5e8671dd9a878cdff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
