
console.log("is this working?");
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDlGl5lQeCuLx9272W-ypftEdZnaSIMXr0",
    authDomain: "forclass-85cff.firebaseapp.com",
    databaseURL: "https://forclass-85cff.firebaseio.com",
    projectId: "forclass-85cff",
    storageBucket: "forclass-85cff.appspot.com",
    messagingSenderId: "200158147478",
    appId: "1:200158147478:web:bf1e63d447a7531909e3b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

 console.log(database);


//hide the greeeting card for now 
$(document).ready(function hiddenCards() {
 $("#greeting-card").hide();

});






//Button Click for submit button 

 $("#log-in-button").on("click", function(event) {
     ///prevent reload of page
     event.preventDefault();

     ///////gather info and put apporpriate varibales to lowercase

    let email = $("#email").val().trim();  //this will be changed to lowercase on the next line
    let useremail = email.toLowerCase();

     let password = $("#password").val().trim();
        
     let username = $("#username").val().trim();

     console.log(email);
     console.log(password);
     console.log(username);
     console.log(useremail);

    // firebase password function to authenticate the password 

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // error message to the console for now
      console.log("Error : " + errorMessage);
      //error message in an alert for now as well
      alert("Oops! There was an error :(  Error : " + errorMessage);

    });


     ////clear input fields

     $("#email").val("");
     $("#password").val("");
     $("#username").val("");


 });

 // this givrs us the fire base authentication for the user ---- it gives booleans for what sould happen
 // if the user is signed in then we will hide the sign in form & show a greeting 
 //if the user is not signed in we will just hide the greeting
 // we already have the form showing on line 22-25 when the page loads

 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $("#login-form").hide();
      $("#greeting-card").show();
    } else {
        $("#geeting-card").hide();
    }
  });






  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });