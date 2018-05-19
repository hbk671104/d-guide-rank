import React from 'react'
import { View, Animated, Image, Dimensions } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable'
import { compose, withState, withProps } from 'recompose'

import NavigationBar from 'component/navbar'
import styles from './style'

const window = Dimensions.get('window')

@compose(
	withState('scrollY', 'setScrollY', () => new Animated.Value(0)),
	withProps(({ scrollY }) => ({
		opacityRange: scrollY.interpolate({
			inputRange: [0, 100],
			outputRange: [0, 1],
			extrapolate: 'clamp'
		})
	}))
)
export default class Main extends React.Component {
	handleCardClick = id => {
		this.props.navigation.navigate('Rank', { id })
	}

	renderBackground = () => (
		<Image
			style={{ width: window.width }}
			source={require('asset/wuyu.png')}
		/>
	)

	renderFixedHeader = () => {
		const { opacityRange } = this.props
		return (
			<NavigationBar
				title={{
					title: '无鱼排行'
				}}
			/>
		)
	}

	render() {
		const { scrollY } = this.props
		return (
			<View style={styles.container}>
				<ParallaxScrollView
					backgroundSpeed={10}
					parallaxHeaderHeight={400}
					renderBackground={this.renderBackground}
					renderFixedHeader={this.renderFixedHeader}
					scrollEventThrottle={16}
					onScroll={e => console.log(e)}
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
