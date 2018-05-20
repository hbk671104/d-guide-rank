import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')
export const PARALLAX_HEADER_HEIGHT = 300
export const BORDER_RADIUS = 8

export default {
	container: {
		flex: 1
	},
	nabbar: {
		image: {
			height: 40,
			width: 40
		}
	},
	image: {
		width: window.width,
		height: PARALLAX_HEADER_HEIGHT
	},
	card: {
		container: {
			padding: 0,
			borderRadius: BORDER_RADIUS,
			shadowOpacity: 0.1,
			shadowRadius: 8,
			shadowColor: 'black'
		},
		cover: {
			...StyleSheet.absoluteFillObject,
			backgroundColor: 'black',
			opacity: 0.5,
			borderRadius: BORDER_RADIUS
		},
		image: {
			width: window.width - 15 * 2,
			height: 200,
			borderRadius: BORDER_RADIUS,
			justifyContent: 'center',
			alignItems: 'center'
		},
		title: {
			color: 'white',
			textAlign: 'center'
		},
		subtitle: {
			marginTop: 10,
			fontSize: 20,
			color: 'white',
			textAlign: 'center'
		}
	}
}
