import React, { Component } from "react"
import "./LandingPage.css"

import Switch from "./../Switch/Switch"
import AllProjectsPage from "./../AllProjectsPage/AllProjectsPage"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"
import ProjectPage from "./../ProjectPage/ProjectPage"

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.changeStateTo = this.changeStateTo.bind(this)
    }

    state = {
        show: 'interactiveMap'
    }

    changeStateTo(e, name) {
        if (e.preventDefault) {
            e.preventDefault()
        }
        this.setState({ show: name })
    }

    renderContent() {
        switch (this.state.show) {
            case 'interactiveMap':
                return
            case 'allProjects':
                return <AllProjectsPage
                    changeStateTo={this.changeStateTo} />
            case 'about':
                return <ProjectPage 
                    project='about'
                    changeStateTo={this.changeStateTo} />
            default:
                return <ProjectPage 
                    project={this.state.show}
                    changeStateTo={this.changeStateTo} />
        }
    }

    render() {
        const isGraphHidden = !(this.state.show === 'interactiveMap')
        return (
            <div className="landing-page__background">
                <Switch />
                { this.renderContent() }
                <div className={`hidden-${isGraphHidden}`}>
                    <Graph
                        show={this.state.show}
                        changeStateTo={this.changeStateTo} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default LandingPage
