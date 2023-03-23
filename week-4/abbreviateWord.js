// Write a program to abbreviate every word which are more than 5 letters in length, in a sentence. You can achieve this by counting the length in between the first and last letter of each word and then putting them in between.

// If your input sentence is:
const input =
	"You should know about accessibility and javascript";

// Your Output should be:
// ("You s4d know about a11y and j8t");
// for understanding: there are 11 characters between 'a' and 'y' in accessibility

const abbreviateWord = (word) => {
	if (word.length <= 5) {
		return word;
	}
	const firstLetter = word[0];
	const lastLetter = word[word.length - 1];
	const letterCount = word.slice(1, -1).length;
	return `${firstLetter}${letterCount}${lastLetter}`;
};

// console.log(abbreviateWord("radha-krishna"));
// console.log(abbreviateWord("accessibility"));

const abbreviateSentence = (sentence) => {
	return sentence
		.split(" ")
		.map(abbreviateWord)
		.join(" ");
};

console.log(
	abbreviateSentence(
		"You should know about accessibility and javascript"
	)
);

// optimized solution
const abbreviateWord1 = (word) => {
	return (
		word[0] + (word.length - 2) + word[word.length - 1]
	);
};

const abbreviateSentence1 = (sentence) => {
	return sentence
		.split(" ")
		.map((word) =>
			word.length > 5 ? abbreviateWord1(word) : word
		)
		.join(" ");
};

console.log(
	abbreviateSentence1(
		"You should know about accessibility and javascript"
	)
);
