
import React, {Component} from 'react';
import './default.css';
import TextStatelessComponent from '../text';

class ImgStatefulComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false
		}
	}

	handleError = () => {
		this.setState({ error: true });
	}

	render() {
		const { src = '', className = 'app-logo', alt = '' } = this.props;
		return this.state.error ? (
			<TextStatelessComponent className={className} info={alt} />
		) : (
			<img src={src} className={className} alt={alt} onError={this.handleError}/>
		)
	}

};

export default ImgStatefulComponent;
