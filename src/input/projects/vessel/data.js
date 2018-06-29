import planet from './vessel-planet.png'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import snake1 from './gallery/IMG_3138.jpg'
import snake2 from './gallery/IMG_3143.jpg'
import snake3 from './gallery/IMG_3189.jpg'


const projectPage = [
	{
		tag: 'header',
		text: 'vessel'
	},
	{
		tag: 'paragraph',
		text: '"Vessel" is a film project in the making that takes form of psyche-biographical visual map, in a narrative of a monomyth. It translates personal experiences into visionary archetypal forms. The following segments form parts of the narrative.',
	},
	{   
		tag: "video",
        url: "https://vimeo.com/152210782",
		highlight: 'Bird segment'
	},
	{   
		tag: "video",
        url: "https://vimeo.com/188573535",
		highlight: 'Sphere segment'
	},
	{   tag: 'gallery',
		highlight: 'Serpent',
		images: [
			{
				original: snake1,
				thumbnail: snake1,
			},
			{
				original: snake2,
				thumbnail: snake2,
			},
			{
				original: snake3,
				thumbnail: snake3,
			}
		]
	}
] 

export default {
	planet,
	projectPage
}