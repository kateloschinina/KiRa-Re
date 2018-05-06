import React, { Component } from 'react';
import './LandingPage.css';

// import Planet from './../Planet/Planet';
import logo from './../../images/logo/0-logo.png';
import filmVideo from './../../images/film-video.png';
import spiral from './../../images/spiral.png';

import Graph from 'react-graph-vis';

import projectBird from './../../projects/bird/planetSettings';

class App extends Component {
	render() {
		const graph = {
			nodes: [
				{ id: 1, shape: 'circularImage', image: spiral, size: 30 },
				{ id: 2, shape: 'circularImage', image: projectBird.mainImage, size: 30 },
				{ id: 3, shape: 'circularImage', image: filmVideo, size: 40 },
				{ id: 4, shape: 'circularImage', image: filmVideo, size: 40 },
				{ id: 5, shape: 'circularImage', image: projectBird.mainImage, size: 30 },
				{ id: 6, shape: 'circularImage', image: spiral, size: 60 }
			],
			edges: [
				{ from: 3, to: 1 },
				{ from: 3, to: 2 },
				{ from: 3, to: 4 },
				{ from: 4, to: 5 },
				{ from: 4, to: 6 }
			]
		};
		
		const options = {
			nodes: {
				borderWidth: 4,
				borderWidthSelected: 4,
				size: 30,
				color: {
					border: '#222222',
					background: '#666666',
					highlight: {
						border: '#222222',
						background: '#666666'
					},
					hover: {
						border: '#222222',
						background: '#666666'
					}
				},
				font: { color:'#eeeeee' }
			},
			edges: {
				color: 'lightgray',
				arrows: {
					to:     { enabled: false, scaleFactor: 1, type: 'bar' },
					middle: { enabled: false, scaleFactor: 1, type: 'bar' },
					from:   { enabled: false, scaleFactor: 1, type: 'bar' }
				}
			}
		};

		return (
			<div>
				<img className="front-page-logo" src={logo} alt="logo" />
				{/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
				<Graph graph={graph}
					options={options}
					style={{ height: "100vh" }} />
			</div>
		);
	}
}

export default App;
