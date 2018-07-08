
import React from 'react';
import Image from '../img';

import './default.css';

const HeaderFunctionalComponent = (props) => (
	<header className="app-header">
		<Image src={props.logo} className={'app-logo'} alt='' />
		<h1 className="app-title">{props.title}</h1>
	</header>
);

export default HeaderFunctionalComponent;
