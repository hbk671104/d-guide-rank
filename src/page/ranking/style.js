import { StyleSheet } from 'react-native'

export const BORDER_RADIUS = 8

export default {
	container: {
		flex: 1
	},
	navbar: {
		icon: {
			marginLeft: 10
		},
		title: {
			fontSize: 18,
			fontWeight: 'bold',
			color: '#000'
		}
	},
	card: {
		container: {
			borderRadius: BORDER_RADIUS,
			borderWidth: 0,
			padding: 0,
			shadowRadius: 0,
			shadowOpacity: 0,
			shadowOffset: {
				height: 0,
				width: 0
			}
		},
		wrapper: {
			flex: 1,
			padding: 15
		},
		hover: {
			container: {
				position: 'absolute',
				...StyleSheet.absoluteFillObject,
				flexDirection: 'row'
			},
			percentage: {
				active: {
					backgroundColor: '#ffce58',
					borderTopLeftRadius: BORDER_RADIUS,
					borderBottomLeftRadius: BORDER_RADIUS
				},
				inactive: {
					borderTopRightRadius: BORDER_RADIUS,
					borderBottomRightRadius: BORDER_RADIUS
				}
			}
		},
		title: {
			fontSize: 16,
			fontWeight: 'bold'
		},
		subtitle: {
			marginTop: 8,
			fontSize: 12
		}
	}
}
