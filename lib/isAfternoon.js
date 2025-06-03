function isAfternoon (time) {
	// Add Code here...
	const now = new Date();
	const hours = now.getHours();

	if (hours > 11 && hours <= 19) {
	const formattedTime = String(hours).padStart('2',0);
	console.log(formattedTime);
	}
};

module.exports = isAfternoon;
