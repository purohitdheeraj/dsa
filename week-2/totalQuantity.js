// Question 2: Consider the data below. Get the total quantity of jeans and tshirt in an object.

const arr = [
	{
		category: "men",
		color: "blue",
		quantity: 5,
		item: "jeans",
	},
	{
		category: "women",
		color: "blue",
		quantity: 5,
		item: "jeans",
	},
	{
		category: "women",
		color: "blue",
		quantity: 6,
		item: "tshirt",
	},
	{
		category: "men",
		color: "blue",
		quantity: 2,
		item: "tshirt",
	},
];

// Expected Output:
// {
// jeansQuantity: 10,
// tshirtQuantity: 8
// }

let jeansAndTshirtQuantity = arr.reduce(
	(state, currItem) => {
		return currItem.item === "jeans"
			? {
					...state,
					jeansQuantity:
						currItem.quantity +
						state.jeansQuantity,
			  }
			: {
					...state,
					tshirtQuantity:
						currItem.quantity +
						state.tshirtQuantity,
			  };
	},
	{
		jeansQuantity: 0,
		tshirtQuantity: 0,
	}
);

let jeansAndTshirtQuantity1 = arr.reduce(
	(state, currItem) => {
		return currItem.item
			? {
					...state,
					[currItem.item]:
						currItem.quantity +
						state[currItem.item],
			  }
			: state;
	},
	{
		jeans: 0,
		tshirt: 0,
	}
);

console.log(jeansAndTshirtQuantity1);
