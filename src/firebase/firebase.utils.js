import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC2OVSu-e8a87ydw_n9gniNteDKg0f7q_0",
  authDomain: "ecommerce-clothing-d8396.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-d8396.firebaseio.com",
  projectId: "ecommerce-clothing-d8396",
  storageBucket: "ecommerce-clothing-d8396.appspot.com",
  messagingSenderId: "152288679019",
  appId: "1:152288679019:web:8e8474c640ec8183b38d2e",
  measurementId: "G-0740N4JYMQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
