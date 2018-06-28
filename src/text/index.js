
import React, { Component } from 'react';
import './default.css';

class TextStatelessComponent extends Component {
	render(props) {
		const { className, info } = this.props;
		return <p className={ className } >{ info }</p>
	}
};

export default TextStatelessComponent;
