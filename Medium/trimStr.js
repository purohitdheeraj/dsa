// Write a program that removes the time from the given date string "Wed April 15, 7 pm". It should return only the date without the time.

function removeTime(dateStr) {
	const [date, time] = dateStr.split(",");
	return time.trim();
}

console.log(removeTime("Wed April 15, 7 pm"));
