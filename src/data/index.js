import Couch from '../assets/artifacts/couch.svg';
import Luna from '../assets/artifacts/luna.svg';

const artifacts = [
	{
		id: 1,
		name: "Couch",
		author: "moaw",
		alt: 'one-seat neon pink squishy couch',
		metadata: {
			story: "neon fluffy couch",
			date: "October 1, 2022",
			tags: "pink neon couch sofa cushion fluffy squishy",
		},
		width: 120,
		height: 120,
		position: {
			x: 550,
			y: 100, 
		},
		src: Couch,
	},
	{
		id: 2,
		name: "Luna",
		author: "Anu",
		alt: 'a black cat plushie with red eyes and a crescent moon',
		metadata: {
			story: "classic superhero icon",
			date: "October 31, 2022",
			tags: "luna sailor moon crescent black cat kitty plushie stuffed animal",
		},
		width: 50,
		height: 50,
		position: {
			x: 550,
			y: 100, 
		},
		src: Luna,
	}
];

export default artifacts;