const protectEmail = (email) => {
	// your code here
	// split @
	// ([0].length / 2).slice()  ---- @+[1]
	const [name, domain] = email.split("@");
	let halfIndex = Math.floor(name.length / 2);
	let clippedName = name.slice(0, halfIndex);
	return `${clippedName}...@${domain}`;
};

a = protectEmail("akan@neog.camp");
// Expected Output: ak...@neog.camp
a;

b = protectEmail("akanksha@neog.camp");
// Expected Output: akan...@neog.camp
b;
