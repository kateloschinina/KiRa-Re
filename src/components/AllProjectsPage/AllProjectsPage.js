import React, { Component } from "react"

import "./AllProjectsPage.css"
import input from "./../../../src/input/index"
import Planet from "./../Planet/Planet"

class AllProjectsPage extends Component {
    render() {
        return (
            <div className="all-project-page__container">
                <div className="all-project-page__content">
                    {input.projects.map((project, key) => {
                        return <div className="planet__container" onClick={e => this.props.changeSetToProject(e, project.name)}>
                                    <Planet mainImage={project.data.planet}
                                        blurredImage={project.data.hoveredPlanet}
                                        key={`planet-${key}`} />
                                </div>
                    })}
                </div>
            </div>
        )
    }
}

export default AllProjectsPage
