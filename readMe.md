    Train Scheduler
    Sharon Story Smith   storysmithsharon@gmail.com
    2019-09-25

Screen Shot:
    <img width=“1097” alt=“trainPrintScreen.jpg” src=“PrintScreen.jpg”>
    ![screenshot of train](.\ScreenShot.png)

Working Demo:
     https://sstorysmith.github.io/Train-Scheduler/

Developer: Download Code and open index.html in a browser.


Overview
    Uses: Firebase and moment.js    
        * When adding trains, enter the following:    
            * Train Name    
            * Destination     
            * First Train Time -- in military time    
            * Frequency -- in minutes
  
        * Calculates when the next train will arrive relative to the current time.

        * Users from any client can view the same train information because the data is stored
             in Firebase.

App Design:
      Train schedules are added and stored in Firebase when the "Add to Schedule" button is clicked. Arrival Time is calculated and displayed on the screen. 

      Function ArrivalTime (startTime, interval, currentTime)
       uses Moment code to calculate and convert time formats and returns a time

Directory Structure:

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
│       |   |__ trainTracks.jpg
|       |
|       |__ js
|       └── main.js




