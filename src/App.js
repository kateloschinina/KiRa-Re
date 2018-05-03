import React, { Component } from 'react';
import logo from './images/logo/0-logo.png';
import Planet from './components/Planet/Planet';
import './App.css';

import imageProjectBird from './projects/bird/bird-main-image.png';
import settingsProjectBird from './projects/bird/planetSettings'

class App extends Component {
	render() {
		console.log(settingsProjectBird.style)
		return (
			<div>
				<img className="front-page-logo" src={logo} />
				<Planet image={imageProjectBird} style={settingsProjectBird.style} />
			</div>
		);
	}
}

export default App;
