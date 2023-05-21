const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
	const sumArr = [];
	// Copy your `addNums10` code here
	for (
		let i = increment;
		i <= increment * 10;
		i += increment
	) {
		const startTime = Date.now();
		sumArr.push(addNums(i));
		const endTime = Date.now();
		console.log(`${endTime - startTime}`);
	}
	// Then, add timing code
	// Your code here
	return sumArr;
}

function addManyNums10Timing(increment) {
	const sumArr = [];
	// Copy your `addNums10` code here
	for (
		let i = increment;
		i <= increment * 10;
		i += increment
	) {
		// console.time("timer");
		const startTime = Date.now();
		sumArr.push(addManyNums(i));
		const endTime = Date.now();
		// console.timeLog("timer");
		// console.timeEnd("timer");
		console.log(`${endTime - startTime}`);
	}
	// Then, add timing code
	// Your code here
	return sumArr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
