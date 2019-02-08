import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import LandingPage from './components/LandingPage/LandingPage'
import ProjectPage from './components/ProjectPage/ProjectPage'

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" exact component={LandingPage} />
					<Route path="/KiRa-Re/" exact component={LandingPage} />
					<Route exact path="/projects/:projectName" component={ProjectPage} />
				</Switch>
			</Router>
		)
	}
}

export default App
