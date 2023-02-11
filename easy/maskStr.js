// Write a program that masks all but the last four characters of the string "5565534276455423" to '#'

function maskStr(inputNum) {
	let maskedStr = "";
	let counter = 0;
	for (let i = inputNum.length - 1; i >= 0; i--) {
		counter += 1;
		if (counter <= 4) {
			maskedStr = "#" + maskedStr;
		} else {
			maskedStr = "*" + maskedStr;
		}
	}
	return maskedStr;
}

console.log(maskStr("5565534276455423"));
