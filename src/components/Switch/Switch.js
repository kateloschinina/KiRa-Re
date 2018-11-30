import React, { Component } from 'react'
import './Switch.css'

import dot from "./../../images/background/dot.png"
import allProjects from "./../../images/menu/all-projects-sq.png"
import interactive from "./../../images/menu/interactive-sq.png"

class Switch extends Component {
	render() {
		const changeTo = this.props.show === "interactiveMap" ? "allProjects" : "interactiveMap"
		return (
			<div className="switch__container" onClick={e => this.props.changeStateTo(e, changeTo)}>
				<img className="switch__rotating-dot" src={dot} alt="rotating-dot" />
				{(this.props.show === "interactiveMap") ? (
					<img className="switch__text" src={allProjects} alt="all-projects-text" />
				) : (
					<img className="switch__text" src={interactive} alt="interactive-text" />
				)}
			</div>
		)
	}
}

export default Switch