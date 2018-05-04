import React, { Component } from 'react';
import './Planet.css';

class Planet extends Component {
	render() {
		return (
			<img className="planet" src={this.props.mainImage} style={this.props.style} />
		);
	}
}

export default Planet;