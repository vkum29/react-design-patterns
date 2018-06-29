
import React from 'react';

import loaderHOC from '../loaderHOC';
import TextStatelessComponent from '../text';
import ButtonComponent from '../button';

import './default.css';

const Article = (props) => {
	const { articles: { 0: { info = '', details: { author = '', date = '' } = {} } = {} } = {}, handleUpdate, changeArticle } = props;

	return (
		<section className="article-wrapper">
			<TextStatelessComponent className='app-title' info={info} />
			<TextStatelessComponent className='app-info' info={`${author}, ${date}`} />
			<ButtonComponent onClick={handleUpdate} info={'Update'} />
			<ButtonComponent onClick={changeArticle} info={'Change'} />
		</section>
	);

}

export default loaderHOC(Article);
