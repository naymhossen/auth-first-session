// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw9GFzSNlDRFQlJl_k3do9h-N-uO4hcGE",
  authDomain: "auth-first-seation.firebaseapp.com",
  projectId: "auth-first-seation",
  storageBucket: "auth-first-seation.appspot.com",
  messagingSenderId: "401830113283",
  appId: "1:401830113283:web:c9f61ee3aa240326329e36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

