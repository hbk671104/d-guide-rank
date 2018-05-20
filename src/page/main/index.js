import React from 'react'
import {
	View,
	Animated,
	ImageBackground,
	Image,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { Card, Text } from 'react-native-elements'
import { compose, withState, withProps } from 'recompose'

import { rankings } from 'api'
import NavigationBar from 'component/navbar'
import styles, { PARALLAX_HEADER_HEIGHT, BORDER_RADIUS } from './style'

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
	state = {
		loading: true,
		rankingList: []
	}

	componentDidMount() {
		this.loadRankings()
	}

	loadRankings = async () => {
		try {
			const { body } = await rankings()
			this.setState({ rankingList: body.data })
		} catch (error) {
			console.log(error)
		} finally {
			this.setState({ loading: false })
		}
	}

	handleCardClick = id => {
		this.props.navigation.navigate('Rank', { id })
	}

	renderBackground = () => (
		<ImageBackground
			style={styles.image}
			source={require('asset/wuyu.png')}
		/>
	)

	renderFixedHeader = () => {
		const { opacityRange } = this.props
		return (
			<Animated.View style={{ opacity: opacityRange }}>
				<NavigationBar
					title={
						<Image
							style={styles.nabbar.image}
							source={require('asset/wuyu.png')}
						/>
					}
				/>
			</Animated.View>
		)
	}

	renderCard = (r, i) => (
		<TouchableOpacity key={i} onPress={this.handleCardClick}>
			<Card containerStyle={styles.card.container}>
				<ImageBackground
					style={styles.card.image}
					imageStyle={{ borderRadius: BORDER_RADIUS }}
					source={require('asset/homer.jpg')}
				>
					<View style={styles.card.cover} />
					<Text style={styles.card.title} h3>
						{r.desc}
					</Text>
					<Text style={styles.card.subtitle} h4>
						{r.name}
					</Text>
				</ImageBackground>
			</Card>
		</TouchableOpacity>
	)

	render() {
		const { scrollY } = this.props
		const { rankingList, loading } = this.state
		return (
			<SafeAreaView
				style={styles.container}
				forceInset={{ top: 'never' }}
			>
				<AnimatedParallax
					backgroundSpeed={10}
					contentBackgroundColor={'#F8F8F8'}
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
					{loading ? (
						<ActivityIndicator style={{ marginTop: 15 }} />
					) : (
						rankingList.map(this.renderCard)
					)}
				</AnimatedParallax>
			</SafeAreaView>
		)
	}
}
