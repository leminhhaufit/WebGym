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
        //$('<input type="hidden" name="tentk" value='+user.email+'>').appendTo('div.id3');
        emailtk.innerHTML = user.email;
        $('<img style="width:50px;height:50px" src='+user.photoURL+'>').appendTo('div.row-md-2');
        
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