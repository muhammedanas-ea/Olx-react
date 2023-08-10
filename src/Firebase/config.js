import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBHlFHDcv5O4xQrcjfVoQbE8kN774RoHh4",
    authDomain: "olx-project-e2a8a.firebaseapp.com",
    projectId: "olx-project-e2a8a",
    storageBucket: "olx-project-e2a8a.appspot.com",
    messagingSenderId: "863623965604",
    appId: "1:863623965604:web:26ef15d72e8dc134c92f31",
    measurementId: "G-KG7CDFESCJ"
  };

const firebase = Firebase.initializeApp(firebaseConfig);
export default firebase;

