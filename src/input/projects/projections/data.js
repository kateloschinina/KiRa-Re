import planet from './contemplation-planet.png'

// images
// IMPORT IMAGES FROM GALLER USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import contemplation from './gallery/contemplation-projection.jpg'

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
	url: 'https://vimeo.com/102670746',
	highlight: 'Formations'
	},
	{
	 	tag: 'gallery',
	 	highlight: '"Contemplation" at St.Lukes',
	 	images: [
	 		{
	 			original: contemplation,
	 			thumbnail: contemplation
			 }
			
	 	]
	 }
]

export default {
	planet,
	projectPage
}