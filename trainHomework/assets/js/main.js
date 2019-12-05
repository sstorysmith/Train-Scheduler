
//   // fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
//   // this function updates the time clock every minute  
//   function updateClock() {

//   //  var  time = now.getHours() + ':' + now.getMinutes();
//     var time= moment().format("HH:MM");

//     // set the content of the element with the ID time to the formatted string
//     document.getElementById('time').innerHTML = time;

//     html="<span>" +  time + "</span>" 
    
//   }
       
     


  // fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  // this function calculates the arrival time of a train

  function arrivalTime(startTime, interval, ncurrentTime) {
    console.log("function Arrival Time  start:" + startTime + "  interval: " + interval + "  curr:" + currentTime);

                // Time is 3:30 AM
                var firstTime = "03:30";
                // First Time (pushed back 1 year to make sure it comes before current time)
                var firstTimeConverted = moment(startTime, "HHmm");
                console.log("firstTimeConverted:  " , firstTimeConverted);

                // Current Time
                var currentTime = moment();
                console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

                // Difference between the times
                var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
                console.log("DIFFERENCE IN TIME: " + diffTime);

                // Time apart (remainder)
                var tRemainder = diffTime % tFrequency;
                console.log(tRemainder);

                // Minute Until Train
                var tMinutesTillTrain = tFrequency - tRemainder;
                console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

                // Next Train
                var nextTrain = moment().add(tMinutesTillTrain, "minutes");
                console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

  }
                






//     // t= parseInt(startTime) + parseInt(interval);
// console.log (moment(t).format("HH") + "moment(t).format(HHmm)");
// console.log (moment(t).format("HHHH") + "moment(t).format(HHHH)");
// console.log (moment(t).format("HHmm") + "moment(t).format(HHmm)");

//     // t= parseInt(startTime) + parseInt(interval);
    

//     do {
//       t = parseInt(t) + parseInt(interval);
//       correctedT= moment(t).format("HHmm");

//       alert("in arrivalFunction  t=" + t  + " interval = " + interval + " correctedT=" + correctedT + "  currTime=" + currentTime);
//     }
//     while (t < currentTime);
 //   return (nextTrain);
 // }

  

  // Your web app's Firebase configuration
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
  console.log ("ready"); 


  $(document).ready(function () {
  console.log ("listen for addSchedule"); 
  //  listener for "add Schedule" button 
    $("#add-schedule").on("click", function (event) {
      event.preventDefault();
      

    // <!-- check errors -->

      alert($('#trainNameInput'));
      if ($('#trainNameInput') ==="") {
        alert("Train Name is blank. Reenter.");
      };
      if ($('#destInput')=="") {
        alert("Destination is blank. Reenter.");
      };
      if ('#firstTrainInput'=="") {
        alert("Train Time is blank. Reenter.");
      };
      if ($('#freqInput')=="") {
        alert("Frequency is blank. Reenter.");
      };
      // move input data from the form
  console.log ("move input data from form"); 
      let scheduleItem = {
        trainName: $('#trainNameInput').val(),
        dest: $('#destInput').val(),
        trainTime: $('#firstTrainInput').val(),
        freq: $('#freqInput').val()
      };


      let curTime = moment().format("HHmm");
      // let startTime = scheduleItem.trainTime;
      trainTime = arrivalTime(scheduleItem.trainTime, scheduleItem.freq, curTime);
      console.log("before push: StartTime " + scheduleItem.trainTime + "  curTime:"  + curTime + "  freq:" + scheduleItem.freq);
      // // push (add) to fbDB        
      // console.log(scheduleItem +"   current time" + curTime);
      firebase.database().ref().push(scheduleItem);
      // console.log("curTime and StartTime after push" + curTime + "     " + startTime)    
      // console.log("train "+ scheduleItem.trainName +"   " + "dest " + scheduleItem.dest + "   " + " trainTime " + trainTime + "  freq" + freq);

  });


  


  // listen for add to firebase
  // child added will fire once for each record in the collection
 firebase.database().ref().on("child_added", function (snapshot) {
 console.log("FBdb fired");
console.log(snapshot.val());
console.log(snapshot.val().trainName);    
console.log(snapshot.val().dest);   
console.log(snapshot.val().trainTime);   
console.log(snapshot.val().freq);
     
//    // Current Time
//    var currentTime = moment(HHMM);
//    console.log("CURRENT TIME: " + (currentTime.format("HHMM"));
//    moment();
//    var trainTime = moment(traintime, "HHMM");
//   console.log("firstTimeConverted:  " , trainTime);   
//    minutesAway= moment((trainTime-curTime), "HHMM");
    console.log("appending min away:" + minutesAway + "   trainTime=" + trainTime);
     tr = "<tr> <td>" + snapshot.val().trainName + "</td><td>" + snapshot.val().dest + "</td><td>" + snapshot.val().trainTime + "</td><td>" + minutesAway + "</td></tr>";
// console.log("tr=" +"<tr> <td>" + trainName + "</td><td>" + dest + "</td><td>" + trainTime + "</td><td>" + minutesAway + "</td></tr>");
     // append to list of trains on the sched display table
     $('#sched-table').append(tr);
  },
    // Handle the errors
    function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
    }
  );

  // Clear input fields
  $("#trainName, #destination, #firstTrain, #interval").val("");
  return false;

//   // update clock
//   // call this function again in 1000ms
  console.log("call updateClock");
//  let exit = false;
     do {
       setTimeout (function(){
         curTime=moment(H); 
         
         $("#clock-div").append("<p> + trainTime + </p>");
                            },1000);
    while (exit==false);}
                          
  })

