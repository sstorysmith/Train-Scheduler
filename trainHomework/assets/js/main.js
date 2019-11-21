

$(document).ready(function () {



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

  console.log ("ready to listen"); 
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
 firebase.database().ref().on("child_added", function (snapshot) {
 console.log("FBdb fired");
    console.log(snapshot.val());
    console.log(snapshot.val().trainName);    
    console.log(snapshot.val().dest);   
    console.log(snapshot.val().trainTime);   
    console.log(snapshot.val().freq);
    

//     // append to list of trains on the sched display-div
//     minutesAway= (trainTime-curTime);
//     console.log("appending min away:" + minutesAway + "   trainTime=" + trainTime);
   
//     tr = "<tr> <td>" + trainName + "</td><td>" + dest + "</td><td>" + trainTime + "</td><td>" + minutesAway + "</td></tr>";
// console.log("tr=" +"<tr> <td>" + trainName + "</td><td>" + dest + "</td><td>" + trainTime + "</td><td>" + minutesAway + "</td></tr>");
//     $('#sched-table').append(tr);

  },
    // Handle the errors
    function (errorObject) {
      console.log("Errors handled: " + errorObject.code);
    }
  );

//   // update clock
//     // call this function again in 1000ms
//   console.log("call updateClock");
//   let exit = false;
//     do {
//       setTimeout(updateClock, 1000);
//     while (exit==false);
//     }

});

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

  function arrivalTime(startTime, interval, currentTime) {
    console.log("function Arrival Time  start:" + startTime + "  interval: " + interval + "  curr:" + currentTime);

    t= parseInt(startTime) + parseInt(interval);
   console.log (moment(t).format("HH") + "moment(t).format(HHmm)");
   console.log (moment(t).format("HHHH") + "moment(t).format(HHHH)");
   console.log (moment(t).format("HHmm") + "moment(t).format(HHmm)");

    t= parseInt(startTime) + parseInt(interval);
    

    do {
      t = parseInt(t) + parseInt(interval);
      correctedT= moment(t).format("HHmm");

      alert("in arrivalFunction  t=" + t  + " interval = " + interval + " correctedT=" + correctedT + "  currTime=" + currentTime);
    }
    while (t < currentTime);
    return (t);
  }
