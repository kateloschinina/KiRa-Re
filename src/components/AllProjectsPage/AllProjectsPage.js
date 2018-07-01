import React, { Component } from "react"

import "./AllProjectsPage.css"
import input from "./../../../src/input/index"
import Planet from "./../Planet/Planet"

import HoverImage from "react-hover-image"
import circleWithDot from "./../../images/icons/circle-with-dot.png"
import circleWithCross from "./../../images/icons/circle-with-cross.png"

class AllProjectsPage extends Component {
    render() {
        return (
            <div className="all-project-page">
                <div className="all-project-page__container">
                    <div className="all-project-page__close">
                        <HoverImage src={circleWithDot} hoverSrc={circleWithCross} onClick={e => this.props.changeStateTo(e, 'interactiveMap')} />
                    </div>
                    <div className="all-project-page__content">
                        {input.projects.map((project, key) => {
                            return <div className="planet__container" onClick={e => this.props.changeStateTo(e, project.name)}>
                                        <Planet mainImage={project.data.planet}
                                            blurredImage={project.data.hoveredPlanet}
                                            key={`planet-${key}`} />
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllProjectsPage
