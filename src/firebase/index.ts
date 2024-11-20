// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA-J4NTgHjXOAdA-7DtumRI-rCs6-y2Wk",
  authDomain: "economic-server.firebaseapp.com",
  projectId: "economic-server",
  storageBucket: "economic-server.appspot.com",
  messagingSenderId: "529551303276",
  appId: "1:529551303276:web:b86bef070e5b221a45ee49",
  measurementId: "G-8TQETD3LKK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebaseApp;
