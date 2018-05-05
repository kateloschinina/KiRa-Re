import React, { Component } from 'react';

import Planet from './../Planet/Planet';
import logo from './../../images/logo/0-logo.png';

import projectBird from './../../projects/bird/planetSettings';

class App extends Component {
	render() {
		return (
			<div>
				<img className="front-page-logo" src={logo} />
				<Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} />
			</div>
		);
	}
}

export default App;
