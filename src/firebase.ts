// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRlM7MI6KZhxUv77m4b48FRihxamEmD-k",
  authDomain: "household-app-f644e.firebaseapp.com",
  projectId: "household-app-f644e",
  storageBucket: "household-app-f644e.firebasestorage.app",
  messagingSenderId: "791980201904",
  appId: "1:791980201904:web:4350bd09f89f142df3e875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };