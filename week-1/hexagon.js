// 3 * root 3 / 2 * base ^ 2

const getAreaOfHexagon = (base) => {
	return ((3 * Math.sqrt(3)) / 2) * base ** 2;
};

console.log(getAreaOfHexagon(10));
