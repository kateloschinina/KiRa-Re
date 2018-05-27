import React, { Component } from "react"
import "./LandingPage.css"

import Graph from "./../Graph/Graph"

import logo from "./../../images/logo/0-logo.png"
import pointer from "./../../images/background/pointer.png"

class App extends Component {
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
                <div className="instructions">
                    <p className="instructions-heading">how to navigate the map</p>
                    <p className="instructions-text">observe</p>
                    <p className="instructions-text">to see projects double click on the category</p>
                    <p className="instructions-text">to see project details double click on the project</p>
                    <p className="instructions-text">be happy</p>
                </div>
                {/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
                <Graph />
            </div>
        )
    }
}

export default App
