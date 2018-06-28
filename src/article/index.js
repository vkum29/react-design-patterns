
import React from 'react';

import TextStatelessComponent from '../text';
import ButtonComponent from '../button';

const Article = (props) => {
	const { articles: { 0: { info = '', details: { author = '', date = '' } = {} } = {} } = {}, handleUpdate, changeArticle } = props;

	return (
		<React.Fragment>
			<TextStatelessComponent className='app-title' info={info} />
			<TextStatelessComponent className='app-info' info={`${author}, ${date}`} />
			<ButtonComponent onClick={handleUpdate} info={'Update'} />
			<ButtonComponent onClick={changeArticle} info={'Change'} />
		</React.Fragment>
	);

}













export default Article;
