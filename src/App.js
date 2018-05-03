import React, { Component } from 'react';
import logo from './images/logo/0-logo.png';
import Planet from './components/Planet'
import './App.css';

import imageProjectBird from './images/0-bird1.png'

class App extends Component {
	render() {
		return (
			<div>
				<img className="front-page-logo" src={logo} />
				<Planet image={imageProjectBird}/>
			</div>
		);
	}
}

export default App;
