Train Scheduler
Sharon Story Smith   storysmithsharon@gmail.com
2019-09-25

jQuery, Firebase and moment.js   

Screen Shot:
     [screenshot ](ScreenShot.png)

Working Demo:
     [Train Scheduler](https://sstorysmith.github.io/Train-Scheduler/).

Developer:   
     Download Code and open index.html in a browser.

Overview:   
        - When adding trains, enter the following:    
            * Train Name    
            * Destination     
            * First Train Time -- in military time    
            * Frequency -- in minutes
  
        - Calculates when the next train will arrive relative to the current time.

        - Users from any client can view the same train information because the data is stored
             in Firebase.

App Design:
      Train schedules are added and stored in Firebase when the "Add to Schedule" button is clicked. Arrival Time is calculated and displayed on the screen. 

      Function ArrivalTime (startTime, interval, currentTime)
       uses Moment code to calculate and convert time formats and returns a time





