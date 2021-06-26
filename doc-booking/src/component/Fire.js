import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAD-Qq-oI6LtglPUED0Ln4SSVg2ZWU3AaA",
    authDomain: "projet-react-d4908.firebaseapp.com",
    projectId: "projet-react-d4908",
    storageBucket: "projet-react-d4908.appspot.com",
    messagingSenderId: "748484906459",
    appId: "1:748484906459:web:6521ccbb4d730ecfe86bfe"
  };
  
 const Fire = firebase.initializeApp(firebaseConfig);

 export default Fire;