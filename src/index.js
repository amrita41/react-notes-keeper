import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAve9Ds3IokCwv7GlD6PXTrLg5S2PaHnR4",
  authDomain: "evernote-clone-1e25e.firebaseapp.com",
  databaseURL: "https://evernote-clone-1e25e.firebaseio.com",
  projectId: "evernote-clone-1e25e",
  storageBucket: "evernote-clone-1e25e.appspot.com",
  messagingSenderId: "1097339930157",
  appId: "1:1097339930157:web:bd13b0c066b662fadedaa4",
  measurementId: "G-7419V36Q7V",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
