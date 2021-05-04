import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZ7GHcBl8ba1qJHZvdD15AUsbrvoXrXoQ",
    authDomain: "react-todo-app-baf9b.firebaseapp.com",
    projectId: "react-todo-app-baf9b",
    storageBucket: "react-todo-app-baf9b.appspot.com",
    messagingSenderId: "170974740761",
    appId: "1:170974740761:web:1af74845fed5011a554588",
    measurementId: "G-39PR21VLJD"
});

const db = firebaseApp.firestore();

export default db;