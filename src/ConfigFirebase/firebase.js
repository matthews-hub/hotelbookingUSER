// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAp7IJxLBahf3AWEWUmq6IX4VTnq-cAqpo",
  authDomain: "properhotels.firebaseapp.com",
  projectId: "properhotels",
  storageBucket: "properhotels.appspot.com",
  messagingSenderId: "688776619068",
  appId: "1:688776619068:web:7a6abddf3d5303598d4f39",
  measurementId: "G-3W1MGB3HYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app)