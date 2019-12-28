Sharon Story Smith
    2019-09_25
    Train Scheduler

    Overview
    Uses: Firebase and moment.js
    
    * When adding trains, administrators will be able to enter the following:
    
        * Train Name
    
        * Destination 
    
        * First Train Time -- in military time
    
        * Frequency -- in minutes
  
  * Calculates when the next train will arrive relative to the current time.

  * Users from any machine can view same train times because the data is stored in      Firebase.


  App Design
      Train schedules are added and stored in Firebase and displayed on the screen.

      Function ArrivalTime (startTime, interval, currentTime)
        uses Moment code to calculate and convert time formats
        returns a time