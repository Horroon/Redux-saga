const reducer = (state = { result: 0 }, action) => {
	switch (action.type) {
		case 'Add_Async':
			return { ...state, result: state.result + 1 };
		case 'Subtract':
			return state.result - 1;
		default:
			return state;
	}
};

export default reducer;
