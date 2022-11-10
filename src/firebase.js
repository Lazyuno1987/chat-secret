import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDmT6-sWY0K8HejyESROXSrdUW9Bo_wxvU",
  authDomain: "chat-cd2e2.firebaseapp.com",
  projectId: "chat-cd2e2",
  storageBucket: "chat-cd2e2.appspot.com",
  messagingSenderId: "462300660817",
  appId: "1:462300660817:web:6180920d0f623e0e836470",
  measurementId: "G-4L8DYS5HJ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()