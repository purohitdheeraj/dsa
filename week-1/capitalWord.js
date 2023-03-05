const capitalWords = (sentence) => {
	return sentence
		.split(" ")
		.map(
			(word) => word[0].toUpperCase() + word.slice(1)
		)
		.join(" ");
};

const capitalWords1 = (sentence) => {
	let newSentence = "";
	const words = sentence.split(" ");
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		newSentence +=
			" " + word[0].toUpperCase() + word.slice(1);
	}
	return newSentence;
};

console.log(capitalWords("hare krishna"));
console.log(capitalWords1("hare krishna"));
