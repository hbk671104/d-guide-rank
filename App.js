import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Main from './src/page/main'
import Rank from './src/page/rank'

const RootStack = createStackNavigator(
	{
		Main,
		Rank
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
