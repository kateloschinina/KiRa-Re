import React, { Component } from "react"
import "./LandingPage.css"

import Switch from "./../Switch/Switch"
import AllProjectsPage from "./../AllProjectsPage/AllProjectsPage"
import Graph from "./../Graph/Graph"
import Footer from "./../Footer/Footer"
import ProjectPage from "./../ProjectPage/ProjectPage"
import ContactPage from "./../ContactPage/ContactPage"

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.changeStateTo = this.changeStateTo.bind(this)
    }

    state = {
        show: 'interactiveMap'
    }

    componentDidMount() {
        if (this.props.match.params.projectName) this.setState({show: this.props.match.params.projectName})
        else if (this.props.location.pathname === '/projects/contactPage') this.setState({ show: 'contactPage' })
    }

    changeStateTo(e, name) {
        if (e.preventDefault) {
            e.preventDefault()
        }
        this.setState({ show: name })
    }

    renderContent() {
        switch (this.state.show) {
            case 'interactiveMap':
                return
            case 'allProjects':
                return <AllProjectsPage
                    changeStateTo={this.changeStateTo} />
            case 'about':
                return <ProjectPage
                    project='about'
                    changeStateTo={this.changeStateTo} />
            case 'contactPage':
                return <ContactPage changeStateTo={this.changeStateTo} />
            default:
                return <ProjectPage
                    project={this.state.show}
                    changeStateTo={this.changeStateTo} />
        }
    }

    render() {
        const isGraphHidden = !(this.state.show === 'interactiveMap')

        return (
            <div className="landing-page__background">
                <Switch
                    show={this.state.show}
                    changeStateTo={this.changeStateTo} />
                {this.renderContent()}
                <div className={`hidden-${isGraphHidden}`}>
                    <Graph
                        show={this.state.show}
                        changeStateTo={this.changeStateTo} />
                </div>
                <Footer
                    show={this.state.show}
                    changeStateTo={this.changeStateTo} />
            </div>
        )
    }
}

export default LandingPage
