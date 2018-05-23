import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Graph from 'react-graph-vis'
import './LandingPage.css'

import logo from './../../images/logo/0-logo.png'

import input from './../../../src/input/index'
import graphData from './graph'

class App extends Component {
	state = {
		redirect: false,
		redirectTo: '/',
		projectProps: {}
	}

	render() {
		const events = {
			doubleClick: event => {
				const selectedProject = Object.keys(input).find(key => {
					return projects[key].id === event.nodes[0]
				})

				if (selectedProject) {
					this.setState({redirect: true})
					this.setState({redirectTo: `/${projects[selectedProject].projectName}`})
					this.setState({projectProps: projects[selectedProject].data.projectPage})
				}
			}
		}

		return (
			<div>
				<img className="front-page-logo" src={logo} alt="logo" />
				{/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
				{(this.state.redirect) ? <Redirect to={this.state.redirectTo} /> : null}
				<Graph graph={graphData.graph}
					options={graphData.options}
					events={events}
					style={{ height: "100vh" }} />
			</div>
		)
	}
}

export default App
