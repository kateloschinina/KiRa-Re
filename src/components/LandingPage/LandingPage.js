import React, { Component } from "react"
import "./LandingPage.css"

import Menu from "./../Menu/Menu"
import AllProjectsPage from "./../AllProjectsPage/AllProjectsPage"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"

import logo from "./../../images/logo-background.png"

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.changeShowGraphState = this.changeShowGraphState.bind(this)
    }

    state = {
        showGraph: true
    }
    
    changeShowGraphState() {
        this.setState({ showGraph: !this.state.showGraph })
    }

    render() {
        return (
            <div className="landing-page">
                <img className="landing-page__background" src={logo} alt="logo" />
                <Menu changeShowGraphState={this.changeShowGraphState} showGraph={this.state.showGraph} />
                { this.state.showGraph ? <Graph /> : <AllProjectsPage /> }
                <Footer />
            </div>
        )
    }
}

export default LandingPage
