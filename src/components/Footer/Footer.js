import React, { Component } from "react"
import "./Footer.css"
import facebook from "./../../images/icons/facebook_icon.png"

class Footer extends Component {
    render() {
        return (
            <div className="footer--container">
				<div className="footer">
					<p>kirazhi@gmail.com</p>
                    <p>(+44) 7787 506841</p>
                    <a href="https://www.facebook.com/kirazhi"><img src={facebook}  alt="facebook" /></a>
				</div>
            </div>
        )
    }
}

export default Footer
