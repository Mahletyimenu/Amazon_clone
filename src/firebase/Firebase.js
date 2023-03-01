import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACGflwZNdO7epQdwuscvTTnmjB_GSI1DE",
    authDomain: "fir-cdddd.firebaseapp.com",
    projectId: "fir-cdddd",
    storageBucket: "fir-cdddd.appspot.com",
    messagingSenderId: "843274838470",
    appId: "1:843274838470:web:bdd35cb7564176d7b352c7",
    measurementId: "G-G9G4RB87S1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };