// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFfe7laJmBTbad8MW3Svv8MIaSB72-1Vg",
  authDomain: "backanalisis.firebaseapp.com",
  projectId: "backanalisis",
  storageBucket: "backanalisis.appspot.com",
  messagingSenderId: "534435575314",
  appId: "1:534435575314:web:c8f4404b3791eb10214acb",
  measurementId: "G-G6087DXJ3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  firestoreDb = getFirestore(app);
export { firestoreDb };