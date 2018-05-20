import React from 'react'
import {
	View,
	FlatList,
	LayoutAnimation,
	InteractionManager
} from 'react-native'
import { Card, Text, Icon } from 'react-native-elements'

import { rankItem } from 'api'
import NavigationBar from 'component/navbar'
import styles from './style'

export default class Ranking extends React.Component {
	state = {
		data: null,
		loading: false
	}

	componentDidMount() {
		this.loadRankingItem()
	}

	loadRankingItem = async () => {
		try {
			this.setState({ loading: true })
			const item = this.props.navigation.getParam('item')
			const {
				body: { data }
			} = await rankItem(item.name)
			InteractionManager.runAfterInteractions(() => {
				LayoutAnimation.easeInEaseOut()
				this.setState({ data: this.preprocessData(data) })
			})
		} catch (error) {
			console.log(error)
		} finally {
			this.setState({ loading: false })
		}
	}

	preprocessData = tickers => {
		const votes = tickers.votes || []
		const items = tickers.items || []
		const avotes = items.map(i => {
			const count = votes.filter(a => a.item_name === i.item_name).length
			const sum = votes.length
			return {
				count,
				percent: count / sum * 100,
				name: i.item_name,
				desc: i.desc
			}
		})

		return avotes
	}

	keyExtractor = (item, index) => `${index}`

	handleBack = () => {
		this.props.navigation.goBack()
	}

	renderItem = ({ item }) => {
		return (
			<Card containerStyle={styles.card.container}>
				<View style={styles.card.wrapper}>
					<View style={[styles.card.hover.container]}>
						<View
							style={[
								styles.card.hover.percentage.active,
								{ flex: item.percent }
							]}
						/>
						<View
							style={[
								styles.card.hover.percentage.inactive,
								{ flex: 100 - item.percent }
							]}
						/>
					</View>
					<Text style={styles.card.title}>{item.name}</Text>
					<Text style={styles.card.subtitle}>{item.desc}</Text>
				</View>
			</Card>
		)
	}

	render() {
		const { data, loading } = this.state
		const item = this.props.navigation.getParam('item')
		return (
			<View style={styles.container}>
				<NavigationBar
					title={{
						title: item.desc,
						style: styles.navbar.title
					}}
					leftButton={
						<Icon
							containerStyle={styles.navbar.icon}
							name="arrow-back"
							onPress={this.handleBack}
						/>
					}
				/>
				<FlatList
					style={{ backgroundColor: '#F5F5F5' }}
					data={data}
					refreshing={loading}
					onRefresh={this.loadRankingItem}
					renderItem={this.renderItem}
					keyExtractor={this.keyExtractor}
				/>
			</View>
		)
	}
}
