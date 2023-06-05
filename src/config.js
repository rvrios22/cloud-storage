// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_4A_L6ln3IQo9GkRX_xeDGLTiky3Uti0",
    authDomain: "cloud-storage-2303d.firebaseapp.com",
    projectId: "cloud-storage-2303d",
    storageBucket: "cloud-storage-2303d.appspot.com",
    messagingSenderId: "494042233387",
    appId: "1:494042233387:web:3b3ed0d92ac51f6cc1886e",
    measurementId: "G-55CRC2C82W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);