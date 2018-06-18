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
            <div className="menu__container">
                <HoverImage src={interactive} hoverSrc={interactiveBold} onClick={this.props.changeShowGraphState} />
                <img src={dot} alt="dot" />
                <HoverImage src={allProjects} hoverSrc={allProjectsBold} onClick={this.props.changeShowGraphState} />
                <img src={dot} alt="dot" />
                <a href="/about"><HoverImage src={about} hoverSrc={aboutBold} /></a>
            </div>
        )
    }
}

export default Menu