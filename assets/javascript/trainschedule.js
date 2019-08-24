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
  var recAddTrain = {
  colTrainName: trainName,
  colDestination: trainDestination,
  colFirstTrain: trainFirstTrainTime,
  colFrequency: trainFrequency,
  };

  //upload train data to database
  database.ref().push(recAddTrain);

  //clear all text boxes
  $("#txtTrainName").val("");
  $("#txtDestination").val("");
  $("#txtFirstTrainTime").val("");
  $("#txtFrequency").val("");

});

//create firebase event a train to the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {

    // Store everything into a variable.
    var trainName = childSnapshot.val().colTrainName;
    var trainDestination = childSnapshot.val().colDestination;
    var trainFirstTrainTime = childSnapshot.val().colFirstTrain;
    var trainFrequency = childSnapshot.val().colFrequency;
  
    // Calculate next arrival and minutes away
   // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
    //var empMonths = moment().diff(moment(empStart, "X"), "months");
    var trainNextArrival;
    var trainMinutesAway;
  
    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(trainNextArrival),
      $("<td>").text(trainMinutesAway)
    );
  
    // Append the new row to the table
    $("#tblCurrentTrain > tbody").append(newRow);
  
});
