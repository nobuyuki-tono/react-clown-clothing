import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCywNxDvKVmgAt7AvdkQwC_ci8b4DmsfOI",
  authDomain: "crown-db-995f9.firebaseapp.com",
  databaseURL: "https://crown-db-995f9.firebaseio.com",
  projectId: "crown-db-995f9",
  storageBucket: "crown-db-995f9.appspot.com",
  messagingSenderId: "24121636917",
  appId: "1:24121636917:web:08c5ed73a13103f1aa197c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
