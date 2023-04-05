class DynamicArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		if (this.length === 0) {
			return undefined;
		}

		const itemToBePopped = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return itemToBePopped;
	}
	insert(index, item) {
		if (index < 0 || index > this.length - 1) {
			return undefined;
		}

		this.length++;
		for (let i = this.length - 1; i > index; i--) {
			this.data[i] = this.data[i - 1];
		}
		this.data[index] = item;
		return this.length;
	}

	remove(index) {
		if (this.length === 0) {
			return undefined;
		}

		if (index < 0 || index > this.length - 1) {
			return undefined;
		}

		let itemToBeRemoved = this.data[index];
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
		return itemToBeRemoved;
	}
}

const array = new DynamicArray();

// push
console.log(array.push(10));
console.log(array.push(20));
console.log(array.push(30));
console.log(array.push(40));
console.log(array.push(50));

// array
console.log(array);

// get
console.log(array.get(3));
console.log(array.get(4));

// pop
console.log(array.pop());
console.log(array.pop());

console.log(array);
console.log(array.push(60));
console.log(array.push(70));
console.log(array);
// insert
console.log(array.insert(2, 890));
console.log(array);

// remove
console.log(array.remove(3));
console.log(array);
