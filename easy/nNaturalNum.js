/**
 *
 * @param {interger} int
 */

const getNaturalNumberSum = (int) => {
	// sum from 1 to int
	let sum = 0;
	// iterate till int
	for (let i = 1; i <= int; i++) {
		sum += i;
	}
	return sum;
};

const naturalNumberSum = getNaturalNumberSum(100);
console.log(naturalNumberSum);
