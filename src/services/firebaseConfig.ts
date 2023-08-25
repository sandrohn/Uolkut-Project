import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyB2xyxnxQKcv8CXfozPLvVf2pUXieNJmS4",
  authDomain: "react-auth-90ef1.firebaseapp.com",
  projectId: "react-auth-90ef1",
  storageBucket: "react-auth-90ef1.appspot.com",
  messagingSenderId: "146839142869",
  appId: "1:146839142869:web:9b7b9e84e7744b36d7fd5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
