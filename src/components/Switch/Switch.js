import React, { Component } from 'react'
import './Switch.css'

import dot from "./../../images/background/dot.png"
import allProjects from "./../../images/menu/all-projects.png"

class Switch extends Component {	
	render() {
		return (
			<div className="switch__container">
				<img className="switch__rotating-dot" src={dot} alt="rotating-dot" />
				<img className="switch__text" src={allProjects} alt="all-projects-text" />
			</div>
		)
	}
}

export default Switch