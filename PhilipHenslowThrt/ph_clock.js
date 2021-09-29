/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 4

   Countdown Clock for Ticket Ordering
   Author: Boris Le
   Date:  10/22/2021

   Filename:   ph_clock.js

*/
/* ------------------------------------------------- */

'use strict';

/* declaration of variables to be used in the website */
var minsLeft = 30;
var secsLeft = 0;
var timeLeft = minsLeft*60 + secsLeft;
var clockiD = setInterval('countdown()',1000); /* changes the timer every second */

/* function used to calculate the countdown and change relevant element ids */
function countdown() {
  minsLeft = Math.floor(timeLeft/60);
  secsLeft = timeLeft - 60*minsLeft;
  var minsstring = addLeadingZero(minsLeft);
  var secsstring = addLeadingZero(secsLeft);
  document.getElementById('minutes').innerHTML = minsstring;
  document.getElementById('seconds').innerHTML = secsstring;
  checkTimer();
  timeLeft --;
}

/* simple function to stop the clock after the timer expires */
function stopClock(){
  document.getElementById('TimeHead').insertAdjacentHTML('beforeend', '<br/>(Order Expired)');
  clearInterval(clockiD);
}

/* The checkTimer() function tests whether there is any time left to make the
   ticket order. If the time left is 0, the stopClock() function is run;
   otherwise nothing happens and the program continues to run. */
function checkTimer() {
   if (timeLeft === 0) stopClock();
}


/* The addLeadingZero() function adds a leading zero to values which are less than 10 */
function addLeadingZero(num) {
   var numStr = (num < 10) ? ("0" + num) : "" + num;
   return numStr;
}
