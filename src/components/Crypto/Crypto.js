import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

import { LinearGradient } from 'react-native-svg'

import doge from '../../../assets/doge.png'

const Crypto = () => {
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[
					'rgba(0,240,255,0.01)',
					'rgba(0,240,255,1 )',
					'rgba(0,240,255,0.01)',
				]}
				start={{ x: 1, y: 1 }}
				style={{ borderRadius: 10 }}>
				<View
				// style={{
				// 	height: 110,
				// 	width: '100%',
				// 	borderRadius: 10,
				// 	padding: 2,
				// 	flexDirection: 'row',
				// 	justifyContent: 'space-between',
				// } }
				>
					<Image source={doge} resizeMode='contain' />
					<Text>Hello Cheese</Text>
				</View>
			</LinearGradient>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 8,
		// marginLeft: 12,
		// marginRight: 12,
		// padding: 8,
	},
})

export default Crypto
