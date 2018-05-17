import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ImageGallery from 'react-image-gallery';

import './ProjectPage.css';
import projects from './../../../src/projects/index'
import flower from './../../projects/symbiosis/gallery/flower.jpg'

class ProjectPage extends Component {
	render() {
		const selectedProject = Object.keys(projects).find(key => {
			return projects[key].projectName === this.props.match.params.projectName
		})
		const pageData = projects[selectedProject].data.projectPage

		return (
			<div className="project-container">
			{ pageData.map(pageElement => {
				switch (pageElement.tag) {
					case 'header':
						return <h1>{pageElement.text}</h1>
						break
					case 'paragraph':
						return <p>{pageElement.text}</p>
					case 'video':
						return <div>
							<p>{pageElement.highlight}</p>
							<ReactPlayer url={pageElement.url} />
						</div>
					case 'gallery':
						return <div>
							<p>{pageElement.highlight}</p>
							<ImageGallery items={pageElement.images} />
						</div>
				}
			}) }
			</div>
		);
	}
}

export default ProjectPage;