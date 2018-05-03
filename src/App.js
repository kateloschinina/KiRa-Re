import React, { Component } from 'react';
import logo from './images/logo/0-logo.png';
import image from './images/0-bird1.png'
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<img className="front-page-logo" src={logo} />
				<img className="sphere" src={image} />
			</div>
		);
	}
}

export default App;
