import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACGflwZNdO7epQdwuscvTTnmjB_GSI1DE",
    authDomain: "fir-cdddd.firebaseapp.com",
    databaseURL: "https://fir-cdddd-default-rtdb.firebaseio.com",
    projectId: "fir-cdddd",
    storageBucket: "fir-cdddd.appspot.com",
    messagingSenderId: "843274838470",
    appId: "1:843274838470:web:658db715164ce772b352c7",
    measurementId: "G-D5Q2MPNV0F"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };