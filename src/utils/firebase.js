// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7k5YoPedGecKu5xuxDKeTYTRuH7XmRP0",
  authDomain: "netflixgpt-6761a.firebaseapp.com",
  projectId: "netflixgpt-6761a",
  storageBucket: "netflixgpt-6761a.appspot.com",
  messagingSenderId: "927965609222",
  appId: "1:927965609222:web:277bb6c2b0ae6ba9fc7287",
  measurementId: "G-YJ51NQJYCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();