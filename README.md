# trainscheduler
This is a train schedule application that incorporates Firebase to host arrival and departure data. The app retrieves and manipulates information about various train schedules. 

# How to Use:
1. In the Add Train section, type the name of the train (or originating city).
2. In the Destination, type the name of the destination city.
3. In the First Train Time, type in the time of when the train leaves
4. In the Frequency, type in the how long the train ride takes. 
5. In the Current Train Schedule section, it will calculate when the next train will arrive and 
   how many minutes until it arrives. 


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





