// actions, state, value
// reducer function
// initial State

const initialState = {
	count: 0,
	cake: true,
};

const state = [1, 2, 3, 4, 5];

const actions = [
	{ type: "ADD", by: 10 },
	{ type: "MINUS", by: 8 },
	{ type: "MULTIPLY", by: 13 },
	{ type: "DIVIDE", by: 2 },
	{ type: "EAT_CAKE" },
];

// state -> initialState
function reducer(state, action) {
	switch (action.type) {
		case "ADD": {
			return {
				...state,
				count: state.count + action.by,
			};
		}
		case "EAT_CAKE": {
			return { ...state, cake: false };
		}
		default: {
			return state;
		}
	}
}

let result = actions.reduce(reducer, initialState);
console.log(result);
