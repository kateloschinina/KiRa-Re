import React, { Component } from "react"
import ReactPlayer from "react-player"
import ImageGallery from "react-image-gallery"

import "./ProjectPage.css"
import input from "./../../../src/input/index"

import HoverImage from "react-hover-image"
import circleWithDot from "./../../images/icons/circle-with-dot.png"
import circleWithCross from "./../../images/icons/circle-with-cross.png"

class ProjectPage extends Component {
    render() {
        const projectAndOther = [...input.projects, ...input.other]
        const selectedProject = Object.keys(projectAndOther).find(key => {
            return (
                projectAndOther[key].name === this.props.project
            )
        })
        const pageData = projectAndOther[selectedProject].data.projectPage
        console.log(this.props.changeStateToInteractive);

        return (
            <div className="project-page">
                <div className="project-page__container">
                    <div className="project-page__close">
                        <HoverImage src={circleWithDot} hoverSrc={circleWithCross} onClick={e => this.props.changeStateToInteractive(e)} />
                    </div>
                    <div className="project-page__content">
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
                                            <p className='project-page__content__highlight'>{pageElement.highlight}</p>
                                            <ReactPlayer className='project-page__content__video' url={pageElement.url} />
                                        </div>
                                    )
                                case "gallery":
                                    return (
                                        <div key={`gallery-${key}`}>
                                            <p className='project-page__content__highlight'>{pageElement.highlight}</p>
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
