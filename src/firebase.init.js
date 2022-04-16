// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVrriUCmruQmHQ7JQvicXbcoPN2_pcZps",
    authDomain: "my-10th-assignment.firebaseapp.com",
    projectId: "my-10th-assignment",
    storageBucket: "my-10th-assignment.appspot.com",
    messagingSenderId: "622304490368",
    appId: "1:622304490368:web:c0aa8b74190c91c7e98765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);