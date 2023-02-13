import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAkDJ5p8LzxPOLv3rFE84jGHzgHfOn7BZg",
  authDomain: "tinder-clone-580a1.firebaseapp.com",
  projectId: "tinder-clone-580a1",
  storageBucket: "tinder-clone-580a1.appspot.com",
  messagingSenderId: "340856493619",
  appId: "1:340856493619:web:772b31ccd5997db8b6b546",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
