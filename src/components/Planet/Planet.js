import React, { Component } from 'react'
import './Planet.css'

class Planet extends Component {
	constructor(props) {
		super(props)
		this.state = {
			imgSrc: this.props.mainImage
		}
		this.handleMouseOver = this.handleMouseOver.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
	}

	handleMouseOver () {
		this.setState({
			imgSrc: this.props.blurredImage || this.props.mainImage
		})
	}
	
	handleMouseOut () {
		this.setState({
			imgSrc: this.props.mainImage
		})
	}
	
	render() {
		return (
			<img className="planet" alt="planet"
				onMouseOver={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
				src={this.state.imgSrc} />
		)
	}
}

export default Planet