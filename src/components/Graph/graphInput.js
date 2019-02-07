import input from "./../../../src/input/index"

const allInputArray = [...input.categories, ...input.projects]

const id = nodeName => {
    return allInputArray.findIndex(element => element.name === nodeName) + 1
}

const edgesWeWant = [
    // dot
    // { from: id("dot"), to: id("filmVideo") },
    // { from: id("dot"), to: id("still") },
    // { from: id("dot"), to: id("performance") },
    // { from: id("dot"), to: id("installation") },
    // { from: id("dot"), to: id("sound") },

    // 
    // film video
    { from: id("filmVideo"), to: id("projections") },
    { from: id("filmVideo"), to: id("promoVideos") },
    { from: id("filmVideo"), to: id("vessel") },
    { from: id("filmVideo"), to: id("holographic") },

    // promo videos
    { from: id("promoVideos"), to: id("musicVideos") },
    { from: id("promoVideos"), to: id("fashion") },
    { from: id("promoVideos"), to: id("rambert") },

    // holographic
    { from: id("holographic"), to: id("zsl") },
    { from: id("holographic"), to: id("animamundi") },
    { from: id("holographic"), to: id("lightbeing") },

    //
    // performance
    { from: id("performance"), to: id("lightbeing") },
    
    // 
    // installation
    { from: id("installation"), to: id("nebulae") },
    { from: id("installation"), to: id("tricksters") },
    { from: id("installation"), to: id("interactive") },
    
    // interactive
    { from: id("interactive"), to: id("symbiosis") },
    { from: id("interactive"), to: id("accord") },
    { from: id("interactive"), to: id("SoI")},

    // 
    // still
    { from: id("still"), to: id("planets") },
    { from: id("still"), to: id("drawingSea") },

    // 
    // sound
    { from: id("sound"), to: id("planets") },
    { from: id("sound"), to: id("voicelandscape") },

    // // lco
    // { from: id("lco"), to: id("aldwich") },
    // { from: id("lco"), to: id("ovalspace") },

    // // vessel
    // { from: id("vessel"), to: id("serpent") },
    // { from: id("vessel"), to: id("bird") },
    // { from: id("vessel"), to: id("sphere") },

    // // fashion
    // { from: id("fashion"), to: id("recycle") },
    // { from: id("fashion"), to: id("shinton") },
    // { from: id("fashion"), to: id("yurugi") },
    // { from: id("fashion"), to: id("two") }
]

export default edgesWeWant
