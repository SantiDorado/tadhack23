
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBUkORtU5AGHMP_JX9GX7uz1EjkqGx9aGk",
  authDomain: "finance-f3af5.firebaseapp.com",
  projectId: "finance-f3af5",
  storageBucket: "finance-f3af5.appspot.com",
  messagingSenderId: "922497220475",
  appId: "1:922497220475:web:470ffbe876a3ecad3807de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)