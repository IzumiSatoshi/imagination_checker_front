// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwypLA17r2a4LzRBuruzypT_L3n7NJXeM',
  authDomain: 'imagination-checker.firebaseapp.com',
  projectId: 'imagination-checker',
  storageBucket: 'imagination-checker.appspot.com',
  messagingSenderId: '112269791682',
  appId: '1:112269791682:web:8d4cdaedbc02d46711c65b',
  measurementId: 'G-M77W4N65R5',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
