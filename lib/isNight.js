function isNight(time){
	// Add Code here...
	if(time >= 0 && time <= 5 || time >= 20 && time <=24) {
		return true;
	}

};

module.exports = isNight;
