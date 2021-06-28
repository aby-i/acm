import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyBcAxNCAF7kub7faWO2LOi7PX7MK0z00-Q",
  authDomain: "amclp-ccdb7.firebaseapp.com",
  projectId: "amclp-ccdb7",
  storageBucket: "amclp-ccdb7.appspot.com",
  messagingSenderId: "1085584369862",
  appId: "1:1085584369862:web:73fea140b0ed59c4a70fc7",
  measurementId: "G-12MV8RD4FV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
