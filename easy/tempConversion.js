const tempConverter = (targetUnit, value) => {
	const unit = {
		celsius: () => (value - 32) * (5 / 9),
		fahrenheit: () => (value * 9) / 5 + 32,
	};

	const resultUnit = targetUnit[0].toUpperCase();

	return ` ${Math.floor(unit[targetUnit]())}°${resultUnit}`;
};

const fToC = tempConverter("celsius", 100);
const CToF = tempConverter("fahrenheit", 37);
console.log(CToF);
console.log(fToC);
