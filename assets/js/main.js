// fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// this function updates the displayed time clock
function updateTimeClock() {
  curTime = moment().format("HH:mm:ss");
  $("#clock-div p:first").replaceWith("<p> " + curTime + "</p>");
}
// fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
// this function calculates the interval minutes from the current Time based on the starting time
function minutesUntil(startTime, interval, ncurrentTime) {
  console.log(
    "function Arrival Time  start:" +
      startTime +
      "  interval: " +
      interval +
      "  curr:" +
      ncurrentTime
  );

  var startTimeConverted = moment(startTime, "HH:mm");
  console.log("startTimeConverted:  ", startTimeConverted);

  // Difference between the times
  var diffTime = moment().diff(moment(startTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % interval;
  console.log(tRemainder);

  // Minute Until next occurence
  var tMinutesTill = interval - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTill);

  return tMinutesTill;
}

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8qG2Mg-ou6WD1xIjSBzB7SgeSBNqnrc4",
  authDomain: "sharonproject-1e62b.firebaseapp.com",
  databaseURL: "https://sharonproject-1e62b.firebaseio.com",
  projectId: "sharonproject-1e62b",
  storageBucket: "sharonproject-1e62b.appspot.com",
  messagingSenderId: "1274608061",
  appId: "1:1274608061:web:9103d748cc668938"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let fbDB = firebase.database();
let arrTime = "";
let currentTime = "";
let minutesAway = "";
let trainName = "";
let dest = "";
let trainTime = "";
let freq = "";
console.log("ready");

$(document).ready(function() {
  console.log("listen for addSchedule");
  //  listener for "add Schedule" button
  $("#add-schedule").on("click", function(event) {
    event.preventDefault();

    // <!-- check errors -->

    alert($("#trainNameInput"));
    if ($("#trainNameInput") === "") {
      alert("Train Name is blank. Reenter.");
    }
    if ($("#destInput") == "") {
      alert("Destination is blank. Reenter.");
    }
    if ("#firstTrainInput" == "") {
      alert("Train Time is blank. Reenter.");
    }
    if ($("#freqInput") == "") {
      alert("Frequency is blank. Reenter.");
    }
    // move input data from the form
    console.log("move input data from form");
    let scheduleItem = {
      trainName: $("#trainNameInput").val(),
      dest: $("#destInput").val(),
      trainTime: $("#firstTrainInput").val(),
      freq: $("#freqInput").val()
    };

    // push (add) to fbDB

    firebase
      .database()
      .ref()
      .push(scheduleItem);
    // console.log("curTime and StartTime after push" + curTime + "     " + startTime)
    // console.log("train "+ scheduleItem.trainName +"   " + "dest " + scheduleItem.dest + "   " + " trainTime " + trainTime + "  freq" + freq);
  });

  // listen for add to firebase
  // child added will fire once for each record in the collection
  firebase
    .database()
    .ref()
    .on(
      "child_added",
      function(snapshot) {
        console.log("FBdb fired");
        console.log(snapshot.val());
        console.log(snapshot.val().trainName);
        console.log(snapshot.val().dest);
        console.log(snapshot.val().trainTime);
        console.log(snapshot.val().freq);

        var startTime = snapshot.val().trainTime;
        console.log("  set startTime  " + startTime);
        var interval = snapshot.val().freq;
        console.log("  set interval: " + interval);
        ncurrentTime = moment();
        console.log("  set ncurTime  " + ncurrentTime);
        minutesAway = minutesUntil(
          snapshot.val().trainTime,
          snapshot.val().freq,
          moment()
        );
        var nextTrain = moment()
          .add(minutesAway, "minutes")
          .format("HH:mm");
        console.log("ARRIVAL TIME: " + nextTrain);

        tr =
          "<tr> <td>" +
          snapshot.val().trainName +
          "</td><td>" +
          snapshot.val().dest +
          "</td><td>" +
          nextTrain +
          "</td><td>" +
          minutesAway +
          "</td></tr>";
        // console.log("tr=" +"<tr> <td>" + trainName + "</td><td>" + dest + "</td><td>" + trainTime + "</td><td>" + minutesAway + "</td></tr>");
        // append to list of trains on the sched display table
        $("#sched-table").append(tr);
      },
      // Handle the errors
      function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      }
    );
  console.log(" finished writing to display");

  // Clear input fields
  $("#trainName, #destination, #firstTrain, #interval").val("");

  curTime = moment().format("HH:mm:ss");
  console.log("  line 118 curTime  " + curTime);
  $("#clock-div p:first").replaceWith("<p> " + curTime + "</p>");

  console.log("  line 123 curTime  " + curTime);
  setInterval(updateTimeClock, 1000);

  var startTime = "0100";
  console.log("  set startTime  " + startTime);
  var interval = 30;
  console.log("  set interval: " + interval);

  let minutesAway = minutesUntil(startTime, interval, curTime);
  console.log("arrival away: ", minutesAway);
  trainArrivalTime = moment().add(minutesAway, "minutes");
  console.log("TRAIN arrival time: " + trainArrivalTime.format("HH:mm"));
});
