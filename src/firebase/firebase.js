// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCdETMwUR5ooG1thbFc1FhEUjRBNA_LvIQ",
    authDomain: "file-manager-35c38.firebaseapp.com",
    projectId: "file-manager-35c38",
    storageBucket: "file-manager-35c38.appspot.com",
    messagingSenderId: "42440040840",
    appId: "1:42440040840:web:bafa01b71bd9cbab391a3d",
    measurementId: "G-7579S3XR52"
  };

// Initialize Firebase
!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();

export default db;

export { auth, storage, provider };
