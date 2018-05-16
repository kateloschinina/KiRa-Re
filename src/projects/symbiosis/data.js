import planet from './symbiosis-planet.png';

const projectPage = [
	{
		tag: 'header',
		text: 'Symbiosis'
	},
	{
		tag: 'paragraph',
		text: 'The project «Symbiosis» is an interactive installation experience. The aim is to merge technology with art to create an organic experience that connects people on a primordial level, through bringing awareness to the connecting principle of breath.'
	},
	{
		tag: 'paragraph',
		text: 'Below is the development of the project from the recent to the first prototype. In the current developments we are using pressure sensors and specially designed seats to support posture and meditative experience, and developing synchronisation software that will simulate environmental response from collective synced breathing rhythm.'
	},
	{
		tag: 'video',
		url: 'https://vimeo.com/251900220',
		tag: 'Symbiosis #6 at Lightwaves, Salford Quays, Manchester December 2017'
	},
	{
		tag: 'gallery',
		images: [
			{
				original: './gallery/breathing.jpg',
				thumbnail: './gallery/breathing.jpg'
			},
			{
				original: './gallery/flower.jpg',
				thumbnail: './gallery/flower.jpg'
			},
			{
				original: './gallery/icosahedron.jpg',
				thumbnail: './gallery/icosahedron.jpg'
			}
		]
	}
]

export default {
	planet,
	projectPage
};