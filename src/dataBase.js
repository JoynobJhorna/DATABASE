// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN1O3yBvSE0YpN1zYeyBIaoAeDEzYTJVc",
  authDomain: "todolist-ad02d.firebaseapp.com",
  projectId: "todolist-ad02d",
  storageBucket: "todolist-ad02d.firebasestorage.app",
  messagingSenderId: "257121736614",
  appId: "1:257121736614:web:38fa1f09eafd21df83e167",
  measurementId: "G-70TNMTB73J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig