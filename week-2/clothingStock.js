const clothingStock = [
	{
		id: "0a1",
		color: "blue",
		category: "men shirt",
		item: "Regular Fit Men Shirt",
		inStock: true,
	},
	{
		id: "0a2",
		color: "black",
		category: "women top",
		item: "Regular Fit Women Top",
		inStock: true,
	},
	{
		id: "0a3",
		color: "grey",
		category: "men shirt",
		item: "Slim Fit Men Shirt",
		inStock: false,
	},
	{
		id: "0a4",
		color: "grey",
		category: "men tshirt",
		item: "Slim Fit Men Tshirt",
		inStock: false,
	},
	{
		id: "0a5",
		color: "red",
		category: "women top",
		item: "Slim Fit Women Top",
		inStock: true,
	},
	{
		id: "0a6",
		color: "yellow",
		category: "men shirt",
		item: "Casual Fit Men Shirt",
		inStock: true,
	},
	{
		id: "0a7",
		color: "orange",
		category: "men shirt",
		item: "Straight Fit Men Shirt",
		inStock: true,
	},
	{
		id: "0a8",
		color: "orange",
		category: "women top",
		item: "Casual Fit Women Top",
		inStock: false,
	},
];

function getTshirtColors(clothingStock) {
	let filteredArr = clothingStock.filter((cloth) => {
		return (
			cloth.category.split(" ")[0] === "men" &&
			cloth.inStock
		);
	});

	let filteredArr1 = clothingStock.filter(
		(cloth) => cloth.inStock
	);

  filteredArr1

	let map = new Set();

	filteredArr.forEach((cloth, index) => {
		map.add(cloth.color);
	});
	return map;
}

console.log(getTshirtColors(clothingStock));
