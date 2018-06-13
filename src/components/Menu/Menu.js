import React, { Component } from "react"
import HoverImage from "react-hover-image"
import "./Menu.css"

import about from "./../../images/menu/about.png"
import aboutBold from "./../../images/menu/about-bold.png"
import allProjects from "./../../images/menu/all-projects.png"
import allProjectsBold from "./../../images/menu/all-projects-bold.png"
import interactive from "./../../images/menu/interactive.png"
import interactiveBold from "./../../images/menu/interactive-bold.png"
import dot from "./../../images/menu/dot.png"

class Menu extends Component {
    render() {
        return (
            <div className="menu--container">
                <HoverImage src={interactive} hoverSrc={interactiveBold} />
                <img src={dot} />
                <HoverImage src={allProjects} hoverSrc={allProjectsBold} />
                <img src={dot} />
                <HoverImage src={about} hoverSrc={aboutBold} />
            </div>
        )
    }
}

export default Menu