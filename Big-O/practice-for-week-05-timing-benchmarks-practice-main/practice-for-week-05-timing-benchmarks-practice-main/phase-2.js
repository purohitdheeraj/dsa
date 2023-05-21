const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
	// Fill this in
	let sumArr = [];
	for (
		let i = increment;
		i <= increment * 10;
		i += increment
	) {
		sumArr.push(addNums(i));
	}
	return sumArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
	// Fill this in
	let sumArr = [];
	for (
		let i = increment;
		i <= increment * 10;
		i += increment
	) {
		sumArr.push(addManyNums(i));
	}
	return sumArr;
}

module.exports = [addNums10, addManyNums10];
