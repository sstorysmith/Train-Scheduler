
  $(document).ready(function(){



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
      let nextTrain = '';
      let currentTime = '';
      let minutesUntil = '';
      let train= "";  
      let dest="";
      let firstTrain=""; 
      let freq="";


      console.log(fbDB.ref().child('schedules'));
      let firebaseTrainSchedules = fbDB.ref().child('schedules');
      console.log("inside startup");           
    });

  // //ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  // //this function is called when the add button is clicked
  // //
  // //function addTrainSchedule() {}
  //   // listener for "add Schedule" button 
    $("#add-schedule").on("click", function(event) {
      
      event.preventDefault();
          // Grab schedule data from the form
          let scheduleItem = {
            train: $('#trainName-input').val(), 
            dest: $('#dest-input').val(), 
            firstTrain: $('#firstTrain-input').val(), 
            freq: $('#freq-input').val(),
          };
          console.log(scheduleItem);
          // <!-- check errors -->
        // push (add) to fbDB
        firebase.database().ref().push(scheduleItem);
    
          // empty input prompts
       
         train= $('#trainName-input').val(""), 
         dest=$('#dest-input').val(""), 
         firstTrain= $('#firstTrain-input').val(""), 
         freq= $('#freq-input').val("")
          
         firebase.database().ref().on("child_added", function(snapshot) {
          console.log("get trainSchedules"); 
          console.log(snapshot.val());
          console.log(snapshot.val().train);
          let train1 = snapshot.val().train;    
          console.log(snapshot.val().dest);
          let dest1 = snapshot.val().dest;
          console.log(snapshot.val().firstTrain); 
          let firstTrain1 = snapshot.val().firstTrain;
          console.log(snapshot.val().freq);
          let freq1 = snapshot.val().freq;
          tr= "<tr> <td>" + train1 + "</td><td>"+ dest1 + "</td><td>" + firstTrain1 + "</td><td>" + freq1 + "</td></tr>";
      
          $('#sched-table').append(tr);
      
          },  
          // Handle the errors
            function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
            }
          );
    }
    
    );
  // fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
  // this function is called when the firebase database is changed
  
  // function getTrainSchedules() {
  //   // listener for  databse addition
    
  //   for(i=0; i=firebaseTrainSchedules.length; i++){
  //     tr= "<tr> <td>" + train1 + "</td><td>"+ dest1 + "</td><td>" + firstTrain1 + "</td><td>" + freq1 + "</td></tr>";
      
        
  //       //'append' (aka add) the schedule to the existing  html list
  //       $("#sched-table").append(tr);
  //   };
  // }
 
