import firebase from "firebase";
require("@firebase/firestore");

  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyCgrrul4kAieE-BlER3HHMhoUGUSyTRZuE",
    authDomain: "projeto-71-para-cima.firebaseapp.com",
    projectId: "projeto-71-para-cima",
    storageBucket: "projeto-71-para-cima.appspot.com",
    messagingSenderId: "688183426818",
    appId: "1:688183426818:web:d5557b9b9f90936b88cc1b"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
