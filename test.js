
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


//on pageload hide the logged in cards
$(document).ready(function() {
    $("#geeting-card").hide();

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


     ////clear input fields

     $("#email").val("");
     $("#password").val("");
     $("#username").val("");


 });


 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $("#login-form").hide();
      $("#geeting-card").show();
    } else {
        $("#geeting-card").hide();
    }
  });