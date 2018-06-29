import React, { Component } from 'react';

import Text from '../text';

class renderCallback extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
	}

	componentDidMount = () => {
		this.simulateDynamicData(() => {
			this.setState({
				isLoggedIn: !this.state.isLoggedIn
			});
		}, 1000)
	}

	simulateDynamicData(cb, time = 500) {
		setTimeout(cb, time);
	}

	render = () => {
		return this.state.isLoggedIn ? (
			this.props.children(this.props.data)
		) : (
			<Text className='app-loading' info={'Please wait while we authenticate your details.'} />
		);
	}
}

export default renderCallback;

