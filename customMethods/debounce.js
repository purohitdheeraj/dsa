const debounce = (fn, wait) => {
	let timer;

	return function () {
		let context = this;
		let args = arguments;

		console.log("prev timer", timer)

		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			clearTimeout(timer)
			console.log("timer", timer);
			fn.apply(context, args);
		}, wait);
	};
};

const getData = (args) => console.log("Hare Krishna", args);

const optimizedApiCall = debounce(getData, 1000);

optimizedApiCall("radhe radhe"); // time = 2s
optimizedApiCall("radhe radhe"); // time = 4s
// optimizedApiCall("radhe radhe shyam radhe");
