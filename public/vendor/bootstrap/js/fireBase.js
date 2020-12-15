var app_fireBase ={};
(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyCGZ9-gBlEtTLsBkud7ladyoGT8OIOAod0",
        authDomain: "webgym156.firebaseapp.com",
        projectId: "webgym156",
        storageBucket: "webgym156.appspot.com",
        messagingSenderId: "820508962974",
        appId: "1:820508962974:web:e133937c0b44ae450e8b8f",
        measurementId: "G-0SEZF20JHY"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      app_fireBase = firebase;
})()