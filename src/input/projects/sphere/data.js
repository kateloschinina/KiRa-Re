import planet from './sphere-planet.png'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import imageOne from './gallery/img_5601.jpg'
import imageTwo from './gallery/img_9577.jpg'
import imageThree from './gallery/john1.jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'Sphere'
	},
	{
		tag: 'paragraph',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		tag: 'paragraph',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	},
	{
		tag: 'video',
		url: 'https://vimeo.com/240879630',
		highlight: 'a dummy video from me'
	},
	{
		tag: 'gallery',
		highlight: 'gallery one',
		images: [
			{
				original: imageOne,
				thumbnail: imageOne
			},
			{
				original: imageTwo,
				thumbnail: imageTwo
			}
		]
	},
	{
		tag: 'gallery',
		highlight: 'gallery two',
		images: [
			{
				original: imageThree,
				thumbnail: imageThree
			}
		]
	}
]

// 

export default {
	planet,
	projectPage
}