'use strict';
const isAfternoon = require('./isAfternoon');
const isMorning = require('./isMorning');
const isNight = require('./isNight');

function greeting(time) {
	if(isMorning(time)) {
		return "Good Morning!";
	}
	else if(isAfternoon(time)) {
		return "Good Afternoon!";
	}
	else if(isNight(time)) {
		return "Good Night!";
	}
};

module.exports = greeting;
