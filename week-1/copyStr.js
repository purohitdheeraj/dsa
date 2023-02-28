// copy small str to bigger str
function copyStr(str1, str2) {
	let newStr = str1;
	if (str1.length > str2.length) {
		newStr += str2;
	} else {
		newStr = str2 + str1;
	}
	return newStr;
}

console.log(copyStr("helloram", "krishna"));
