import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import AboutPage from './components/AboutPage/AboutPage'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/projects/:projectName" component={ProjectPage} />
				</div>
			</Router>
		)
	}
}

export default App
