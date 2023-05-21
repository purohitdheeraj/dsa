/**
 * @param {List[List[int]]} matrix
 * @param {List[int]}
 */

const walkAMatrix = (matrix) => {
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;

	const result = [];
	// track the nodes using variables
	let startRow = rowCount - 1;
	let startColumn = columnCount - 1;
	let endRow = 0;
	let endColumn = 0;


	
	while (startRow >= endRow && startColumn >= endColumn) {
		// move right (0,0) to (0,endColumn)
		for (
			let column = startColumn;
			column <= endColumn;
			column++
		) {
			result.push(matrix[startRow][column]);
		}

		// first row traced
		startRow--;
		// move down (1,3) to (endRow, 3)
		for (let row = startRow; row <= endRow; row++) {
			row;
			result.push(matrix[row][endColumn]);
		}

		// last column traced
		endColumn--;
		// move left (3,3) to (3, startColumn)
		if (endRow >= startRow) {
			for (
				let column = endColumn;
				column >= startColumn;
				column--
			) {
				result.push(matrix[endRow][column]);
			}
		}
		// last row traced
		endRow--;

		// jab value center me ayegi tab apna column value same hoga

		// move up(3,0) to (1,0)
		if (endColumn >= startColumn) {
			for (let row = endRow; row > startRow; row--) {
				result.push(matrix[row][startColumn]);
			}
			// first column traced
		}
		startColumn++;
	}

	return result;
};

const matrix = [
	[5, 6, 7],
	[4, 9, 8],
	[3, 2, 1],
];

console.log(walkAMatrix(matrix));
