import React, { Component } from 'react';
import logo from './images/logo/0-logo.png';
import Planet from './components/Planet/Planet';
import './App.css';

import projectBird from './projects/bird/planetSettings'

class App extends Component {
	render() {
		return (
			<div>
				<img className="front-page-logo" src={logo} />
				<Planet style={projectBird.style} mainImage={projectBird.mainImage} />
			</div>
		);
	}
}

export default App;
