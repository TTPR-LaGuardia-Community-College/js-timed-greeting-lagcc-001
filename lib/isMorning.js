function isMorning(time){
	// Add Code here...
	if (time >= 6 && time <= 11) {
		return true;
	} else {
		return false;
	};
	// return "Good Morning!";
};

module.exports = isMorning;
