// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxS7Wq16Ina_N0L48f6Q4klnrVSJwbCJc",
  authDomain: "dinostore-78088.firebaseapp.com",
  projectId: "dinostore-78088",
  storageBucket: "dinostore-78088.appspot.com",
  messagingSenderId: "303861540581",
  appId: "1:303861540581:web:f91d3a1da20475fee7d60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app