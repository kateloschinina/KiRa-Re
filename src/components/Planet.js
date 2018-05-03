import React, { Component } from 'react';
import image from './../images/0-bird1.png'

class Planet extends Component {
	render() {
		return (
			<img className="sphere" src={image} />
		);
	}
}

export default Planet;