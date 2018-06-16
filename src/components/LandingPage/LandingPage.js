import React, { Component } from "react"
import "./LandingPage.css"

import Menu from "./../Menu/Menu"
import AllProjectsPage from "./../AllProjectsPage/AllProjectsPage"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"

import logo from "./../../images/logo-background.png"

class LandingPage extends Component {
    state = {
        showGraph: false
    }

    render() {
        return (
            <div className="landing-page">
                <img className="landing-page__background" src={logo} alt="logo" />
                <Menu />
                { this.state.showGraph ? <Graph /> : <AllProjectsPage /> }
                <Footer />
            </div>
        )
    }
}

export default LandingPage
