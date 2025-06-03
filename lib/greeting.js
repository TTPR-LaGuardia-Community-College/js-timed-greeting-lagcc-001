'use strict';
const isAfternoon = require('./isAfternoon');
const isMorning = require('./isMorning');
const isNight = require('./isNight');

function greeting (){
	// Add Code here after you are done in the other lib folders, use isAfternoon, isMorning, & isNight functions in here...
	const time = new Date();
	const hours = time.getHours().toString().padStart(2, '0');
	const minutes = time.getMinutes().toString().padStart(2, '0');
	const seconds = time.getSeconds().toString().padStart(2, '0');
	console.log(`time: ${hours} ${minutes} ${seconds}`)

    if (isMorning(time)) {
        return "Good Morning!";
    } else if (isAfternoon(time)) {
        return "Good Afternoon!";
    } else if (isNight(time)) {
        return "Good Night!";
    }
};

console.log(greeting());

module.exports = greeting;
