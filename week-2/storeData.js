const storeData = {
	women: {
		top: {
			id: "at12",
			availability: [
				{
					id: 1,
					color: "blue",
					quantity: 5,
					inStock: true,
				},
				{
					id: 2,
					color: "black",
					quantity: 3,
					inStock: true,
				},
			],
		},
		jeans: {
			id: "aj12",
			availability: [
				{
					id: 3,
					color: "dark blue",
					quantity: 3,
					inStock: false,
				},
				{
					id: 4,
					color: "dark blue",
					quantity: 5,
					inStock: true,
				},
				{
					id: 5,
					color: "black",
					quantity: 5,
					inStock: true,
				},
			],
		},
		purse: {
			id: "ap12",
			availability: [
				{
					id: 6,
					color: "red",
					quantity: 5,
					inStock: true,
				},
				{
					id: 7,
					color: "white",
					quantity: 0,
					inStock: false,
				},
			],
		},
	},
	men: {
		shirt: {
			id: "ms12",
			availability: [
				{
					id: 8,
					color: "yellow",
					quantity: 5,
					inStock: true,
				},
				{
					id: 9,
					color: "black",
					quantity: 3,
					inStock: true,
				},
			],
		},
		jeans: {
			id: "mj12",
			availability: [
				{
					id: 10,
					color: "blue",
					quantity: 0,
					inStock: false,
				},
				{
					id: 11,
					color: "black",
					quantity: 9,
					inStock: true,
				},
			],
		},
		wallet: {
			id: "mw12",
			availability: [
				{
					id: 12,
					color: "blue",
					quantity: 15,
					inStock: true,
				},
				{
					id: 13,
					color: "black",
					quantity: 10,
					inStock: true,
				},
			],
		},
	},
};

// 3a: Find and console the quantity of dark blue women jeans in stock.

const actionKeys = ["women", "jeans", "availability"];

// 3b: Get the total quantity of men’s wallet.

const user = {
	personalInfo: {
		name: "Michael Bluth",
		addresses: [{ city: "Sudden Valley" }],
	},
};

const getNestedObject = (nestedObj, pathArr) => {
	return pathArr.reduce(
		(obj, key) =>
			obj && obj[key] !== "undefined"
				? obj[key]
				: null,
		nestedObj
	);
};

const darkBlueJeans = (nestedObj, pathArr) => {
	return pathArr
		.reduce(
			(obj, key) =>
				obj && obj[key] !== undefined
					? obj[key]
					: null,
			nestedObj
		)
		.reduce(
			(acc, curr) =>
				curr.color === "dark blue"
					? curr.quantity + acc
					: acc,
			0
		);
};

// pass in your object structure as array of strings
const name = getNestedObject(user, [
	"personalInfo",
	"name",
]);
name;
// to access nested array, just pass in array index as an element the path array.
const city = getNestedObject(user, [
	"personalInfo",
	"addresses",
	0,
	"city",
]);
city;

const blueJeans = darkBlueJeans(storeData, actionKeys);
console.log(blueJeans);
