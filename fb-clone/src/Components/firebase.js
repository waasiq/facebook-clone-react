// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//!https://travis.media/how-to-use-firebase-with-react/

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBRktCezBHu_QSOdHau5GDbO-ZuRETV38k",
    authDomain: "facebook-clone-8ccfc.firebaseapp.com",
    projectId: "facebook-clone-8ccfc",
    storageBucket: "facebook-clone-8ccfc.appspot.com",
    messagingSenderId: "724313421698",
    appId: "1:724313421698:web:8ccee766d742f2b10f819b",
    measurementId: "G-JGVHFJGEZ2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export { auth, provider, signInWithPopup  };
  export default db;
 // Putting the  Firebase settings in frontend is not a security risk. 