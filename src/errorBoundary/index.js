
import React, { Component } from 'react';
import Text from '../text';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			message: ''
		}
	}

	componentDidCatch() {
		this.setState({
			error: true,
			message: "App has failed to run."
		});
	}

	render() {
		return this.state.error ? (
			<Text className='app-error' info={this.state.message} />
		) : (
			this.props.children
		)
	}
}

export default ErrorBoundary;
