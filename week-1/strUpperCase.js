// str char to ascii .charcode
// b = String.fromCharCode(97) to char
// a-97  z-122
// A-65  Z-90
// d-32  d-32

function upperCaseChar(char) {
	let asciCode = char.charCodeAt(0);

	if (asciCode > 90 && asciCode <= 122) {
		asciCode -= 32;
	}
	return String.fromCharCode(asciCode);
}

function upperCaseStr(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		newStr += upperCaseChar(char);
	}
	return newStr;
}

console.log(upperCaseStr("hare krishna"));
