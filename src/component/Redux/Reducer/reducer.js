const reducer = (state = { result: 0 }, action) => {
	switch (action.type) {
		case 'Add':
			return state.result + 1;
		case 'Subtract':
			return state.result - 1;
		default:
			return state;
	}
};
