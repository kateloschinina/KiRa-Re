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
//     { id: 45, shape: 'circular', label: 'interative', size: 40 },
//     { id: 46, shape: 'circular', label: 'mountain', size: 30 },
// ]

const edges = [
    // installation
    { from: 32, to: 16 },
    { from: 32, to: projects.symbiosis.id },
    { from: 32, to: 44 },

    // holographic
    { from: 28, to: 31 },
    { from: 28, to: 40 },
    { from: 28, to: 25 },
    { from: 28, to: 23 },

    // performance
    { from: 31, to: 23 },

    // still
    { from: 37, to: 46 },
    { from: 37, to: 24 },
    { from: 37, to: 3 },
    { from: 37, to: 25 },

    // sound
    { from: 36, to: 46 },
    { from: 36, to: 3 },

    // interactive
    { from: 45, to: 44 },
    { from: 45, to: projects.symbiosis.id },

    // accord
    { from: 44, to: 7 },

    // film video
    { from: 25, to: 35 },
    { from: 25, to: 33 },
    { from: 25, to: 29 },
    { from: 25, to: 40 },

    // projections
    { from: 29, to: 34 },
    { from: 29, to: 27 },
    { from: 29, to: 41 },
    { from: 29, to: 21 },
    { from: 29, to: 5 },
    { from: 29, to: 22 },

    // lco
    { from: 27, to: 42 },
    { from: 27, to: 17 },

    // secret cinema
    { from: 34, to: 16 },
    { from: 34, to: 43 },

    // vessel
    { from: 35, to: 24 },
    { from: 35, to: 1 },
    { from: 35, to: 11 },

    // promo videos
    { from: 33, to: 30 },
    { from: 33, to: 26 },
    { from: 33, to: 38 },

    // music videos
    { from: 30, to: 6 },
    { from: 30, to: 14 },
    { from: 30, to: 4 },
    { from: 30, to: 8 },

    // fashion
    { from: 26, to: 19 },
    { from: 26, to: 39 },
    { from: 26, to: 20 },
    { from: 26, to: 18 },
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
