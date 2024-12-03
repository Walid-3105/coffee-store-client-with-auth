// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYBBlueXQC49vwytglO4KuidbIHIdSTMY",
  authDomain: "coffee-store-28681.firebaseapp.com",
  projectId: "coffee-store-28681",
  storageBucket: "coffee-store-28681.firebasestorage.app",
  messagingSenderId: "143786160917",
  appId: "1:143786160917:web:c548b106a16b0491baef1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
