import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import ImageGallery from 'react-image-gallery'

import './ProjectPage.css'
import input from './../../../src/input/index'

class ProjectPage extends Component {
	render() {
		console.log(this.props.match.params);
		console.log(input.projects);
		const selectedProject = Object.keys(input.projects).find(key => {
			return input.projects[key].name === this.props.match.params.projectName
		})
		const pageData = input.projects[selectedProject].data.projectPage

		return (
			<div className="project-container">
			{ pageData.map(pageElement => {
				switch (pageElement.tag) {
					case 'header':
						return <h1>{pageElement.text}</h1>
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
					default:
						return <p>KiRa is awesome</p>
				}
			}) }
			</div>
		)
	}
}

export default ProjectPage