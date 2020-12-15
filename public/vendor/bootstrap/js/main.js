var mainApp = {};

(function(){
    var firebase = app_fireBase;
    var uid =null;
    var nametk = document.getElementById("nametk");
    var emailtk = document.getElementById("emailtk");
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        uid = user.uid;
        console.log(user);
        
        nametk.innerText = user.displayName;
        emailtk.innerText = user.email;
        $('<img src='+user.photoURL+'>').appendTo('div.col-md-2');
        
      } else {
        uid = null;
        window.location.replace('/');
      }
    });
    function logOut(){
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
   
       

      
  })()