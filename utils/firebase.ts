// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-209c2.firebaseapp.com",
  projectId: "blog-209c2",
  storageBucket: "blog-209c2.appspot.com",
  messagingSenderId: "548122639124",
  appId: "1:548122639124:web:4bd82642eaf2b79e0e2001",
  measurementId: "G-N3BSJHK60Q"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);