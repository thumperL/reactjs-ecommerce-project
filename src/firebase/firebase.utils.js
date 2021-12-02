// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrsQiWiGJB8iD4TWNRak1Znj3OVekViI",
  authDomain: "react-crown-ecommerce.firebaseapp.com",
  projectId: "react-crown-ecommerce",
  storageBucket: "react-crown-ecommerce.appspot.com",
  messagingSenderId: "971066131978",
  appId: "1:971066131978:web:896effec7634f6995241f3",
  measurementId: "G-024WMJWQTS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Get user reference based on auth user id, then get the user document
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  // If the user document does not exist, create it
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    // Create the user document
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;