// src/firebase.js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBttCVec0OwDKPzejOA8qVmEm_Vc1xJLI4",
    authDomain: "nepalidrip.firebaseapp.com",
    projectId: "nepalidrip",
    storageBucket: "nepalidrip.firebasestorage.app",
    messagingSenderId: "546308381305",
    appId: "1:546308381305:web:0a855e12e3747eea99d2a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };