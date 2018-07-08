
import React from 'react';

import AppContext from '../context';
import loaderHOC from '../loaderHOC';
import TextStatelessComponent from '../text';
import ButtonComponent from '../button';

import './default.css';

const Article = (props) => {
	const { articles: { 0: { info = '', details: { date = '' } = {} } = {} } = {}, handleUpdate, changeArticle } = props;

	return (
		<AppContext.Consumer>
			{(userInfo) => (
				<section className="article-wrapper">
					<TextStatelessComponent className='app-title' info={info} />
					<TextStatelessComponent className='app-info' info={`${userInfo.displayName}, ${date}`} />
					<ButtonComponent onClick={handleUpdate} info={'Update'} />
					<ButtonComponent onClick={changeArticle} info={'Change'} />
				</section>
			)}
		</AppContext.Consumer>
	);

}

export default loaderHOC(Article);
