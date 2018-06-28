import React, { Component } from 'react';
import logo from './logo.svg';
import FunctionalComponent from './header';
import StatelessComponent from './text';
import StatefulComponent from './img';
import PureComponentFragment from './article';

import data from './config.json';

import './App.css';

class App extends Component {
  render() {
		return (
			<section className="app">
				<FunctionalComponent logo={logo} title='React design patterns' />

				<StatelessComponent className='app-intro' info='I am stateless component' />

				<StatefulComponent alt={`We are sorry, we could not to load image`} className='app-error' />

				<PureComponentFragment {...data} />

			</section>
    );
  }
}

export default App;
