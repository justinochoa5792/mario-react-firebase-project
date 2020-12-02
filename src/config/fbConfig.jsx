import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2cJJzwr2U6kxV_RF06au3YowroTOsrFg",
  authDomain: "mario-plan-9df2a.firebaseapp.com",
  databaseURL: "https://mario-plan-9df2a.firebaseio.com",
  projectId: "mario-plan-9df2a",
  storageBucket: "mario-plan-9df2a.appspot.com",
  messagingSenderId: "610998366017",
  appId: "1:610998366017:web:455882d5b58bbcb504bbc0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
