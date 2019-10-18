const reducer = (state = { result: 0 }, action) => {
	switch (action.type) {
		case 'Add_Async':
			return { ...state, result: state.result + action.payload };
		case 'Subtract_Async':
			return { ...state, result: state.result - action.payload };
		default:
			return state;
	}
};

export default reducer;
