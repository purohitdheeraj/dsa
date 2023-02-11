/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(strInput) {
	const strToUpper = strInput.toUpperCase();
	const wordsArr = strToUpper.split(" ");

	if (wordsArr.length > 1) {
		return wordsArr.join(" 😱 ") + "!";
	}

	return strToUpper + "!";
}

function panic1(strInput) {
	return (
		strInput.toUpperCase().split(" ").join(" 😱 ") + "!"
	);
}

// Test your function
console.log(panic("Jai Jagannath"));
console.log(panic("I'm almost out of coffee"));
console.log(panic("winter is coming"));
console.log(panic("Hello"));
console.log(
	panic("----------------------------------------------")
);

// Panic1
console.log(panic1("Hello"));
console.log(panic1("winter is coming"));
