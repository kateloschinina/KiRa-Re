import input from "./../../../src/input/index"

const allInputArray = [...input.categories, ...input.projects]

const id = nodeName => {
    return allInputArray.findIndex(element => element.name === nodeName) + 1
}

const edgesWeWant = [
    // dot
    { from: id("dot"), to: id("filmVideo") },
    { from: id("dot"), to: id("still") },
    { from: id("dot"), to: id("performance") },
    { from: id("dot"), to: id("installation") },
    { from: id("dot"), to: id("sound") },

    // 
    // film video
    { from: id("filmVideo"), to: id("projections") },
    { from: id("filmVideo"), to: id("promoVideos") },
    { from: id("filmVideo"), to: id("projects") },
    { from: id("filmVideo"), to: id("holographic") },

    // promo videos
    { from: id("promoVideos"), to: id("musicVideos") },
    { from: id("promoVideos"), to: id("fashion") },
    { from: id("promoVideos"), to: id("rambert") },
    { from: id("promoVideos"), to: id("vessel") },

    // holographic
    { from: id("holographic"), to: id("zsl") },
    { from: id("holographic"), to: id("animamundi") },
    { from: id("holographic"), to: id("lifeInBalance") },

    //
    // performance
    { from: id("performance"), to: id("lifeInBalance") },
    
    // 
    // installation
    { from: id("installation"), to: id("nebulae") },
    { from: id("installation"), to: id("tricksters") },
    { from: id("installation"), to: id("interactive") },
    
    // interactive
    { from: id("interactive"), to: id("symbiosis") },
    { from: id("interactive"), to: id("accord") },

    // 
    // still
    { from: id("still"), to: id("planets") },
    { from: id("still"), to: id("drawingsea") },

    // 
    // sound
    { from: id("sound"), to: id("planets") },

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
