import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import NavigationBar from 'react-native-navbar'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable'
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

	renderStickyHeader = () => (
		<NavigationBar
			title={{
				title: 'Hello, world'
			}}
		/>
	)

	render() {
		return (
			<SafeAreaView
				style={styles.container}
				forceInset={{ top: 'never' }}
			>
				{/* {this.renderStickyHeader()} */}
				<ParallaxScrollView
					backgroundColor="pink"
					// contentBackgroundColor="pink"
					parallaxHeaderHeight={200}
					renderForeground={this.renderForeground}
					// stickyHeaderHeight={8}
					// renderStickyHeader={this.renderStickyHeader}
				>
					<Touchable onPress={this.handleCardClick}>
						<Card title="CARD WITH DIVIDER">
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card title="CARD WITH DIVIDER">
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
					<Touchable>
						<Card title="CARD WITH DIVIDER">
							<Text h4>text am I</Text>
						</Card>
					</Touchable>
				</ParallaxScrollView>
			</SafeAreaView>
		)
	}
}
