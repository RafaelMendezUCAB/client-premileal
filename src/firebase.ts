import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCwDylCExyAwHZoJbK6ldAxvIOkLstvrko",
    authDomain: "auth-premileal.firebaseapp.com",
    databaseURL: "https://auth-premileal.firebaseio.com",
    projectId: "auth-premileal",
    storageBucket: "auth-premileal.appspot.com",
    messagingSenderId: "330459558004",
    appId: "1:330459558004:web:7e3689f8ba745a01e5a121",
    measurementId: "G-R9RC0751BV"
};

const fb = firebase.initializeApp(config);
const db = firebase.firestore();
const fs = firebase.storage();
const fa = firebase.auth();
const providerGoogle = new firebase.auth.GoogleAuthProvider()
const providerFacebook = new firebase.auth.FacebookAuthProvider()
// const database = firebase.database();

export {fb, db, fs, fa, providerGoogle, providerFacebook}