// Convert an object into an array. Write the convertToArray function.const convertToArray = () => {
// your code

// convertToArray({ name: "Jove", age: 10, noOfFriends: 5 })

// Expected Output:
// [["name", "Jove"], ["age", 10], ["noOfFriends", 5]]

const convertToArray = (obj) => {
	return Object.entries(obj);
};

const convertToArray1 = (obj) => {
	const entries = [];
	for (key in obj) {
		entries.push([key, obj[key]]);
	}
	return entries;
};

console.log(
	convertToArray1({
		name: "Jove",
		age: 10,
		noOfFriends: 5,
	})
);

console.log(
	convertToArray({
		name: "Jove",
		age: 10,
		noOfFriends: 5,
	})
);
