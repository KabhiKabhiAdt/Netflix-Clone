import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDr6H4tmemzW-oEqJ95uXDa6cMYQJR4tAg",
  authDomain: "react-netflix-clone-3f229.firebaseapp.com",
  projectId: "react-netflix-clone-3f229",
  storageBucket: "react-netflix-clone-3f229.appspot.com",
  messagingSenderId: "72834301973",
  appId: "1:72834301973:web:097f6f2b237e13cf14ce1c",
  measurementId: "G-LMGF6LNYVV"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
