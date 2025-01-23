// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD40O_H_lZUJqmSivdidKh1mdQiPiAEcPU",
  authDomain: "ecommerce-63395-fa55a.firebaseapp.com",
  projectId: "ecommerce-63395-fa55a",
  storageBucket: "ecommerce-63395-fa55a.firebasestorage.app",
  messagingSenderId: "709839545832",
  appId: "1:709839545832:web:f551e70ce2db55154ef05d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const db = getFirestore();

 export default db;