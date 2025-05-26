'use strict';
const isAfternoon = require('./isAfternoon');
const isMorning = require('./isMorning');
const isNight = require('./isNight');

function greeting (time){
	// Add Code here after you are done in the other lib folders, use isAfternoon, isMorning, & isNight functions in here...
	if (isMorning(time)) {
    return 'Good Morning!';
  } else if (isAfternoon(time)) {
    return 'Good Afternoon!';
  } else if (isNight(time)) {
    return 'Good Night!';
  } else {
    return 'Invalid hour'; // just a safe fallback, in case of invalid input
  }

};

module.exports = greeting;
