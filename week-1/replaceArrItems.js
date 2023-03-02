function replaceArrItems(arr, item1, item2) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let item = arr[i];
		if (item === item1) {
			newArr.push(item2);
		} else {
			newArr.push(item);
		}
	}
	return newArr;
}

console.log(
	replaceArrItems([1, 2, 3, 2, 5, 7, 8, 2, 3, 100], 2, 9)
);
