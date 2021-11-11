Countdown Timer

This project was built in React and displays a countdown timer. The criteria is laid out below and screenshots have been uploaded to Postimg.cc.

To start this project locally, open a terminal and, in the parent directory (make sure you're level with the package.json), run the two commands:
1) npm install
2) npm run start

You should see the project open to localhost:3000

Link to screenshot gallery: https://postimg.cc/gallery/v4MY9Sb/0934c9a1

Criteria:
1) The user should be able to enter a # of minutes (positive integer) and click a “Start”
button to initialize the countdown. Any character that is not a positive integer is not allowed.
2) Timer format: MM:SS

Screenshot for points 1 and 2
screenshots/pointsOneTwo.PNG
AND @ https://postimg.cc/gallery/v4MY9Sb/0934c9a1

3) The user should be able to pause & resume the countdown using pause / resume buttons.
4) While the countdown timer is active, the user should be able to speed up / slow down the speed at the following rates:
○ 1.0X (normal speed, selected by default)
○ 1.5X
○ 2X

Screenshot for points 3 and 4
screenshots/pointsThreeFour.PNG
screenshots/pointsThreeFour_2.PNG
AND @ https://postimg.cc/gallery/v4MY9Sb/0934c9a1


5) When half of the selected duration has been passed, display a string of text above
the countdown timer reading: “More than halfway there!”
6) When the countdown timer reaches 0, this text should change to: “Time’s up!”
7) When the countdown is within 20 seconds of ending, the countdown timer text should turn red.
8)  At 10 seconds, the text should start blinking. The red is slightly tranparent on altering numbers, so it appears to be blinking.

Screenshots for points 5-8
screenhots/pointFive.PNG
screenhots/pointSix.PNG
screenhots/pointSeven.PNG
screenhots/pointEight.PNG
AND @ https://postimg.cc/gallery/v4MY9Sb/0934c9a1


9) The time and date for when the countdown will reach 0:00 should be displayed for the local time in each office. This time adjusts to pauses and changes in the speed of the timer, which would cause the end time to change.

Screenshot for point 9
screenhots/pointNine.PNG
AND @ https://postimg.cc/gallery/v4MY9Sb/0934c9a1


