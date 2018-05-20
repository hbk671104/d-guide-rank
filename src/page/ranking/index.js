import React from 'react'
import { View, FlatList } from 'react-native'
import { Card, Text, Icon } from 'react-native-elements'

import NavigationBar from 'component/navbar'
import styles from './style'

export default class Ranking extends React.Component {
	state = {
		loading: true
	}

	keyExtractor = (item, index) => `${index}`

	handleBack = () => {
		this.props.navigation.goBack()
	}

	renderItem = ({ item }) => {
		return (
			<Card containerStyle={styles.card.container}>
				<Text>{item.name}</Text>
				<Text>{item.desc}</Text>
			</Card>
		)
	}

	render() {
		const item = this.props.navigation.getParam('item')
		return (
			<View style={styles.container}>
				<NavigationBar
					title={{ title: item.desc }}
					leftButton={
						<Icon
							containerStyle={styles.navbar.icon}
							name="arrow-back"
							onPress={this.handleBack}
						/>
					}
				/>
				<FlatList
					data={item.voters}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
				/>
			</View>
		)
	}
}
