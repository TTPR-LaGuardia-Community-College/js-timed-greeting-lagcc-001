function isNight(time){
	// Add Code here...
	const now = new Date();
	const hours = now.getHours();

	if (hours > 19 && hours <= 5) {
	const formattedTime = String(hours).padStart('2',0);
	console.log(formattedTime);
	}
};

module.exports = isNight;
