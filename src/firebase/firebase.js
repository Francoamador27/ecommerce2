// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD396Kzks9V9TS5kmsrJPVw3aINS13GTTU",
  authDomain: "ecommerce-amador.firebaseapp.com",
  projectId: "ecommerce-amador",
  storageBucket: "ecommerce-amador.appspot.com",
  messagingSenderId: "853805270075",
  appId: "1:853805270075:web:61294b8f2d6ff3f91dc81e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db