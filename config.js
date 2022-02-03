import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAsK9MufPCZtrmz-EZPXuSBoEdvQrgD7iU",
    authDomain: "e-rider-54dc4.firebaseapp.com",
    databaseURL: "https://e-rider-54dc4-default-rtdb.firebaseio.com",
    projectId: "e-rider-54dc4",
    storageBucket: "e-rider-54dc4.appspot.com",
    messagingSenderId: "454525627296",
    appId: "1:454525627296:web:57feb13fb8dcb9263cd2c5"
  };
  




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


