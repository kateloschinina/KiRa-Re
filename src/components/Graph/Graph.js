import React, { Component } from "react"
import { Redirect } from "react-router"

import vis from "vis"
import "./Graph.css"

import graphData from "./graphHelpers"
import edgesWeWant from "./graphInput"

const nodesOpennessState = Array(graphData.howManyCategories)

class App extends Component {
    constructor(props) {
        super(props)
        this.updateGraph = this.updateGraph.bind(this)
    }

    state = {
        redirect: false,
        redirectTo: "/",
        projectProps: {},
        // nodesOpennessState: Array(graphData.howManyCategories)
    }

    initiateGraph(nodes, edges) {
        this.edges = new vis.DataSet()
        this.edges.add(graphData.graph.edges)
        this.nodes = new vis.DataSet()
        this.nodes.add(graphData.graph.nodes)
        this.updateGraph()
    } 

    componentDidMount() {
        const nodes = graphData.graph.nodes
        const edges = graphData.graph.edges       
        
        this.initiateGraph(nodes, edges)
    }

    componentDidUpdate() {
        this.updateGraph()
    }

    changeOpenessStateForNode(nodeId, value) {
        const statesCopy = [...this.state.nodesOpennessState]

        statesCopy[nodeId] = value

        this.setState({nodesOpennessState: statesCopy})
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

                if (nodeId > graphData.howManyCategories) {
                    if (nodeId <= graphData.allInputArray.length) {
                        this.setState({ redirect: true })
                        this.setState({
                            redirectTo: `/${
                                graphData.allInputArray[nodeId - 1].name
                            }`
                        })
                        this.setState({
                            projectProps:
                                graphData.allInputArray[nodeId - 1].data
                                    .projectPage
                        })
                    }
                } else {
                    if (nodesOpennessState[nodeId]) {
                        edgesWeWant.filter(edge => edge.to).forEach(edge => {
                            if(edge.from === nodeId) {
                                try {
                                    this.nodes.remove([
                                        {
                                            id: edge.to
                                        }
                                    ])
                                } catch (error) {
                                    console.log(error)
                                }
                            }
                        })

                        nodesOpennessState[nodeId] = false
                        // this.changeOpenessStateForNode(nodeId, false)
                    } else {
                        edgesWeWant.filter(edge => edge.to).forEach(edge => {
                            if (edge.from === nodeId) {
                                const nodeImage = edge.to > graphData.howManyCategories ? graphData.allInputArray[
                                    edge.to - 1
                                ].data.planet : graphData.allInputArray[
                                    edge.to - 1
                                ].image
    
                                const nodeSize = edge.to > graphData.howManyCategories ? 30 : 40
    
                                try {
                                    this.nodes.add([
                                        {
                                            id: edge.to,
                                            shape: "circularImage",
                                            image: nodeImage,
                                            size: nodeSize
                                        }
                                    ])
                                } catch (error) {
                                    console.log(error)
                                }
                            }

                            nodesOpennessState[nodeId] = true
                            // this.changeOpenessStateForNode(nodeId, true)
                        })
                    }
                }
            }
        }

        this.Network.on("doubleClick", events["doubleClick"])
    }

    render() {
        return (
            <div>
                {this.state.redirect ? (
                    <Redirect to={this.state.redirectTo} />
                ) : null}
                <div id="interactive-graph" />
            </div>
        )
    }
}

export default App
