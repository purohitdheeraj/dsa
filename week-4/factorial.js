const getFactorial = (n) => {
	if (n < 0) {
		return -1;
	}

	if (n === 0) {
		return 1;
	}

	let fact = 1;
	for (let i = 1; i <= n; i++) {
		fact *= i;
	}
	return fact;
};

console.log(getFactorial(5));
