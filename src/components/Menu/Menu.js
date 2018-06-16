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
                    { this.props.showGraph ? (
                        <button disabled>
                            <img src={interactive} alt="interactive-inactive" />
                        </button>
                    ) : (
                        <button onClick={this.props.changeShowGraphState}>
                            <HoverImage src={interactive} hoverSrc={interactiveBold} />
                        </button>
                    ) }
                    { this.props.showGraph ? (
                        <button onClick={this.props.changeShowGraphState} >
                            <HoverImage src={allProjects} hoverSrc={allProjectsBold}/>
                        </button>
                    ) : (
                        <button disabled>
                            <img src={allProjects} alt="all-projects-inactive"/>
                        </button>
                    ) }
                </div>
                <a href="/about"><HoverImage src={about} hoverSrc={aboutBold} /></a>
            </div>
        )
    }
}

export default Menu