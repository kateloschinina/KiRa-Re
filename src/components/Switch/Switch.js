import React, { Component } from 'react'
import dot from "./../../images/background/dot.png"
import './Switch.css'

class Switch extends Component {	
	render() {
		return (
			<div className="switch__container">
				<img className="switch__rotating-dot" src={dot} alt="rotating-dot" />
			</div>
		)
	}
}

export default Switch