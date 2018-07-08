import React, { Component } from 'react';

import Article from '../article';

import data from '../config.json';

class ArticleContainer extends Component {
	componentDidMount = () => {
		this.simulateDynamicData(() => {
			this.setNewData([data]);
		}, 2000);
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

	simulateDynamicData (cb, time=500) {
		setTimeout(cb, time);
	}

	render() {
		return(
			<Article {...this.state} changeArticle={this.changeArticle} handleUpdate={this.updateArticle} />
		);
	}
}

export default ArticleContainer;

