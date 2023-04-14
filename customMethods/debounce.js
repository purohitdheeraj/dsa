const debounce = (fn, wait) => {
	let timer;
	return function () {
		let context = this;
		let args = arguments;

		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(context, args);
		}, wait);
	};
};

const getData = (args) => console.log("Hare Krishna", args);

const optimizedApiCall = debounce(getData, 2000);

optimizedApiCall("radhe radhe"); // time = 2s
optimizedApiCall("radhe radhe"); // time = 4s
optimizedApiCall("radhe radhe shyam radhe");
