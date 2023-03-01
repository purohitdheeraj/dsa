// Given a sentence, your function should reverse the order of characters in each word, keeping the same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseWord = (word) => {
	let newWord = "";
	for (let i = word.length - 1; i >= 0; i--) {
		let char = word[i];
		newWord += char;
	}
	return newWord;
};

const reverseInplace = (str) => {
	return str.split(" ").map(reverseWord).join(" ");
};

console.log(reverseInplace("hare krishna"));
console.log(reverseInplace("we are neoGrammers"));
