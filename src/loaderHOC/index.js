import React, { Component } from 'react';

import Text from '../text';

const loaderHOC = (WrapperComponent) => {

	class EnhancedComponent extends Component {
		render() {
			const isDataLoaded = !!this.props.articles && !!this.props.articles.length;
			return isDataLoaded ? (
				<WrapperComponent {...this.props} />
			): (
				<Text className='app-error app-loading' info={'Loading information please wait'} />
			)
		}

	};

	return EnhancedComponent;
}

export default loaderHOC;

