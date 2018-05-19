import React from 'react'
import NavigationBar from 'react-native-navbar'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const navBar = props => (
	<NavigationBar
		{...props}
		containerStyle={[styles.container, props.containerStyle]}
	/>
)

const styles = {
	container: {
		paddingTop: getStatusBarHeight()
	}
}

export default navBar
