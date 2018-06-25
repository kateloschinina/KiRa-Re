import planet from './tricksters-planet.png'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import shadow from './gallery/shadow.jpg'
import shadows from './gallery/shadows.jpg'
import tricksters from './gallery/tricksters.jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'Tricksters'
	},
	{
		tag: 'paragraph',
		text: 'This installation was commissioned for Secret Cinema - "Red Shoes"'
	},
	{
		tag: 'gallery',
		highlight: 'Commissioned Projections',
		images: [
			{
				original: shadow,
				thumbnail: shadow,
				
		   }, 
		   {
			   original: shadows,
			   thumbnail: shadows,
			  
		  },
		  {
		   original: tricksters,
		   thumbnail: tricksters,
		   
		  }
		]
	}
]


export default {
	planet,
	projectPage
}