import React from 'react';
import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSzBR_l9mohkOEtHQqryKS822dCGrnP9M",
  authDomain: "infinity-chat-37855.firebaseapp.com",
  projectId: "infinity-chat-37855",
  storageBucket: "infinity-chat-37855.appspot.com",
  messagingSenderId: "632947168395",
  appId: "1:632947168395:web:39d3202c1d7ccf5333f08e",
  measurementId: "G-0QNB675MWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;