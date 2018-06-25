import React, { Component } from "react"

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

        nodesOpennessState[0] = true
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

                if (nodeId > graphData.howManyCategories || nodeId === 1) {
                    if (nodeId <= graphData.allInputArray.length) {
                        this.props.changeStateTo(event, nodeId === 1 ? 'about' : graphData.allInputArray[nodeId - 1].name)
                    }
                } else {
                    if (nodesOpennessState[nodeId-1]) {
                        edgesWeWant.filter(edge => edge.to).forEach(edge => {
                            if(edge.from === nodeId) {
                                try {
                                    this.nodes.remove([
                                        {
                                            id: edge.to
                                        }
                                    ])
                                } catch (error) {
                                    console.log('Internal logging, the error catched was:', error.message)
                                }
                            }
                        })

                        nodesOpennessState[nodeId-1] = false
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
                                    console.log('Internal logging, the error catched was:', error.message)
                                }
                            }

                            nodesOpennessState[nodeId-1] = true
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
                <div id="interactive-graph" />
            </div>
        )
    }
}

export default App
