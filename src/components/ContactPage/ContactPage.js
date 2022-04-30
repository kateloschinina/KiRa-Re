import React, { Component } from "react"
import "./ContactPage.css"

import HoverImage from "react-hover-image"
import { Link } from "react-router-dom"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import circleWithDot from "./../../images/icons/circle-with-dot.png"
import circleWithCross from "./../../images/icons/circle-with-cross.png"
import copyLink from "./../../images/icons/copy-link.png"

const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

class ContactPage extends Component {
	state = {
		copied: false,
		name: "",
		email: "",
		message: "",
	}

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="project-page">
				<div className="project-page__container">
					{this.props.changeStateTo ? (
						<div className="project-page__close">
							{this.props.match && this.props.match.params && this.props.match.params.projectName ? (
								<Link to="/">
									<HoverImage src={circleWithDot}
										hoverSrc={circleWithCross} />
								</Link>
							) : (
									<HoverImage src={circleWithDot}
										hoverSrc={circleWithCross}
										onClick={e => this.props.changeStateTo(e, 'interactiveMap')} />
								)}
						</div>
					) : null}
					<div className="project-page__copy-link">
						<CopyToClipboard text={`${window.location.origin}/projects/contactPage`}
							onCopy={() => this.setState({ copied: true })}>
							<img src={copyLink} alt="copy-icon" />
						</CopyToClipboard>
					</div>
					{this.state.copied ? (
						<div className="project-page__copied">
							<p className="project-page__note">copied</p>
						</div>
					) : ('')}
					<div className="project-page__content">
						<h1>I want to hear from you!</h1>
						<form onSubmit={this.handleSubmit}>
							<p>
								<label>What's your name? <input type="text" name="name" value={name} onChange={this.handleChange} /></label>
							</p>
							<p>
								<label>How can I contact you back? <input type="email" name="email" value={email} onChange={this.handleChange} /></label>
							</p>
							<p>
								<label>What's your message? <textarea name="message" value={message} onChange={this.handleChange}></textarea></label>
							</p>
							<p>
								<button type="submit">Send</button>
							</p>
						</form>
					</div>
				</div>
			</div>)
	}
}

export default ContactPage
