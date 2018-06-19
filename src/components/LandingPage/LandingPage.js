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
        this.changeStateTo = this.changeStateTo.bind(this)
    }

    state = {
        show: 'interactiveMap'
    }

    changeStateTo(e, name) {
        e.preventDefault();
        this.setState({ show: name })
    }

    renderContent() {
        switch (this.state.show) {
            case 'interactiveMap':
                return <Graph show={this.state.show} />
                break
            case 'allProjects':
                return <AllProjectsPage
                    changeStateTo={this.changeStateTo} />
                break
            case 'about':
                return <ProjectPage project='about'
                    changeStateTo={this.changeStateTo} />
                break
            default:
                return <ProjectPage 
                    project={this.state.show}
                    changeStateTo={this.changeStateTo} />
        }
    }

    render() {
        return (
            <div className="landing-page">
                <img className="landing-page__background" src={logo} alt="logo" />
                <img className="rotating-dot" src={dot} alt="rotating-got" />
                <Menu changeStateTo={this.changeStateTo}
                    show={this.state.show} />
                { this.renderContent() }
                <Footer />
            </div>
        )
    }
}

export default LandingPage
