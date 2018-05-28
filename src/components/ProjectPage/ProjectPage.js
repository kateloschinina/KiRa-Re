import React, { Component } from "react"
import ReactPlayer from "react-player"
import ImageGallery from "react-image-gallery"

import "./ProjectPage.css"
import input from "./../../../src/input/index"
import logo from "./../../images/logo/0-logo.png"

class ProjectPage extends Component {
    render() {
        const selectedProject = Object.keys(input.projects).find(key => {
            return (
                input.projects[key].name === this.props.match.params.projectName
            )
        })
        const pageData = input.projects[selectedProject].data.projectPage

        return (
            <div className="project-page">
                <div className="project-container">
                    <div className="link-to-home">
                        <a href="/">
                            <h2>back to ----></h2>
                            <img className="project-page-logo" src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className="project-description">
                        {pageData.map((pageElement, key) => {
                            switch (pageElement.tag) {
                                case "header":
                                    return (
                                        <h1 key={`header-${key}`}>
                                            {pageElement.text}
                                        </h1>
                                    )
                                case "paragraph":
                                    return (
                                        <p key={`paragraph-${key}`}>
                                            {pageElement.text}
                                        </p>
                                    )
                                case "video":
                                    return (
                                        <div key={`video-${key}`}>
                                            <p>{pageElement.highlight}</p>
                                            <ReactPlayer url={pageElement.url} />
                                        </div>
                                    )
                                case "gallery":
                                    return (
                                        <div key={`gallery-${key}`}>
                                            <p>{pageElement.highlight}</p>
                                            <ImageGallery items={pageElement.images} />
                                        </div>
                                    )
                                default:
                                    return (
                                        <p key={`paragraph-${key}`}>KiRa is awesome</p>
                                    )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectPage
