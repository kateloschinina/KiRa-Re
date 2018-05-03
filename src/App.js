import React, { Component } from 'react';
import logo from './images/logo/0-logo.png';
import './App.css';

class App extends Component {
	render() {
		return (
			<div>
				<img className="front-page-logo" src={logo} />
			</div>
		);
	}
}

export default App;
