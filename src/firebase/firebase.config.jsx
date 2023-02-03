// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR4jIDBSp1NVhkm4j-Tdn9yFu3-LdYalc",
    authDomain: "upload-file-8313f.firebaseapp.com",
    projectId: "upload-file-8313f",
    storageBucket: "upload-file-8313f.appspot.com",
    messagingSenderId: "58638271948",
    appId: "1:58638271948:web:80c044526e34b030cb0969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
