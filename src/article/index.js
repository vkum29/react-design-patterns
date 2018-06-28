
import React, {PureComponent} from 'react';

import TextStatelessComponent from '../text';
import ButtonComponent from '../button';

class ArticlePureComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			articles: [
				{
					info: props.info,
					details: {
						author: props.author,
						date: new Date()
					}
				}
			]
		};
	}

	handleUpdate = () => {
		const { 0: article } = this.state.articles;
		article.info = 'Updated article';
		this.setState({
			articles: this.state.articles
		}, () => {
			alert(JSON.stringify(this.state.articles));
		});
	}

	changeArticle = () => {
		this.setState({
			articles: [{ info: 'test', details: { author: 'anjaan', date: new Date() } }]
		}, () => {
			alert(JSON.stringify(this.state.articles));
		});
	}

	render() {
		const { info, details: { author, date } } = this.state.articles[0];

		return(
			<React.Fragment>
				<TextStatelessComponent className='app-title' info={info} />
				<TextStatelessComponent className='app-info' info={`${author}, ${date}`} />
				<ButtonComponent onClick={this.handleUpdate} info={'Update'} />
				<ButtonComponent onClick={this.changeArticle} info={'Change'} />
			</React.Fragment>
		);
	}
}

export default ArticlePureComponent;
