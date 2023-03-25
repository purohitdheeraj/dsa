// 9*1
// 153 = 1*1*1 + 5*5*5 + 3*3*3

const armstrongNumber = (lowLimit, upperLimit) => {
	for (let i = lowLimit; i <= upperLimit; i++) {
		let sum = 0;
		let numLength = i.toString().length;
		let temp = i;

		// main logic
		while (temp > 0) {
			const remainder = temp % 10;
			sum += remainder ** numLength;
			temp = parseInt(temp / 10);
		}
		if (sum === i) {
			console.log(i);
		}
	}
};

console.log(armstrongNumber(8, 500));
