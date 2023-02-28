// Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string.

function replaceChar(str, c1, c2) {
	// initialize new empty str
	let newStr = "";
	for (let i = 0; i < str.toLowerCase().length; i++) {
		let char = str[i];
		if (char === c1) {
			newStr += c2;
		} else {
			newStr += char;
		}
	}
	return newStr;
}

//  @ string, c1, c2 -> str
// input: Krishna, a, i
// output: Krishni

console.log(replaceChar("Krishna", "a", "i"));
console.log(replaceChar("Krishna", "h", "n"));
