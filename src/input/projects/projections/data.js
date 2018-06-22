import planet from './projections-planet.png'

// images
// IMPORT IMAGES FROM GALLER USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import contemplation from './gallery/contemplation-projection.jpg'
import elegies from './gallery/elegies.jpg'
import ovalspace from './gallery/ovalspace.jpg'
import secretcinema from './gallery/secretcinema13.jpg'
import unfashionshow from './gallery/unfashionshow.jpg'
import wordlife from './gallery/wordlife.jpg'
import aldwych from './gallery/aldwych.jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'Projections'
	},
	{
		tag: 'paragraph',
		text: '`I have created projection design for "Secret Cinema", LCO "Imagined Occasions" projecting onto gasometer and a tube train, for Wordlife 10th Birthday event, projected onto Sheffield Museum, for LSO St.Lukes and Savoy Hotel, and for numerous other events and performances.'

	},
	{
		tag: 'video',
		url: 'https://vimeo.com/203367727',
		highlight: 'Projections Showreel'
	},
	{
	 	tag: 'gallery',
	 	highlight: 'Commissioned Projections',
	 	images: [
	 		{
				 original: secretcinema,
				 thumbnail: secretcinema,
				 description: "Secret Cinema : Red Shoes"
			}, 
			{
				original: contemplation,
				thumbnail: contemplation,
				description: "Contemplation at St.Lukes"
		   },
		   {
			original: wordlife,
			thumbnail: wordlife,
			description: "Wordlife at Sheffield Museum"
	       },
	   {
		original: ovalspace,
		thumbnail: ovalspace,
		description: "LCO Imagined Occasions at Oval Space"
   },
   {
	original: aldwych,
	thumbnail: aldwych,
	description: "LCO Imagined Occasions at Aldwych Tube"
},
{
	original: elegies,
	thumbnail: elegies,
	description: "'Elegies' at the Commonwealth Institute"
},
{
	original: unfashionshow,
	thumbnail: unfashionshow,
	description: "Unfashion Show at Cochrane Theatre"
}
		]
	}
]

export default {
	planet,
	projectPage
}