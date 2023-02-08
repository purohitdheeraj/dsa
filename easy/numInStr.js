// A program that reads a string and counts the number of characters present in the string

function countChar(str) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		count++;
	}
	return count;
}

function countChar1(str) {
	let count = 0;
	let trimmedStr = str.trim();
	for (let i = 0; trimmedStr[i] !== undefined; i++) {
		if (trimmedStr[i] !== " ") {
			count++;
		}
	}
	return count;
}

console.log(countChar("Jagannath"));
console.log(countChar1("Jagannath"));
