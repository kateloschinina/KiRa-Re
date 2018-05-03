import React, { Component } from 'react';

class Planet extends Component {
	render() {
		return (
			<img className="sphere" src={this.props.image} style={this.props.style} />
		);
	}
}

export default Planet;