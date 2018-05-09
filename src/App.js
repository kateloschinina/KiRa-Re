import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import ProjectPage from './components/ProjectPage/ProjectPage';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/symbiosis" component={ProjectPage} />
				</div>
			</Router>
		);
	}
}

export default App;
