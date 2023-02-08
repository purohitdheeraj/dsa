// Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word.

function removeSpaces(inputStr) {
	// let noSpaceStr = "";
	const wordsArr = inputStr.split(" ");
	return wordsArr.map((word) => word.trim()).join("");
}

function removeSpaces1(str) {
	let noSpaceStr = "";
	const words = str.split(" ");
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		noSpaceStr += word;
	}
	return noSpaceStr;
}

console.log(
	removeSpaces(
		"ram        radhe  shyam   Hare Krishna     "
	)
);

console.log(removeSpaces1("hari hari radhe shyam shyam"));
