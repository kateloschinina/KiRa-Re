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
            "The project «Symbiosis» is an interactive installation experience. The aim is to merge technology with art to create an organic experience that connects people on a primordial level, through bringing awareness to the connecting principle of breath."
    },
    {
        tag: "paragraph",
        text:
            "Below is the development of the project from the recent to the first prototype. In the current developments we are using pressure sensors and specially designed seats to support posture and meditative experience, and developing synchronisation software that will simulate environmental response from collective synced breathing rhythm."
    },
    {
        tag: "video",
        url: "https://vimeo.com/251900220",
        highlight:
            "Symbiosis #6 at Lightwaves, Salford Quays, Manchester December 2017"
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
        ]
    }
]

export default {
    planet,
    projectPage
}
