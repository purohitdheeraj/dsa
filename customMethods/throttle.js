const throttle = (cb, d) => {
	let timeout = null;
	let storedEvent = null;
	const eventHandler = (event) => {
		storedEvent = event;

		const shouldHandle = !timeout;

		if (shouldHandle) {
			console.log("executing", storedEvent);
			cb(storedEvent);

			storedEvent = null;

			timeout = setTimeout(() => {
				timeout = null;
				if (storedEvent) {
					eventHandler(storedEvent);
				}
			}, d);
		}
	};
	return eventHandler;
};

const throttledEvent = throttle(
	() => console.log("Ram Ram"),
	5000
);

console.log(throttledEvent("e1"));
console.log(throttledEvent("e2"));
console.log(throttledEvent("e3"));
