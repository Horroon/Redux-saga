import React, { Component } from 'react';
import Store from '../component/Redux/Store/store';
import { Provider } from 'react-redux';
import App from './app';

export default class root extends Component {
	render() {
		return (
			<Provider store={Store}>
				<App />
			</Provider>
		);
	}
}
