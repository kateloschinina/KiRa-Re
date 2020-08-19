import React, { Component } from "react"
import { withRouter } from "react-router-dom";
import ReactPlayer from "react-player"
import ImageGallery from "react-image-gallery"

import "./ProjectPage.css"
import input from "./../../../src/input/index"

import HoverImage from "react-hover-image"
import { Link } from "react-router-dom"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import circleWithDot from "./../../images/icons/circle-with-dot.png"
import circleWithCross from "./../../images/icons/circle-with-cross.png"
import copyLink from "./../../images/icons/copy-link.png"

class ProjectPage extends Component {
    state = {
        copied: false
    }

    render() {
        const projectAndOther = [...input.projects, ...input.other]

        const selectedProject = Object.keys(projectAndOther).find(key => {
            return (
                projectAndOther[key].name === (this.props.project || this.props.match.params.projectName)
            )
        })
        const pageData = projectAndOther[selectedProject].data.projectPage
        const origin = window.location.origin === 'http://localhost:3000' ? window.location.origin : 'www.dotkira.com'

        return (
            <div className="project-page">
                <div className="project-page__container">
                    <div className="project-page__close">
                        {(this.props.match && this.props.match.params && this.props.match.params.projectName) ||
                            (this.props.location.pathname !== '/') ? (
                            <Link to="/">
                                <HoverImage src={circleWithDot}
                                    hoverSrc={circleWithCross} />
                            </Link>
                        ) : (
                                <HoverImage src={circleWithDot}
                                    hoverSrc={circleWithCross}
                                    onClick={e => this.props.changeStateTo(e, 'interactiveMap')} />
                            )}
                    </div>
                    <div className="project-page__copy-link">
                        <CopyToClipboard text={`${origin}/projects/${this.props.project || this.props.match.params.projectName}`}
                            onCopy={() => this.setState({ copied: true })}>
                            <img src={copyLink} alt="copy-icon" />
                        </CopyToClipboard>
                    </div>
                    {this.state.copied ? (
                        <div className="project-page__copied">
                            <p className="project-page__note">copied</p>
                        </div>
                    ) : ('')}
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
                                case "sound":
                                    return (
                                        <div key={`sound-${key}`}>
                                            <p className='project-page__content__highlight'>{pageElement.highlight}</p>
                                            <ReactPlayer className='project-page__content__video' url={pageElement.url} />
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

export default withRouter(ProjectPage)
