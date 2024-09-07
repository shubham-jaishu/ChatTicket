// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29St6s0lFbb06Czz-MfRDqjnxy8nk-T0",
  authDomain: "chatticket-77d4a.firebaseapp.com",
  projectId: "chatticket-77d4a",
  storageBucket: "chatticket-77d4a.appspot.com",
  messagingSenderId: "910423779980",
  appId: "1:910423779980:web:db7312167b59088193e9a9",
  measurementId: "G-P4NMDHJS96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig