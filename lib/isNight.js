function isNight(time){
	// Add Code here...
	if (time >= 20 || time >= 1 && time <= 5) {
		return true;
	} else{
		return false;
	};
	// return "Good Night!"
};

module.exports = isNight;
