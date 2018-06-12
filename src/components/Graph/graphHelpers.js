import input from "./../../../src/input/index"
import edgesWeWant from "./graphInput"

const nodeOptions = {
    categories: {
        size: 45,
        shape: "circularImage"
    }
}

const allInputArray = [...input.categories, ...input.projects]

const id = nodeName => {
    return allInputArray.findIndex(element => element.name === nodeName) + 1
}

const categoriesNodes = input.categories.map((category, key) => {
    return {
        id: id(category.name),
        shape: nodeOptions.categories.shape,
        image: category.image || category.name,
        size: nodeOptions.categories.size
    }
})

const nodes = [...categoriesNodes]

const edges = edgesWeWant
    .filter(edge => edge.from > 0 && edge.to > 0)
    .map(edge => {
        return { from: edge.from, to: edge.to }
    })

const graphData = {
    allInputArray,
    graph: {
        nodes,
        edges
    },
    options: {
        nodes: {
            borderWidth: 4,
            borderWidthSelected: 4,
            size: 30,
            color: {
                border: "#444",
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
        }
    }
}

export default graphData