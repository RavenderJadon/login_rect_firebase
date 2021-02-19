import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAJtxiXcE80U8-lEwDhjvDHtLaF03aKYrs",
  authDomain: "fir-login-40bc0.firebaseapp.com",
  projectId: "fir-login-40bc0",
  storageBucket: "fir-login-40bc0.appspot.com",
  messagingSenderId: "1087684205601",
  appId: "1:1087684205601:web:01b91843497ddbd1ed1760",
};

// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
