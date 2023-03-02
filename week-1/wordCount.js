const wordCount = (sentence) => {
	let count = 0;
	let temp = "";
	for (let i = 0; i < sentence.length; i++) {
		let char = sentence[i];
		temp += char;
		temp;
		if (char === " ") {
			temp = "";
			count++;
		}
	}

	if (temp) count++;

	return count;
};

console.log(wordCount("Hare Krishna Hare Krishna"));
console.log(wordCount(""));
