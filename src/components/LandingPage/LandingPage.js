import React, { Component } from "react"
import "./LandingPage.css"

import Graph from "./../Graph/Graph"

import logo from "./../../images/logo/0-logo.png"

class App extends Component {
    render() {
        return (
            <div className="landing-page">
                <img className="front-page-logo" src={logo} alt="logo" />
                {/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
                <Graph />
            </div>
        )
    }
}

export default App
