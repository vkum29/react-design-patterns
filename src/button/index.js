
import React, { Component } from 'react';
import './default.css';

class ButtonComponent extends Component {
	render(props) {
		const { className, info, onClick } = this.props;
		return <button className={className} onClick={onClick}>{ info }</button>
	}
};

export default ButtonComponent;
