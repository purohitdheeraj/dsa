const getLength = (arr) => {
	let length = 0;

	for (let i = 0; arr[i] !== undefined; i++) {
		length += 1;
	}

	return length || 0;
};

console.log(getLength([1, 2, 3, 4, 5]));

Array.prototype.getLength1 = function () {
	for (var i = 0; this[i] !== undefined; i++);
	return i;
};

console.log([1, 2, 3, 4].getLength1());
