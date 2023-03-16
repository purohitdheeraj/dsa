String.prototype.mySubString = function () {
	const input = this;
	let subStringArr = [];
	for (let i = 0; i < input.length; i++) {
		let temp = "";
		for (let j = i; j < input.length; j++) {
			temp += input[j];
			subStringArr.push(temp);
		}
	}
	return subStringArr;
};

console.log("neog".mySubString());
