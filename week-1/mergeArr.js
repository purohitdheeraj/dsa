// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergeArr(arr1, arr2) {
	return [...arr1, ...arr2];
}

function mergeArr1(...res) {
	const newArr = [];
	res.forEach((item) => newArr.push(...item));
	return newArr;
}

console.log(mergeArr([1, 3, 5], [2, 4, 6]));
console.log(mergeArr1([1, 3, 5], [2, 4, 6]));
