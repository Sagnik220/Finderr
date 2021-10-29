import app from "firebase/app";
import "firebase/firestore";



// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCaSV-sz_oyKmjoKo8A2a_XzHL1ppCfccA",
    authDomain: "finder-90345.firebaseapp.com",
    projectId: "finder-90345",
    storageBucket: "finder-90345.appspot.com",
    messagingSenderId: "967962496300",
    appId: "1:967962496300:web:f4603d9ffc51c4e62ef089",
    measurementId: "G-BKH1V576ZT"
  };
  // Initialize Firebase
  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();

  export {firestore, app};