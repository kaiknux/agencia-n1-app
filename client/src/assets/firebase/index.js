import firebase from 'firebase/app';
import 'firebase/storage';

var  config = {
    apiKey: "AIzaSyDMWjG8spdIQOeJEbQPqMzVeFZHH2Q5asA",
    authDomain: "agencian1.firebaseapp.com",
    databaseURL: "https://agencian1.firebaseio.com",
    projectId: "agencian1",
    storageBucket: "agencian1.appspot.com",
    messagingSenderId: "361853618314",
    appId: "1:361853618314:web:74f716e4d00ff932"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }