import planet from './nebulae-planet.jpg'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import nebulae1 from './gallery/nebulae1.jpg'
import nebulae2 from './gallery/nebulae2.jpg'
import nebulae3 from './gallery/nebulae3.jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'Nebulae'
	},
	{
		tag: 'paragraph',
		text: 'These kinetic sculptures were created originally for Secret Cinema "Star Wars", then developed. In the video presented together with "Accord" interactive sound installation'
	},
	{
		tag: 'gallery',
		highlight: 'Nebulae',
		images: [
			{
				original: nebulae1,
				thumbnail: nebulae1,
				
		   }, 
		   {
			original: nebulae2,
			thumbnail: nebulae2,
			
	   },
	   {
		original: nebulae3,
		thumbnail: nebulae3,
		
   },
   {
	tag: 'video',
	url: 'https://vimeo.com/218715113',
	highlight: '"Nebulae" and "Accord"'
},



	
	   ]
   }
	
] 

export default {
	planet,
	projectPage
}