// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-uJ-iODOm-7sSb5xTRj1_mIdlYiVUW-c",
  authDomain: "authentication-react-64391.firebaseapp.com",
  projectId: "authentication-react-64391",
  storageBucket: "authentication-react-64391.appspot.com",
  messagingSenderId: "761264057167",
  appId: "1:761264057167:web:c8b28ee6fb461007def33a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
