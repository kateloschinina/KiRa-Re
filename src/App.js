import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import LandingPage from './components/LandingPage/LandingPage'

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path="/" exact component={LandingPage} />
					<Route path="/KiRa-Re/" exact component={LandingPage} />
					<Route exact path="/projects/contactPage" component={LandingPage} />
					<Route exact path="/projects/:projectName" component={LandingPage} />
				</Switch>
			</Router>
		)
	}
}

export default App
