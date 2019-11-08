console.log("is this working?");


//GOING TO DECLARE THESE GLOBALLY SO THEY CAN BEUSED ANYWHERE TO PRINT ON ANY PAGE

let email = $("#email").val().trim(); //this will be changed to lowercase on the next line
let useremail = email.toLowerCase();
let password = $("#password").val().trim();
let username = $("#username").val().trim();

//hide the greeeting card for now 
$(document).ready(function hiddenCards() {
  $("#greeting-card").hide();
});


var firebaseConfig = {
  apiKey: "AIzaSyB8hjqDVNDC7uet014MUAraLZAAnJ3d_Z8",
  authDomain: "test-repo-6a440.firebaseapp.com",
  databaseURL: "https://test-repo-6a440.firebaseio.com",
  projectId: "test-repo-6a440",
  storageBucket: "test-repo-6a440.appspot.com",
  messagingSenderId: "982884143386",
  appId: "1:982884143386:web:dea0888ff6c6e60fd05ca3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//make auth and firstore references
const auth = firebase.auth();
const db = firebase.firestore();


console.log(auth);
console.log(db);

//THis is incase its needed later
// db.settings({ timestampsInSnapshots: true });


//Button Click for submit button 

$("#sign-up-button").on("click", function (event) {
  ///prevent reload of page
  event.preventDefault();

  ///////gather info and put apporpriate varibales to lowercase

  let email = $("#email").val().trim(); //this will be changed to lowercase on the next line
  let useremail = email.toLowerCase();
  let password = $("#password").val().trim();
  let username = $("#username").val().trim();

  console.log(email);
  console.log(password);
  console.log(username);
  console.log(useremail);

  // firebase password function to create a user with password and email &&&& gives them a credential 
  auth.createUserWithEmailAndPassword(useremail, password).then(cred => {
    console.log(cred.user); //gives us the object of all the users credentials 

  });

  $("#email").val("");
  $("#password").val("");
  $("#username").val("");

});

// this gives us the fire base authentication for the user ---- it gives booleans for what sould happen
// if the user is signed in then we will hide the sign in form & show a greeting 
//if the user is not signed in we will just hide the greeting
// we already have the form showing on line 5-7 when the page loads

auth.onAuthStateChanged(function (user) {
  if (user) {
   
    $("#sign-up-form").hide();
    $("#greeting-card").show();
    $("#user-greeting").text(username);
    console.log(username);
  } else {
    $("#geeting-card").hide();
  }
});

// /// lets create a logout function
$("#log-out").on("click", function (event) {
  event.preventDefault();
   auth.signOut().then(() => {
    console.log("user has logged out");
   
  })
});

///// click event for log-in button on MEMBER MODAL
$("#log-in-button").on("click", function (event) {
 event.preventDefault();
 console.log("sign-in button for members clicked");

  /// get existing member info 
  memberEmail = ($("#member-email").val().trim()).toLowerCase;      /////to lower case
  memberPassword = $("#member-password").val().trim();

  auth.signInWithEmailAndPassword(memberEmail, memberPassword).then(cred => {
    console.log(cred.user);

    // close the MEMBER modal and reset the form 
    M.Modal.get($("#sign-in-modal")).close();
    $("#sign-in-form").reset();


  })

});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // ...
// });


// //////FROM FIREBASE///////
// auth.createUserWithEmailAndPassword(useremail, password).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // error message to the console for now
//   console.log("Error : " + errorMessage);
//   //error message in an alert for now as well
//   alert("Oops! There was an error :(  Error : " + errorMessage);

// });


// //// click event to launch the MEMBER SIGN IN MODAL
// $("#member-link").on("click", function (event) {
//   event.preventDefault();
//   console.log("member sign in initiated")
// })

/// 