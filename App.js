import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Main from './src/page/main'
import Ranking from './src/page/ranking'

const RootStack = createStackNavigator(
	{
		Main,
		Ranking
	},
	{
		headerMode: 'none'
	}
)

class App extends Component {
	render() {
		return <RootStack />
	}
}

export default App
