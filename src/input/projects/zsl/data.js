import planet from './zsl-planet.png'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'zsl'
	},
	{
		tag: 'paragraph',
		text: 'These are series of works commissioned by Musion Technology (musion.co.uk) and ZSL – Zoological Society of London to raise awareness of climate change and endangerement of species.'
	},
	{   
		tag: "video",
        url: "https://vimeo.com/28724188",
		highlight: 'Microcosm (Potosi Fish)'
	},
	{   
		tag: "video",
        url: "https://vimeo.com/30087846",
		highlight: 'Life in Balance'
	},
	{   
		tag: "video",
        url: "https://vimeo.com/29569734",
		highlight: 'Partula Snail'
	},
] 

export default {
	planet,
	projectPage
}