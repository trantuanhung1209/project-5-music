// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4WlwB5TI8Nar1cXOCGmiL7mSKwsN3F30",
  authDomain: "list-vocabulary.firebaseapp.com",
  databaseURL: "https://list-vocabulary-default-rtdb.firebaseio.com",
  projectId: "list-vocabulary",
  storageBucket: "list-vocabulary.firebasestorage.app",
  messagingSenderId: "1087901987862",
  appId: "1:1087901987862:web:55660d3473cc60e2157137"
};

const app = initializeApp(firebaseConfig);
export const dbFireBase = getDatabase(app);
export const authFirebase = getAuth(app);