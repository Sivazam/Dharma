import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBYshJZ_pDasqGMU05ZSDz-1xVWzgTsWw",
  authDomain: "voice-62ddc.firebaseapp.com",
  projectId: "voice-62ddc",
  storageBucket: "voice-62ddc.firebasestorage.app",
  messagingSenderId: "724997803907",
  appId: "1:724997803907:web:4680b7412d4e4d67b8f0b6"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
