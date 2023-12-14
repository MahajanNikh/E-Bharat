// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ7BEohi-xt0LbbO-A3qQEalCDvLOozA8",
    authDomain: "e-commerce-66e85.firebaseapp.com",
    projectId: "e-commerce-66e85",
    storageBucket: "e-commerce-66e85.appspot.com",
    messagingSenderId: "614933093292",
    appId: "1:614933093292:web:83ced94f70baccf1343809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }