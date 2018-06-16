import planet from "./symbiosis-planet.png"

// images
import breathing from "./gallery/breathing.jpg"
import flower from "./gallery/flower.jpg"
import icosahedron from "./gallery/icosahedron.jpg"

const projectPage = [
    {
        tag: "header",
        text: "Symbiosis"
    },
    {
        tag: "paragraph",
        text:
            "The project «Symbiosis» is an interactive biofeedback installation. Merging technology with art it creates a connective experience, through bringing awareness to the primordial action of breath."
    },
    {
        tag: "paragraph",
        text:
            "Using custom build software and sensors Symbiosis vidualises participant's breathing in moving LED lights."
    },

    {
        tag: "video",
        url: "https://vimeo.com/251900220",
        highlight:
            "Symbiosis #6 at Lightwaves, Salford Quays, Manchester December 2017"
    },

    {
        tag: "video",
        url: "https://vimeo.com/251900220",
        highlight:
            "Symbiosis #4 at Nowhere Festival, Spain, July 2017"
    },
    {
        tag: "gallery",
        highlight: "bla bla highlight",
        images: [
            {
                original: breathing,
                thumbnail: breathing
            },
            {
                original: flower,
                thumbnail: flower
            },
            {
                original: icosahedron,
                thumbnail: icosahedron
            },
    
    
    {
        tag: "paragraph",
        text:
            "The project «Symbiosis» is an interactive biofeedback installation. The aim is to merge technology with art to create an organic experience that connects people on a primordial level, through bringing awareness to the connecting principle of breath."
    },
    {
        tag: "paragraph",
        text:
            "The project «Symbiosis» is an interactive biofeedback installation. Merge technology with art to create an organic experience that connects people on a primordial level, through bringing awareness to the connecting principle of breath."
    },
    {
        tag: "gallery",
        highlight: "bla bla highlight",
        images: [
            {
                original: breathing,
                thumbnail: breathing
            },
            {
                original: flower,
                thumbnail: flower
            },
            {
                original: icosahedron,
                thumbnail: icosahedron
            }
            \
]

export default {
    planet,
    projectPage
}
