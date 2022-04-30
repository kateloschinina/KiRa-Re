import planet from './box-planet.jpg'

// images
// IMPORT IMAGES FROM GALLERY USING THE FOLLOWING FORMAT
// import [imageName] from './gallery/[imageName].jpg'
import box from './gallery/box.jpg'
import Soiroff from './gallery/Soiroff.jpg'
import lightnight from './gallery/lightnight.jpg'

const projectPage = [
	{
		tag: 'header',
		text: 'Sound of Infinity'
	},

	{
		tag: 'paragraph',
		text: 'Sound of Infinity is an interactive two way mirror box. One person at a time walks into the space, activating it with their voice. As the lights are  sound activated, colour changing depending on the quality of the voice, the participant only sees their infinite reflection, while they are visible to the people outside. There is a speaker hidden inside that feeds back the sound in an echo effect creating a fully immersive cosmic transcendent experience. People are welcomed to use the space as an infinity portal for inner self expression and connection, while the outsiders become the voyeurs. Playing with ideas of space - physical and personal, Sound of Infinity explores our relationship with self-image and its projection, and on a deeper level, the experience of others and reality as an exploration of the fractal nature of the self. '
	},
	
		{
		tag: 'video',
		url: 'https://www.youtube.com/watch?v=GeuJK2IFI74',
		highlight: 'Sound of Infinity'
	},
	{
        tag: "gallery",
        highlight: "Sound of Infinity",
        images: [  
			{
                original: box,
                thumbnail: box,
                description: "@NoisilyFestival"
            },
            {
                original: lightnight,
                thumbnail: lightnight,
                description: "@LeedsLightNight"
    
            },
             {
                original: Soiroff,
                thumbnail: Soiroff,
                description: "@LeedsLightNight"
            },
          
  
        ],
    },
] 

export default {
	planet,
	projectPage
}