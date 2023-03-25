const getFibonacci = (n) => {
	let x = -1;
	let y = 1;
	let z = x + y;
	while (z <= n) {
		console.log(z);
		x = y;
		y = z;
		z = x + y;
	}
};

const getFibonacci1 = (n) => {
	let x = -1,
		y = 1,
		z;
	for (let i = 0; i <= n; i++) {
		z = x + y;
		console.log(z);
		x = y;
		y = z;
	}
};

console.log(getFibonacci1(8));
