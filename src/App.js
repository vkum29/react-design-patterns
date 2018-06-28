import React, { Component } from 'react';
import logo from './logo.svg';
import config from './config.json';
import Container from './container/EmployeeContainer';
import './App.css';

class App extends Component {
  render() {
    return (
			<Container {...config}/>
    );
  }
}

export default App;
