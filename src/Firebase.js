// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//!https://travis.media/how-to-use-firebase-with-react/

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVtscZ68ZDr2oLWTilImfM6FVSTTxaz18",
  authDomain: "fb-clone-3529f.firebaseapp.com",
  projectId: "fb-clone-3529f",
  storageBucket: "fb-clone-3529f.appspot.com",
  messagingSenderId: "524823270085",
  appId: "1:524823270085:web:5a2c1ad7b271a5bf1a56ac"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export { auth, provider, signInWithPopup  };
  export default db;
 // Putting the  Firebase settings in frontend is not a security risk. 