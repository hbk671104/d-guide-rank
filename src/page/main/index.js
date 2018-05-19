import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable'
import styles from './style'

export default class App extends React.Component {
	handleCardClick = id => {
		this.props.navigation.navigate('Rank', { id })
	}

	render() {
		return (
			<View style={styles.container}>
				<ParallaxScrollView
					backgroundColor="pink"
					// contentBackgroundColor="pink"
					parallaxHeaderHeight={200}
					renderForeground={() => (
						<View
							style={{
								height: 200,
								justifyContent: 'center',
								alignItems: 'center'
							}}
						>
							<Text h1>Hello World!</Text>
						</View>
					)}
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
			</View>
		)
	}
}
