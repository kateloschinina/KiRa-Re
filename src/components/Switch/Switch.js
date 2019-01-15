import React, { Component } from 'react'
import './Switch.css'

import dot from "./../../images/background/dot.png"
import allProjects from "./../../images/icons/all-projects-icon.svg"
import interactive from "./../../images/icons/interactive-icon.svg"

class Switch extends Component {
	render() {
		const changeTo = this.props.show === "interactiveMap" ? "allProjects" : "interactiveMap"
		return (
			<div className="switch__container" onClick={e => this.props.changeStateTo(e, changeTo)}>
				<img className="switch__rotating-dot" src={dot} alt="rotating-dot" />
				{(this.props.show === "interactiveMap") ? (
					<img className="switch__icon" src={allProjects} alt="all-projects-text" />
				) : (
					<img className="switch__icon" src={interactive} alt="interactive-text" />
				)}
			</div>
		)
	}
}

export default Switch