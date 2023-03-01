// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1

const getMin = (...nums) => Math.min(...nums);

console.log(getMin(3, 5, 6, 7, 1));
