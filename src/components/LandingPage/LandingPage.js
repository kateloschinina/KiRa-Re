import React, { Component } from "react"
import { Redirect } from "react-router"
// import Graph from 'react-graph-vis'
import vis from "vis"
import "./LandingPage.css"

import logo from "./../../images/logo/0-logo.png"

import graphData from "./graph"
import edgesWeWant from "./graphInput"

class App extends Component {
    constructor(props) {
        super(props)
        this.updateGraph = this.updateGraph.bind(this)
    }

    state = {
        redirect: false,
        redirectTo: "/",
        projectProps: {}
    }

    componentDidMount() {
        this.edges = new vis.DataSet()
        this.edges.add(graphData.graph.edges)
        this.nodes = new vis.DataSet()
        this.nodes.add(graphData.graph.nodes)
        this.updateGraph()
    }

    componentDidUpdate() {
        this.updateGraph()
    }

    updateGraph() {
        let container = document.getElementById("interactive-graph")
        let options = graphData.options

        this.Network = new vis.Network(
            container,
            Object.assign({}, this.props.graph, {
                edges: this.edges,
                nodes: this.nodes
            }),
            options
        )

        const events = {
            doubleClick: event => {
                const nodeId = event.nodes[0]
                edgesWeWant.filter(edge => edge.to).forEach(edge => {
                    if (edge.from === nodeId) {
                        if (edge.to > graphData.graph.nodes.length) {
                            try {
                                this.nodes.add([
                                    {
                                        id: edge.to,
                                        shape: "circularImage",
                                        image:
                                            graphData.allInputArray[edge.to - 1]
                                                .data.planet,
                                        size: 30
                                    }
								])
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    }
                })

                // if (selectedProject) {
                // 	this.setState({redirect: true})
                // 	this.setState({redirectTo: `/${input.projects[selectedProject].projectName}`})
                // 	this.setState({projectProps: input.projects[selectedProject].data.projectPage})
                // }
            }
        }

        this.Network.on("doubleClick", events["doubleClick"])
    }

    render() {
        return (
            <div>
                <img className="front-page-logo" src={logo} alt="logo" />
                {/* <Planet style={projectBird.style} mainImage={projectBird.mainImage} blurredImage={projectBird.blurredImage} /> */}
                {this.state.redirect ? (
                    <Redirect to={this.state.redirectTo} />
                ) : null}
                <div id="interactive-graph" />
            </div>
        )
    }
}

export default App
