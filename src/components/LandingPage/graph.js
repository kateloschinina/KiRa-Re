import input from './../../../src/input/index'
import edgesWeWant from './graphInput'

const nodeOptions = {
    categories: {
        size: 40,
        shape: 'circularImage'
    }
}

const allInputArray = [ ...input.categories ]

const id = (nodeName) => {
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

const nodes = [ ...categoriesNodes ]

const edges = edgesWeWant.filter(edge => edge.from > 0 && edge.to > 0).map(edge => {
    return { from: edge.from, to: edge.to }
})

const graphData = {
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
                border: '#222222',
                background: '#666666',
                highlight: {
                    border: '#222222',
                    background: '#666666'
                },
                hover: {
                    border: '#222222',
                    background: '#666666'
                }
            },
            font: { color:'#eeeeee' }
        },
        edges: {
            color: 'lightgray',
            width: 2,
            arrows: {
                to:     { enabled: false, scaleFactor: 1, type: 'bar' },
                middle: { enabled: false, scaleFactor: 1, type: 'bar' },
                from:   { enabled: false, scaleFactor: 1, type: 'bar' }
            }
        }
    }
}


export default graphData
