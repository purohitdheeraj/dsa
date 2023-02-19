/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
	smile: "😊",
	angry: "😠",
	party: "🎉",
	heart: "💜",
	cat: "🐱",
	dog: "🐕",
	elephant: "🐘",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
	// lowercase word starts and ends with ::
	let lowerCaseWord = word.toLowerCase().trim();
	let noColonWord = "";

	if (
		lowerCaseWord.startsWith(":") &&
		lowerCaseWord.endsWith(":")
	) {
		noColonWord = lowerCaseWord.slice(1, -1);

		return emojis[noColonWord]
			? emojis[noColonWord]
			: noColonWord;
	}

	return lowerCaseWord;
}

function emojifyWord1(word) {
	// in this case we already know that
	// we will return word that does not starts and ends with ":"
	if (!word.startsWith(":") && !word.endsWith(":"))
		return word;
	const slicedWord = word.slice(1, -1);
	// if word in emojis
	if (emojis[slicedWord]) {
		// yes: return emoji
		return emojis[slicedWord];
	} else {
		// no : return slicedWord
		return slicedWord;
	}
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
	return phrase.split(" ").map(emojifyWord1).join(" ");
}

console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyWord(":heart:"));
console.log(emojifyWord1(":flower:"));
console.log(emojifyWord1("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
