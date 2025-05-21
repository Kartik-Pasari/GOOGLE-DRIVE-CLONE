import { getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "drive-aac3a.firebaseapp.com",
  projectId: "drive-aac3a",
  storageBucket: "drive-aac3a.firebasestorage.app",
  messagingSenderId: "56504340219",
  appId: "1:56504340219:web:209ded2396fd61623bea5e",
  measurementId: "G-XGPZBSPEGZ"
};

!getApps().length ? initializeApp(firebaseConfig) : getApps();

const db = getFirestore();

export {db}
