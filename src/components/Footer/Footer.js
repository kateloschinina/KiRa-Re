import React, { Component } from "react"
import "./Footer.css"
import facebook from "./../../images/icons/facebook_icon.png"

class Footer extends Component {
    render() {
        return (
            <div className="footer--container">
				<div className="footer">
					<p>&copy; KiRa, 2018</p><a href="https://www.facebook.com/kirazhi" target="_blank"><img src={facebook} alt="facebook"/></a>
				</div>
            </div>
        )
    }
}

export default Footer
