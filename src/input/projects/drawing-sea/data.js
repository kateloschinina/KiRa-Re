import planet from './drawingsea-planet.png'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'

import animal from './gallery/animal.jpg'
import crack from './gallery/crack.jpg'
import firewaters from './gallery/firewaters.jpg'
import moumtaims from './gallery/moumtaims.jpg'
import openimg from './gallery/openimg.jpg'
import ripple from './gallery/ripple.jpg'
import sand1 from './gallery/sand1.jpg'
import sandwet from './gallery/sandwet.jpg'



const projectPage = [
	{
		tag: 'header',
		text: 'Drawings made by the Sea'
	},
	{
		tag: 'paragraph',
		text: '"To see the universe in a grain of sand'
	},

	{
		tag: 'paragraph',
		text: 'And eternity in an hour"'
	},
	{
		tag: 'gallery',
		highlight: 'Drawings made by the Sea',
		images: [
			{
				original: firewaters,
				thumbnail: firewaters
			},
			{
			   original: animal,
			   thumbnail: animal
			},
			{
				original: crack,
				thumbnail: crack
			},
			{
				original: moumtaims,
				thumbnail: moumtaims
			},
			{
				original: openimg,
				thumbnail: openimg
			},
			{
				original: ripple,
				thumbnail: ripple
			},
			{
				original: sand1,
				thumbnail: sand1
			},
			{
				original: sandwet,
				thumbnail: sandwet
			}
		]
	}
]

export default {
	planet,
	projectPage
}