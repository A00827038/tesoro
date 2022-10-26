import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDUECd81uxmucOLiGShTBxnDJssqK37qWA",
  authDomain: "alaz-10aa1.firebaseapp.com",
  projectId: "alaz-10aa1",
  storageBucket: "alaz-10aa1.appspot.com",
  messagingSenderId: "246977447908",
  appId: "1:246977447908:web:4f1a37459ce51c660e29f1",
  measurementId: "G-9MK7YTR24R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots:true });

export default firebase;