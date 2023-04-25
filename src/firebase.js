// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6WC4qzR3LA2fHXXr3UeKdvECfYSYJcjI",
  authDomain: "slack-clone-8914c.firebaseapp.com",
  projectId: "slack-clone-8914c",
  storageBucket: "slack-clone-8914c.appspot.com",
  messagingSenderId: "1079346783938",
  appId: "1:1079346783938:web:37d5b352efe02eab183d5b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
