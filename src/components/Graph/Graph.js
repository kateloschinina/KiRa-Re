import React, { Component } from "react"
import { Redirect } from "react-router"

import vis from "vis"
import "./Graph.css"

import graphData from "./graphHelpers"
import edgesWeWant from "./graphInput"

class App extends Component {
    constructor(props) {
        super(props)
        this.updateGraph = this.updateGraph.bind(this)
    }

    state = {
        redirect: false,
        redirectTo: "/",
        projectProps: {},
        nodesOpennessState: Array(graphData.howManyCategories)
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
                    console.log(this.state.nodesOpennessState);
                    edgesWeWant.filter(edge => edge.to).forEach(edge => {
                        if (edge.from === nodeId && !this.state.nodesOpennessState[edge.from]) {
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

                            this.state.nodesOpennessState[edge.from] = true
                        } else if(edge.from === nodeId && this.state.nodesOpennessState[edge.from] === true) {
                            try {
                                this.nodes.remove([
                                    {
                                        id: edge.to
                                    }
                                ])
                            } catch (error) {
                                console.log(error)
                            }

                            this.state.nodesOpennessState[edge.from] = false
                        }
                    })
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
