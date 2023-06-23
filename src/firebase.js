import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAKNEPNYjgwxEBy55xqUQnmjuOGNYx2KNQ",
  authDomain: "rustic-roots.firebaseapp.com",
  projectId: "rustic-roots",
  storageBucket: "rustic-roots.appspot.com",
  messagingSenderId: "1031858156050",
  appId: "1:1031858156050:web:a1ae7ec20e0ed1fa119ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth();

export {auth, db, app}

// async function firebaseSignUp(email, password) {
//   await createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage)
//     // ..
//   });
// }

// export {firebaseSignUp}