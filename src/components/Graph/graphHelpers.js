import input from "./../../../src/input/index"
import edgesWeWant from "./graphInput"

const nodeOptions = {
    categories: {
        size: 40,
        shape: "circularImage"
    }
}

const allInputArray = [...input.categories, ...input.projects]

const id = nodeName => {
    return allInputArray.findIndex(element => element.name === nodeName) + 1
}

// const pioneerNodes = input.categories
//     .filter(category => category.pioneer === true)
//     .map((category, key) => {
//         return {
//             id: id(category.name),
//             shape: nodeOptions.categories.shape,
//             image: category.image || category.name,
//             size: key === 0 ? 60 : nodeOptions.categories.size
//         }
//     })

const categoryNodes = input.categories
    // .filter(category => category.pioneer === true)
    .map((category, key) => {
        return {
            id: id(category.name),
            shape: nodeOptions.categories.shape,
            image: category.image || category.name,
            size: key === 0 ? 60 : nodeOptions.categories.size
        }
    })

const pioneerNodes = input.projects
    // .filter(category => category.pioneer === true)
    .map((project, key) => {
        return {
            id: id(project.name),
            shape: nodeOptions.categories.shape,
            image: project.data.planet,
            size: 60
        }
    })

const nodes = [...pioneerNodes]

const edges = edgesWeWant
    .filter(edge => edge.from > 0 && edge.to > 0)
    .map(edge => {
        return { from: edge.from, to: edge.to }
    })

const graphData = {
    allInputArray,
    howManyCategories: input.categories.length,
    graph: {
        nodes,
        edges,
        categoryNodes
    },
    options: {
        nodes: {
            borderWidth: 4,
            borderWidthSelected: 4,
            size: 30,
            color: {
                border: "#ddd",
                background: "#000",
                highlight: {
                    border: "#888",
                    background: "#000"
                },
                hover: {
                    border: "#555",
                    background: "#000"
                }
            },
            font: { color: "#eeeeee" }
        },
        edges: {
            color: "lightgray",
            width: 2,       
            arrows: {
                to: { enabled: false, scaleFactor: 1, type: "bar" },
                middle: { enabled: false, scaleFactor: 1, type: "bar" },
                from: { enabled: false, scaleFactor: 1, type: "bar" }
            }
        },
        physics: {
            barnesHut: {
                avoidOverlap: 0.000001
            }
        }
    }
}

export default graphData
