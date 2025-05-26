function isNight(time){
	// Add Code here...
		if((time >= 20 && time <= 23) || (time >=0 && time <=5)){
			return true;
		}
		return false;

};

module.exports = isNight;
