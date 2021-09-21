// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGPVLzm8jaTiIDdY1xVlNb1yhDe2wwts",
  authDomain: "financepeer-test.firebaseapp.com",
  projectId: "financepeer-test",
  storageBucket: "financepeer-test.appspot.com",
  messagingSenderId: "85288963303",
  appId: "1:85288963303:web:a594bc6c01fcd62b042642",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
