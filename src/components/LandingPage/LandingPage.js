import React, { Component } from "react"
import "./LandingPage.css"

import Menu from "./../Menu/Menu"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"

import logo from "./../../images/logo-background.png"
import pointer from "./../../images/background/pointer.png"

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <img className="front-page-background" src={logo} alt="logo" />
                <Menu />
                {/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
                <Graph />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
