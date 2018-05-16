import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

import './ProjectPage.css';

class ProjectPage extends Component {
	render() {
		const images = [
			{
				original: 'https://picsum.photos/200/300',
				thumbnail: 'https://picsum.photos/200/300'
			},
			{
				original: 'https://picsum.photos/200/300',
				thumbnail: 'https://picsum.photos/200/300'
			},
			{
				original: 'https://picsum.photos/200/300',
				thumbnail: 'https://picsum.photos/200/300'
			}
		];

		return (
			<div className="project-container">
				<h1>Symbiosis</h1>
				<hr></hr>
				<p>
					The project «Symbiosis» is an interactive installation experience. The aim is to merge technology with art to create an organic experience that connects people on a primordial level, through bringing awareness to the connecting principle of breath.
				</p>
				<p>
					Below is the development of the project from the recent to the first prototype. In the current developments we are using pressure sensors and specially designed seats to support posture and meditative experience, and developing synchronisation software that will simulate environmental response from collective synced breathing rhythm.
				</p>
				<p>
					Symbiosis #6 at Lightwaves, Salford Quays, Manchester December 2017
				</p>
				<ReactPlayer url='https://vimeo.com/251900220' />
				<ImageGallery items={images} />
			</div>
		);
	}
}

export default ProjectPage;