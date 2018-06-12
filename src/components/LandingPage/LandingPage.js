import React, { Component } from "react"
import "./LandingPage.css"

import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"

import logo from "./../../images/logo/0-logo.png"
import pointer from "./../../images/background/pointer.png"

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="header">
                    <img className="front-page-logo animate-logo" src={logo} alt="logo" />
                    <img className="front-page-pointer animate-logo" src={pointer} alt="pointer" />
                    <h2 className="menu-item menu-item-first menu-item-selected">map of my consiousness</h2>
                    <h2 className="menu-item">dump of all projects</h2>
                    <h2 className="menu-item">about KiRa</h2>
                </div>
                {/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
                <Graph />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
