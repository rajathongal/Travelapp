import * as firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyA1Ls_NrthXB8OsSf6HnM7Nzb3JOub43dg",
    authDomain: "travel-c2422.firebaseapp.com",
    databaseURL: "https://travel-c2422.firebaseio.com",
    projectId: "travel-c2422",
    storageBucket: "travel-c2422.appspot.com",
    messagingSenderId: "1084291622465",
    appId: "1:1084291622465:web:7733dfd21f4d334982c8c0"
  };



  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;