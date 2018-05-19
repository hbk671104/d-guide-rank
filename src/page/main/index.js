import React from 'react'
import { View, Animated, Image } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import Touchable from 'react-native-platform-touchable'
import { compose, withState, withProps } from 'recompose'

import NavigationBar from 'component/navbar'
import styles, { PARALLAX_HEADER_HEIGHT } from './style'

const AnimatedParallax = Animated.createAnimatedComponent(ParallaxScrollView)

@compose(
	withState('scrollY', 'setScrollY', () => new Animated.Value(0)),
	withProps(({ scrollY }) => ({
		opacityRange: scrollY.interpolate({
			inputRange: [0, 150, 200],
			outputRange: [0, 0.5, 1],
			extrapolate: 'clamp'
		})
	}))
)
export default class Main extends React.Component {
	handleCardClick = id => {
		this.props.navigation.navigate('Rank', { id })
	}

	renderBackground = () => (
		<Image style={styles.image} source={require('asset/wuyu.png')} />
	)

	renderFixedHeader = () => {
		const { opacityRange } = this.props
		return (
			<Animated.View style={{ opacity: opacityRange }}>
				<NavigationBar
					title={{
						title: '无鱼排行'
					}}
				/>
			</Animated.View>
		)
	}

	render() {
		const { scrollY } = this.props
		return (
			<View style={styles.container}>
				<AnimatedParallax
					backgroundSpeed={10}
					parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
					renderBackground={this.renderBackground}
					renderFixedHeader={this.renderFixedHeader}
					scrollEventThrottle={16}
					onScroll={Animated.event(
						[
							{
								nativeEvent: {
									contentOffset: {
										y: scrollY
									}
								}
							}
						],
						{ useNativeDriver: true }
					)}
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
				</AnimatedParallax>
			</View>
		)
	}
}
