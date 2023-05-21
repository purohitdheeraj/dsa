class myArr {
	constructor() {
		this.length = 0;
		this.arr = {};
	}

	get(index) {
		return this.arr[index];
	}

	push(item) {
		this.arr[this.length] = item;
		this.length++;
	}

	pop() {
		const poppedItem = this.arr[this.length - 1];
		delete this.arr[this.length - 1];
		this.length--;
		return poppedItem;
	}

	insert(index, item) {
		// for (let i = this.length - 1; i >= index; i--) {
		// 	const item = this.arr[i];
		// 	this.arr[i + 1] = item;
		// }

		// length already increased by 1 so there
		// is space to shift the arr items by 1 spot
		this.length++;

		for (let i = this.length - 1; i > index; i--) {
			this.arr[i] = this.arr[i - 1];
		}

		if (item) {
			this.arr[index] = item;
		}
		return this.arr;
	}
	delete(index) {
		// this.length--;
		const removedItem = this.arr[index];

		for (let i = index; i < this.length - 1; i++) {
			this.arr[i] = this.arr[i + 1];
		}
		this.length--;
		delete this.arr[this.length];
		return this.arr;
	}
}

const newArr = new myArr();
newArr.push(8);
newArr.push(5);
newArr.push(4);
newArr.push(5);
newArr.push(8);
newArr.insert(2, 3);
newArr.delete(2);

console.log(newArr);
