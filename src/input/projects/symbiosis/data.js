import planet from "./symbiosis-planet.png"

// images
import breathing from "./gallery/breathing.jpg"
import flower from "./gallery/flower.jpg"
import leeds from "./gallery/leeds.jpg"
import inside from "./gallery/symbiosis-inside.jpg"
import moon from "./gallery/moon.jpg"
import lightwaves from "./gallery/symbiosis-lightwaves1.JPG"
import symjelly from "./gallery/symjelly.png"
import liverpool from "./gallery/Scocoon-Liv17.jpg"
import liv from "./gallery/symbiosis@liverpool.jpg"
import breathingme from "./gallery/breathingme.jpg"

const projectPage = [
    {
        tag: "header",
        text: "Symbiosis"
    },
    {
        tag: "paragraph",
        text:
            "The project «Symbiosis» is an interactive biofeedback installation. Merging technology with art it creates a connective experience, through bringing awareness to the breath."
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
        tag: "gallery",
        highlight: "Symbiosis 2017-2018",
        
        images: [
            
            {
                original: inside,
                thumbnail: inside,
                description: "@LeedsLightNight"
    
            },
             {
                original: leeds,
                thumbnail: leeds,
                description: "@LeedsLightNight"
            },
            {
                original: flower,
                thumbnail: flower,
                description: "center piece"
            },
            {
                original: lightwaves,
                thumbnail: lightwaves,
                description: "@Lightwaves, Salford Quays"
            },
        ],
    },
    {
        tag: "video",
        url: "https://vimeo.com/251900220",
        highlight:
            "Symbiosis #4 at Nowhere Festival, Spain, July 2017"
    },
    {
        tag: "gallery",
        highlight: "Symbiosis 2017",
        images: [   
            {
                original: breathing,
                thumbnail: breathing,
                description: "@Nowhere"
            },
            {
                original: symjelly,
                thumbnail: symjelly,
                description: "@Nowhere"
            },
            {
                original: moon,
                thumbnail: moon,
                description: "@Nowhere"
            },
        ]
    },
    {
        tag: "paragraph",
        text:
            "«Symbiosis» is in continuous development, originated from the nympth stage below, which was using belt sensors and two people installation. Now it had progressed to 8 people immersive dome with non invasive seat sensors."
    },
    {
        tag: "gallery",
        highlight: "Symbiosis 'Cocoon' 2015-2017",
        images: [
            {
                original: breathingme,
                thumbnail: breathingme
            },
            {
                original: liverpool,
                thumbnail: liverpool
            },
            {
                original: liv,
                thumbnail: liv
            }
        ]
    }
]

export default {
    planet,
    projectPage
}
