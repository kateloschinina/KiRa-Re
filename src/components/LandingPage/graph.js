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

// const nodes = [
//     // projects
//     { id: 1, shape: 'circularImage', image: projectBird.mainImage, size: 30 },
//     { id: 2, shape: 'circularImage', image: contemplation, size: 30 },
//     { id: 3, shape: 'circularImage', image: drawingsea, size: 30 },
//     { id: 4, shape: 'circularImage', image: echo, size: 30 },
//     { id: 5, shape: 'circularImage', image: elegies, size: 30 },
//     { id: 6, shape: 'circularImage', image: king, size: 30 },
//     { id: 7, shape: 'circularImage', image: nebula, size: 30 },
//     { id: 8, shape: 'circularImage', image: piano, size: 30 },
//     { id: 9, shape: 'circularImage', image: potosi, size: 30 },
//     { id: 10, shape: 'circularImage', image: shadow, size: 30 },
//     { id: 11, shape: 'circularImage', image: sphere, size: 30 },
//     { id: projects.symbiosis.id, shape: 'circularImage', image: projects.symbiosis.data.planet, size: 30 },
//     { id: 13, shape: 'circularImage', image: within, size: 30 },
//     { id: 14, shape: 'circularImage', image: polarbear, size: 30 },
//     { id: 15, shape: 'circularImage', image: painting, size: 30 },
//     { id: 16, shape: 'circularImage', image: tricksters, size: 30 },
//     { id: 17, shape: 'circularImage', image: ovalspace, size: 30 },
//     { id: 18, shape: 'circularImage', image: two, size: 30 },
//     { id: 19, shape: 'circularImage', image: recycle, size: 30 },
//     { id: 20, shape: 'circularImage', image: yurugi, size: 30 },
//     { id: 21, shape: 'circularImage', image: soundbath, size: 30 },
//     { id: 22, shape: 'circularImage', image: wordlife, size: 30 },
//     { id: 23, shape: 'circularImage', image: lifeinbalance, size: 30 },
//     { id: 24, shape: 'circularImage', image: serpent, size: 30 },
    
//     // categories
//     { id: 25, shape: 'circularImage', image: filmVideo, size: 40 },
//     { id: 26, shape: 'circularImage', image: fashion, size: 40 },
//     { id: 27, shape: 'circularImage', image: lco, size: 40 },
//     { id: 28, shape: 'circularImage', image: holographic, size: 40 },
//     { id: 29, shape: 'circularImage', image: projections, size: 40 },
//     { id: 30, shape: 'circularImage', image: musicVideo, size: 40 },
//     { id: 31, shape: 'circularImage', image: performance, size: 40 },
//     { id: 32, shape: 'circularImage', image: installation, size: 40 },
//     { id: 33, shape: 'circularImage', image: promovideos, size: 40 },
//     { id: 34, shape: 'circularImage', image: secretCinema, size: 40 },
//     { id: 35, shape: 'circularImage', image: vessel, size: 40 },
//     { id: 36, shape: 'circularImage', image: sound, size: 40 },
//     { id: 37, shape: 'circularImage', image: still, size: 40 },

//     // missing
//     { id: 38, shape: 'circular', label: 'rambert', size: 30 },
//     { id: 39, shape: 'circular', label: 'shinton', size: 30 },
//     { id: 40, shape: 'circular', label: 'animamundi', size: 30 },
//     { id: 41, shape: 'circular', label: 'stlukes', size: 30 },
//     { id: 42, shape: 'circular', label: 'aldwich', size: 30 },
//     { id: 43, shape: 'circular', label: 'ballet', size: 30 },
//     { id: 44, shape: 'circular', label: 'accord', size: 40 },
//     { id: 45, shape: 'circular', label: 'interactive', size: 40 },
//     { id: 46, shape: 'circular', label: 'mountain', size: 30 },
// ]

const edgesWeWant = [
    // installation
    { from: id('installation'), to: id('tricksters') },
    { from: id('installation'), to: id('symbiosis') },
    { from: id('installation'), to: id('accord') },

    // holographic
    { from: id('holographic'), to: id('performance') },
    { from: id('holographic'), to: id('animamundi') },
    { from: id('holographic'), to: id('filmVideo') },
    { from: id('holographic'), to: id('lifeinbalance') },

    // performance
    { from: id('performance'), to: id('lifeinbalance') },

    // still
    { from: id('still'), to: id('mountain') },
    { from: id('still'), to: id('serpent') },
    { from: id('still'), to: id('drawingsea') },
    { from: id('still'), to: id('filmVideo') },

    // sound
    { from: id('sound'), to: id('mountain') },
    { from: id('sound'), to: id('drawingsea') },

    // interactive
    { from: id('interactive'), to: id('accord') },
    { from: id('interactive'), to: id('symbiosis') },

    // accord
    { from: id('accord'), to: id('nebula') },

    // film video
    { from: id('filmVideo'), to: id('vessel') },
    { from: id('filmVideo'), to: id('promovideos') },
    { from: id('filmVideo'), to: id('projections') },
    { from: id('filmVideo'), to: id('animamundi') },

    // projections
    { from: id('projections'), to: id('secretCinema') },
    { from: id('projections'), to: id('lco') },
    { from: id('projections'), to: id('stlukes') },
    { from: id('projections'), to: id('soundbath') },
    { from: id('projections'), to: id('elegies') },
    { from: id('projections'), to: id('wordlife') },

    // lco
    { from: id('lco'), to: id('aldwich') },
    { from: id('lco'), to: 'ovalspace' },

    // secret cinema
    { from: id('secretCinema'), to: id('tricksters') },
    { from: id('secretCinema'), to: id('ballet') },

    // vessel
    { from: id('vessel'), to: id('serpent') },
    { from: id('vessel'), to: id('bird') },
    { from: id('vessel'), to: id('sphere') },

    // promo videos
    { from: id('promovideos'), to: id('musicVideo') },
    { from: id('promovideos'), to: id('fashion') },
    { from: id('promovideos'), to: id('rambert') },

    // music videos
    { from: id('musicVideo'), to: id('king') },
    { from: id('musicVideo'), to: id('polarbear') },
    { from: id('musicVideo'), to: id('echo') },
    { from: id('musicVideo'), to: id('piano') },

    // fashion
    { from: id('fashion'), to: id('recycle') },
    { from: id('fashion'), to: id('shinton') },
    { from: id('fashion'), to: id('yurugi') },
    { from: id('fashion'), to: id('two') },
]

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
