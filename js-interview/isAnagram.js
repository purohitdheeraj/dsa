function isAnagram(str1, str2) {
	// * length not same then false
	if (str1.length !== str2.length) return false;

	// * length same and same num of chars then true
	const letterCount = {};

	for (let i = 0; i < str1.length; i++) {
		let char = str1[i];
		if (letterCount[char]) {
			letterCount[char] += 1;
		} else {
			letterCount[char] = 1;
		}
	}

	// console.log(letterCount);
	for (let i = 0; i < str2.length; i++) {
		let char = str2[i];
		if (!letterCount[char]) {
			return false;
		} else {
			letterCount[char] -= 1;
		}
	}
	letterCount;
	return true;
}

// console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("pop", "opp"));
// console.log(isAnagram("treasure", "measure"));
