import { Dimensions } from 'react-native'

const window = Dimensions.get('window')
export const PARALLAX_HEADER_HEIGHT = 300

export default {
	container: {
		flex: 1
	},
	image: {
		width: window.width,
		height: PARALLAX_HEADER_HEIGHT
	},
	card: {
		container: {
			borderRadius: 8,
			borderWidth: 0,
			shadowOpacity: 0.1,
			shadowRadius: 8,
			shadowColor: 'black'
		}
	}
}
