import React, { Component } from "react"
import "./Footer.css"
import facebook from "./../../images/icons/facebook_icon.png"
import instagram from "./../../images/icons/instagram_icon.jpeg"
import vimeo from "./../../images/icons/vimeo_icon.png"

class Footer extends Component {
    render() {
        return (
            <div className="footer--container">
				<div className="footer">
					<p>&copy; KiRa, 2018</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/kirazhi" target="_blank"><img  className="facebook" src={facebook} alt="facebook"/></a>
                        <a href="https://www.instagram.com/light_ray5" target="_blank"><img className="instagram" src={instagram} alt="instagram"/></a>
                        <a href="https://vimeo.com/user4844437" target="_blank"><img className="vimeo" src={vimeo} alt="vimeo"/></a>
                    </div>
				</div>
            </div>
        )
    }
}

export default Footer
