const getIndex = (arr, element) => {
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (item === element) {
			return i;
		}
	}
	return -1;
};

console.log(getIndex([1, 2, 3, 4], 5));
console.log(getIndex([1, 2, 3, 4], 4));
