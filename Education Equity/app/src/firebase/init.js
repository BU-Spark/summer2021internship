import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/performance";
import "firebase/analytics";

const config = {
  apiKey: "AIzaSyBVL9fyhFDOJzVK63jEDp4rZVUXvt5f9h4",
  authDomain: "digital-equity-9190c.firebaseapp.com",
  projectId: "digital-equity-9190c",
  storageBucket: "digital-equity-9190c.appspot.com",
  messagingSenderId: "656916554309",
  appId: "1:656916554309:web:be7789a06db9ce834af92c",
  measurementId: "G-1ZQMMPZ8TY",
};

const app = firebase.initializeApp(config);
const auth = firebase.auth();
const functions = firebase.functions();
const db = firebase.firestore();
firebase.performance();
firebase.analytics();

const arrayUnion = (array) => firebase.firestore.FieldValue.arrayUnion(array);

export default app;
export { auth, functions, db, arrayUnion };
