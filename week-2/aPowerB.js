const getPower = (a, b) => Math.pow(a, b);

console.log(getPower(2, 3));

const getPower1 = (a, b) => {
	let powerResult = a;

	for (let i = 1; i <= b; i++) {
		powerResult *= i;
	}

	return powerResult;
};

console.log(getPower1(2, 3));
