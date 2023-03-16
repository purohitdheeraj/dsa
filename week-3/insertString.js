function insertString(mainStr, inputStr, position) {
	let newStr = "";
	let left = mainStr.slice(0, position);
	let right = mainStr.slice(position);
	newStr = `${left}${inputStr} ${right}`;
	return newStr;
}

console.log(
	insertString(
		"We are doing some problem solving",
		"JavaScript",
		18
	)
);
