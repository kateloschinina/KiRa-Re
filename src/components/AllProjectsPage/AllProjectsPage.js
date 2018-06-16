import React, { Component } from "react"

import "./AllProjectsPage.css"
import input from "./../../../src/input/index"
import Planet from "./../Planet/Planet"

class AllProjectsPage extends Component {
    render() {
        console.log(input.projects);
        return (
            <div className="all-project-page__container">
                <div className="all-project-page__content">
                    {input.projects.map(project => {
                        return <a href={`/${project.name}`}><Planet mainImage={project.data.planet}
                            blurredImage={project.data.hoveredPlanet} /></a>
                    })}
                </div>
            </div>
        )
    }
}

export default AllProjectsPage
