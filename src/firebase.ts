import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAoGo_W8eazeqQeHkKwH_17Rw9YmOVZGFY",
    authDomain: "pepper-money.firebaseapp.com",
    projectId: "pepper-money",
    storageBucket: "pepper-money.appspot.com",
    messagingSenderId: "738804018442",
    appId: "1:738804018442:web:396ff0f3e43d6cda311ef3",
    measurementId: "G-3SRM5ZLM2Q"
};

export const firebaseApp = initializeApp(firebaseConfig);
