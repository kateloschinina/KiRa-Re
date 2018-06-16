import React, { Component } from "react"
import HoverImage from "react-hover-image"
import "./Menu.css"

import about from "./../../images/menu/about.png"
import aboutBold from "./../../images/menu/about-bold.png"
import allProjects from "./../../images/menu/all-projects.png"
import allProjectsBold from "./../../images/menu/all-projects-bold.png"
import interactive from "./../../images/menu/interactive.png"
import interactiveBold from "./../../images/menu/interactive-bold.png"

class Menu extends Component {
    render() {
        return (
            <div className="menu__container">
                <div className="menu__appearance-switch">
                    <HoverImage src={interactive} hoverSrc={interactiveBold} />
                    <HoverImage src={allProjects} hoverSrc={allProjectsBold} />
                </div>
                <HoverImage src={about} hoverSrc={aboutBold} />
            </div>
        )
    }
}

export default Menu