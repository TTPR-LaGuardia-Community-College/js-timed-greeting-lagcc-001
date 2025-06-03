function isMorning(time){
	// Add Code here...
	const now = new Date();
	const hours = now.getHours();

	if (hours > 5 && hours <= 11) {
	const formattedTime = String(hours).padStart('2',0);
	console.log(formattedTime);
	}
};

module.exports = isMorning;
