import input from './../../../src/input/index'
import projectBird from './../../projects/bird/planetSettings'

// projects
import contemplation from './../../images/contemplation.png'
import drawingsea from './../../images/drawingsea.png'
import echo from './../../images/echo.png'
import elegies from './../../images/elegies.png'
import king from './../../images/king.png'
import nebula from './../../images/nebula.png'
import piano from './../../images/piano.png'
import potosi from './../../images/potosi.png'
import shadow from './../../images/shadow.png'
import sphere from './../../images/sphere.png'
import within from './../../images/within.png'
import polarbear from './../../images/polarbear.png'
import painting from './../../images/painting.png'
import tricksters from './../../images/tricksters.png'
import ovalspace from './../../images/ovalspace.png'
import two from './../../images/two.png'
import recycle from './../../images/recycle.png'
import yurugi from './../../images/yurugi.png'
import soundbath from './../../images/soundbath.png'
import wordlife from './../../images/wordlife.png'
import lifeinbalance from './../../images/lifeinbalance.png'
import serpent from './../../images/serpent.png'

const nodeOptions = {
    categories: {
        size: 40,
        shape: 'circularImage'
    }
}

const allInputArray = [ ...input.categories ]

const id = (nodeName) => {
    const idWithThisName = allInputArray.findIndex(element => element.name === nodeName)
    return idWithThisName ? idWithThisName + 1 : false
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
