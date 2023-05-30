import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAeR2QD45DuNOtyjmlt6nKMJ3vk8vbXksY",
  authDomain: "react-firebase321.firebaseapp.com",
  projectId: "react-firebase321",
  storageBucket: "react-firebase321.appspot.com",
  messagingSenderId: "555011794043",
  appId: "1:555011794043:web:db3c7589e27fe1b178aede",
  measurementId: "G-1TC2FK0QQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
