    Train Scheduler
    Sharon Story Smith   sstorysmith@gmail.com
    2019-09_25

Screen Shot:
    <img width=“1097” alt=“trainPrintScreen.jpg” src=“PrintScreen.jpg”>
    ![automated demo of train](.\PrintScreen.png)

Working Demo:
     https://sstorysmith.github.io/Train-Scheduler/


    Overview
    Uses: Firebase and moment.js    
        * When adding trains, administrators will be able to enter the following:    
            * Train Name    
            * Destination     
            * First Train Time -- in military time    
            * Frequency -- in minutes
  
        * Calculates when the next train will arrive relative to the current time.

        * Users from any machine can view same train times because the data is stored
             in Firebase.

App Design:
      Train schedules are added and stored in Firebase when the "Add to Schedule" button is clicked. Arrival Time is calculated and displayed on the screen.

      Function ArrivalTime (startTime, interval, currentTime)
       uses Moment code to calculate and convert time formats and returns a time

Directory Structure:
burger
|
|__ index.html
|
├── screenShot.png
│
├── assets
│       ├── css
│       │   └── style.css
|       |   |__ reset.css
|       |
│       └── images
│       |   |__ train.jpg
|       |
|       |__ js
           └── main.js


Notes:
