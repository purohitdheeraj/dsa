var sentence = "Welcome to neoG Camp!";

// Expected Output
// emocleW ot Goen !pmaC

function reverseSentence(sentence) {
	let newSentence = "";
	let words = sentence.split(" ");
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		let reverseWord = "";
		for (let i = word.length - 1; i >= 0; i--) {
			reverseWord += word[i];
		}
		newSentence += reverseWord + " ";
	}
	return newSentence.trim(" ");
}

console.log(reverseSentence(sentence));
