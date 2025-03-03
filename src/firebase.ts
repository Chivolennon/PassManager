// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkaoMOv69ORo6eBXalTlLEHVQxuhkguVA",
  authDomain: "react-manager-pass.firebaseapp.com",
  projectId: "react-manager-pass",
  storageBucket: "react-manager-pass.firebasestorage.app",
  messagingSenderId: "731669349015",
  appId: "1:731669349015:web:ca8109eb86e4553beadfd2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);