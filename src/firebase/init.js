import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB3F3pKe_MofBvugt0Kn6U_oWP4cJtB0Nc",
    authDomain: "ninja-smoothies-c4fe7.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-c4fe7.firebaseio.com",
    projectId: "ninja-smoothies-c4fe7",
    storageBucket: "ninja-smoothies-c4fe7.appspot.com",
    messagingSenderId: "479555243467",
    appId: "1:479555243467:web:37e1df2caf7bcb2746fa4e",
    measurementId: "G-GT62N1CFJ3"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({timestampsInSnapshots: true});
  firebase.analytics();

  //export firestore database

  export default firebaseApp.firestore() 

  