 
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
$("#btnSubmit").on("click", function() {
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
  colFirstTrainTime: trainFirstTrainTime,
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
    var trainFirstTrainTime = childSnapshot.val().colFirstTrainTime;
    var trainFrequency = childSnapshot.val().colFrequency;
  
    // Calculate next arrival and minutes away
   // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
    //var empMonths = moment().diff(moment(empStart, "X"), "months");
    var trainNextArrival;
    //once a minute .....update 
    //need the first train time, add the frequency until greater than current time
    var firstTrainTimeConverted = moment(trainFirstTrainTime, "HH:mm");
    var currentTimeConverted = moment(new Date(), "HH:mm");
    var trainMinutesAway;
    console.log(trainFirstTrainTime);
    console.log(firstTrainTimeConverted);
    console.log(currentTimeConverted);
    console.log(trainFrequency);
    console.log(moment(firstTrainTimeConverted).isBefore(currentTimeConverted));
    var trainMinutesAway = moment().diff(moment(firstTrainTimeConverted), "minutes");
    console.log(trainMinutesAway);
    while (moment(firstTrainTimeConverted).isBefore(currentTimeConverted)) {
      firstTrainTimeConverted.add(trainFrequency, "m");
      console.log(firstTrainTimeConverted);
      trainMinutesAway = moment().diff(firstTrainTimeConverted, "minutes");
      console.log(trainMinutesAway);
      trainNextArrival = moment(firstTrainTimeConverted, "HH:mm");
    }
    //Read in the First Train Time         (FirstTrainTime)
    //Read in the Train Frequency        (TrainFrequency)
    //Get the Current Time                      (CurrentTime)
    
     
    
    //If CurrentTime is before FirstTrainTime...
    
   // - FirstTrainTime can be used as “Next Arrival”
    
   // - Difference between CurrentTime and FirstTrainTime (“Next Arrival”) can be used as “Minutes Away”
    
     
    
    //If CurrentTime is after FirstTrainTime...
    
    //- Add TrainFrequency to FirstTrainTime in a loop until FirstTrainTime is after CurrentTime
    
    //- FirstTrainTime can now be used as “Next Arrival”
    
    //- Difference between CurrentTime and FirstTrainTime (“Next Arrival”) is “Minutes Away”

//hopefully some helpful code??????

   // var tRemainder = diffTime % frequency;
   // console.log(tRemainder);
   // var minutesTillTrain = frequency - tRemainder;
   // console.log(minutesTillTrain);
    // var nextTrain = firstTrainConverted.add(diffTime + minutesTillTrain).minutes();
    //var nextTrain = moment().add(minutesTillTrain, "minutes");
    //var nextTrain2 = moment().add(2, "minutes")
    //console.log("num1" + nextTrain);
    //console.log("num2" + nextTrain2);
    //nextTrain = moment(nextTrain).format("HH:mm");
    //console.log("num1" + nextTrain);


    //take the resulting time and calculate how many minutes away
    //do the same thing for the next train in the data
  
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
