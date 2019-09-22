# trainscheduler
This is a train schedule application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates information about various train schedules. 

**Motivation:** Use Firebase to store and retrieve information on train schedules, added a user input form to allow user to enter a new train schedule, and used Moment.js to make calculations. 

**Code Style:** Tab

**Tech/Framework:** HTML5, CSS3, JavaScript, JQuery, Firebase

**Features:** Moment.js, Firebase, Event Listeners, Responsive

**Code Example:**
```javascript
     //If CurrentTime is before FirstTrainTime...
    if (moment(currentTimeConverted).isBefore(firstTrainTimeConverted)) {
    // - FirstTrainTime can be used as “Next Arrival”
    trainMinutesAway = 0 - (moment().diff(firstTrainTimeConverted, "minutes"));
    trainNextArrival = moment(firstTrainTimeConverted).format("HH:mm");
      } else {
      while (moment(firstTrainTimeConverted).isBefore(currentTimeConverted)) {
          firstTrainTimeConverted.add(trainFrequency, "m");
          trainMinutesAway = 0 - (moment().diff(firstTrainTimeConverted, "minutes"));
          trainNextArrival = moment(firstTrainTimeConverted).format("HH:mm");
   
```
**Screenshot:**

 ![TrainScheduler](https://github.com/looksue/trainscheduler/blob/master/assets/images/screenshot.png)

**Link to Repository:** https://looksue.github.io/trainscheduler/





