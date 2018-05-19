import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-elements'
import styles from './style'

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text h3>Open up App.js to start working on your app!</Text>
				<Text h3>Changes you make will automatically reload.</Text>
				<Text h3>Shake your phone to open the developer menu.</Text>
			</View>
		)
	}
}
