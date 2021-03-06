import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './header';
import StatelessComponent from './text';
import StatefulComponent from './img';
import ArticleContainer from './articleContainer';
import RenderCallback from './renderCallback';
import Error from './errorBoundary/error';

import './App.css';

class App extends Component {
  render() {
		return(
			<section className="app">
				<FunctionalComponent logo={logo} title='React design patterns' />

				<StatelessComponent className='app-intro' info='I am stateless component' />

				<StatefulComponent alt={`We are sorry, we could not to load image`} className='app-error' />

				<RenderCallback>
					{() => (
						<ArticleContainer />
					)}
				</RenderCallback>
				<Error />
			</section>
    );
  }
}

export default App;
