function isAfternoon (time) {
	// Add Code here...
	if (time >= 12 && time <= 19) {
		return true;
	}else{
		return false;
	};
	// return "Good Afternoon!"
};

module.exports = isAfternoon;
