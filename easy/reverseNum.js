const reverseNumber = (int) => {
	let result = "";
	let temp = int;

	while (result.length < String(int).length) {
		let numAtZeroIndex = temp % 10;
		let rem = Math.floor(temp / 10);
		temp = rem;

		result += numAtZeroIndex;
	}
	return result;
};

const reversedNumber = reverseNumber(32243);
console.log(reversedNumber);
