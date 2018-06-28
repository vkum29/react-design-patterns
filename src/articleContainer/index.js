import React, { Component } from 'react';

import Article from '../article';

import data from '../config.json';

class ArticleContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: [{}]
		};
	}

	componentDidMount = () => {
		this.setNewData([data]);
	}

	updateArticle = () => {
		const { 0: article } = this.state.articles;
		article.info = 'Updated article';
		this.simulateDynamicData(() => {
			this.setNewData(this.state.articles);
		});
	}

	changeArticle = () => {
		this.simulateDynamicData(() => {
			this.setNewData([{ info: 'test', details: { author: 'anjaan', date: new Date() } }]);
		});
	}

	setNewData = (data) => {
		this.setState({
			articles: data
		}, () => {
			console.log(this.state.articles);
		});
	}

	simulateDynamicData (cb) {
		setTimeout(cb, 500);
	}

	render() {
		return(
			<Article {...this.state} changeArticle={this.changeArticle} handleUpdate={this.updateArticle} />
		);
	}
}

export default ArticleContainer;

