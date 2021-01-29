import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/analytics'

var firebaseConfig = {
    apiKey: "AIzaSyDtQ1w3yX-lFf1zuh1zm41gFQKnZ0_s7nU",
    authDomain: "legbackend.firebaseapp.com",
    databaseURL: "https://legbackend-default-rtdb.firebaseio.com",
    projectId: "legbackend",
    storageBucket: "legbackend.appspot.com",
    messagingSenderId: "46408878340",
    appId: "1:46408878340:web:00a2a59589003a5db1a851",
    measurementId: "G-V2HB3FQMMT"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics();

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();