import React, { Component } from 'react';

class Planet extends Component {
	render() {
		return (
			<img className="sphere" src={this.props.image} />
		);
	}
}

export default Planet;