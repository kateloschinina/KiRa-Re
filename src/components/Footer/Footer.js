import React, { Component } from "react"
import "./Footer.css"
import facebook from "./../../images/icons/facebook_icon.png"
import instagram from "./../../images/icons/instagram_icon.jpeg"
import vimeo from "./../../images/icons/vimeo_icon.png"

class Footer extends Component {
    render() {
        const changeTo = this.props.show === "contactPage" ? "allProjects" : "contactPage"
        return (
            <div className="footer--container">
                <div className="footer">
                    <p className="contact" onClick={e => this.props.changeStateTo(e, changeTo)}>Contact</p>
                    <p>&copy; KiRa, 2018</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/kirazhi" target="_blank" rel="noopener noreferrer"><img className="facebook" src={facebook} alt="facebook" /></a>
                        <a href="https://www.instagram.com/light_ray5" target="_blank" rel="noopener noreferrer"><img className="instagram" src={instagram} alt="instagram" /></a>
                        <a href="https://vimeo.com/user4844437" target="_blank" rel="noopener noreferrer"><img className="vimeo" src={vimeo} alt="vimeo" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
