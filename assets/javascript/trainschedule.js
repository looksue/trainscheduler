  var firebaseConfig = {
    apiKey: "AIzaSyCL8jfBgi2tatVsYihQ_dns1E2xInzsN2s",
    authDomain: "choochootrainscheduler.firebaseapp.com",
    databaseURL: "https://choochootrainscheduler.firebaseio.com",
    projectId: "choochootrainscheduler",
    storageBucket: "",
    messagingSenderId: "344520636909",
    appId: "1:344520636909:web:6bf23b67e7781acc"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get a pointer and point it to the database; be creative and call it "database"
var database = firebase.database();

//adding event listener for the submit button
$("#btnSubmit").on("click", function(event) {
  event.preventDefault();
  
  //grab user input
  var trainName = $("#txtTrainName").val().trim();
  var trainDestination = $("#txtDestination").val().trim();
  var trainFirstTrainTime = $("#txtFirstTrainTime").val().trim();
  var trainFrequency = $("#txtFrequency").val().trim();

  //create local vars for train data

  //upload train data to database

  //clear all text boxes
});
