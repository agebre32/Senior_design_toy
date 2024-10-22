// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4CjhpVCXgWOB69nGUizsxGHEz_Hb3R7M",
  authDomain: "realtime-golf-swing-analysis.firebaseapp.com",
  databaseURL: "https://realtime-golf-swing-analysis-default-rtdb.firebaseio.com",
  projectId: "realtime-golf-swing-analysis",
  storageBucket: "realtime-golf-swing-analysis.appspot.com",
  messagingSenderId: "5778346286",
  appId: "1:5778346286:web:9750cead5c9d9ed31daabf",
  measurementId: "G-S01W0FXZXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);