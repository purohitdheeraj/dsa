// Input
// const input = [1, 2, 3, 4, 5];

// Output: buildProductArray(input)
// [2*3*4*5, 1*3*4*5, 1*2*4*5, 1*2*3*5, 1*2*3*4]
// [120, 60, 40, 30, 24];

const getProductArr = (arr) => {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		let tempProduct = 1;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j) {
				tempProduct *= arr[j];
			}
		}
		result.push(tempProduct);
	}
	return result;
};

const productArrResult = getProductArr([1, 2, 3, 4, 5]);
console.log(productArrResult);
