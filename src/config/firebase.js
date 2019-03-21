import * as firebase from 'firebase'

const FirebaseConfig = {
    apiKey: "AIzaSyAdzkgtR1ht4eDlkzKwvQG4w4M5UlPkcOg",
    authDomain: "bonni-to.firebaseapp.com",
    databaseURL: "https://bonni-to.firebaseio.com",
    projectId: "bonni-to",
    storageBucket: "bonni-to.appspot.com",
    messagingSenderId: "48089528505"
};


firebase.initializeApp(FirebaseConfig)

const databaseRef = firebase.database().ref();
export const bonniDataBaseRef = databaseRef.child("bonniDatabase")