import React from 'react'
import { View } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable'
import NavigationBar from 'component/navbar'
import styles from './style'

export default class Main extends React.Component {
	handleCardClick = id => {
		this.props.navigation.navigate('Rank', { id })
	}

	renderForeground = () => (
		<View
			style={{
				height: 200,
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Text h1>Hello World!</Text>
		</View>
	)

	renderFixedHeader = () => (
		<NavigationBar
			title={{
				title: 'Hello, world'
			}}
		/>
	)

	render() {
		return (
			<View style={styles.container}>
				<ParallaxScrollView
					backgroundColor="pink"
					parallaxHeaderHeight={200}
					renderForeground={this.renderForeground}
					renderFixedHeader={this.renderFixedHeader}
				>
					<Touchable onPress={this.handleCardClick}>
						<Card containerStyle={styles.card.container}>
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card containerStyle={styles.card.container}>
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card containerStyle={styles.card.container}>
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card containerStyle={styles.card.container}>
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card containerStyle={styles.card.container}>
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
				</ParallaxScrollView>
			</View>
		)
	}
}
