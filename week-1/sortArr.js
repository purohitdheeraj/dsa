// Given an array of numbers, your function should return an array in the ascending order.
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

const sortArr = (arr) => {
	// iterate the arr - slow pointer
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			let num1 = arr[j];
			let num2 = arr[j + 1];

			if (num2 < num1) {
				[arr[j], arr[j + 1]] = [num2, num1];
			}
		}
	}

	return arr;
};

console.log(sortArr([100, 83, 32, 9, 45, 61]));
