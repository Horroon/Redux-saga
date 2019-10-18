import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAction from '../Redux/Actions/AddAction';

class counter extends Component {
	AddFunction = () => {
		this.props.AddAction();
	};
	render() {
		return (
			<div>
				<h3>Mouse Clicked:{this.props.store.result}</h3>
				<button onClick={() => this.AddFunction()}>Add</button>
				<button>Sub</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ store: state });
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ AddAction: AddAction}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(counter);
