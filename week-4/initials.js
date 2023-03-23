// Given a name as an input string. Pick out the initial letter of each word and abbreviate the name. The sentence will contain only alphabetic words and no numbers or roman numerals.

// If your input is:
const input = "Emperor Bahadur Shah Zafar";

// Your Output should be:
// 'EBSZ'

const getInitials = (name) => {
	return name
		.split(" ")
		.map((str) => str[0])
		.join("");
};

console.log(
	getInitials(
		"Hare Krishna Hare Krishna Hare Ram Hare Ram"
	)
);
