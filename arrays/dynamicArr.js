class DynamicArr {
	constructor() {
		(this.length = 0), (this.data = {});
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

		const deletedItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return deletedItem;
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

    // we have pop to remove element from end
    // use that
		if (index < 0 || index > this.length - 1) {
			return undefined;
		}

		const itemToBeRemoved = this.data[index];
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1];
		this.length--;
		return itemToBeRemoved;
	}
}

const array = new DynamicArr();

console.log(array.push("0"));
console.log(array.push("1"));
console.log(array.push("3"));
console.log(array.push("5"));
console.log(array.insert(1, "900"));
console.log(array);
console.log(array.remove(1, "900"));
console.log(array);
console.log(array.insert(1,500))
console.log(array);