import React, { Component } from "react"
import "./LandingPage.css"

import Menu from "./../Menu/Menu"
import AllProjectsPage from "./../AllProjectsPage/AllProjectsPage"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"
import ProjectPage from "./../ProjectPage/ProjectPage"

import logo from "./../../images/logo/logo-background.png"
import dot from "./../../images/background/dot.png"

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.changeStateToInteractive = this.changeStateToInteractive.bind(this)
        this.changeStateToAllProjects = this.changeStateToAllProjects.bind(this)
        this.changeStateToAbout = this.changeStateToAbout.bind(this)
    }

    state = {
        show: 'interactiveMap'
    }
    
    changeStateToInteractive() {
        this.setState({ show: 'interactiveMap' })
    }

    changeStateToAllProjects() {
        this.setState({ show: 'allProjects' })
    }

    changeStateToAbout() {
        this.setState({ show: 'about' })
    }

    changeSetToProject(name) {
        this.setState({ show: 'about' })
    }

    renderContent() {
        switch (this.state.show) {
            case 'interactiveMap':
                return <Graph show={this.state.show} />
                break
            case 'allProjects':
                return <AllProjectsPage
                    changeStateToInteractive={this.changeStateToInteractive}
                    changeStateToAllProjects={this.changeStateToAllProjects}
                    changeStateToAbout={this.changeStateToAbout}
                     />
                break
            case 'about':
                return <ProjectPage project='about'
                    changeStateToInteractive={this.changeStateToInteractive} />
                break
            default:
                return <ProjectPage project={this.state.show}
                    changeStateToInteractive={this.changeStateToInteractive}
                    changeStateToAllProjects={this.changeStateToAllProjects}
                    changeStateToAbout={this.changeStateToAbout} />
        }
    }

    render() {
        return (
            <div className="landing-page">
                <img className="landing-page__background" src={logo} alt="logo" />
                <img className="rotating-dot" src={dot} alt="rotating-got" />
                <Menu changeStateToInteractive={this.changeStateToInteractive}
                    changeStateToAllProjects={this.changeStateToAllProjects}
                    changeStateToAbout={this.changeStateToAbout}
                    show={this.state.show} />
                { this.renderContent() }
                <Footer />
            </div>
        )
    }
}

export default LandingPage
