import { useContext, useEffect, useState } from 'react'
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	View,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import AuthContext from '../Context'

const CustomButton = ({
	onPress,
	text,
	type = 'primary',
	bgColor,
	fgColor,
	post = false,
}) => {
	const { loginState, startLoading } = useContext(AuthContext)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (isLoading && loginState.isLoading === false) {
			toggleLoading(false)
		}
	}, [loginState])
	// This function will be triggered when the button is pressed
	const toggleLoading = value => {
		setIsLoading(value)
	}

	if (post) {
		return (
			<TouchableOpacity
				disabled={isLoading}
				onPress={() => {
					// initiate loading
					setIsLoading(true)
					startLoading()
					//
					onPress()
				}}
				style={{ width: '100%' }}>
				<LinearGradient
					colors={[
						'rgba(0,240,255,0.01)',
						'rgba(0,240,255,1 )',
						'rgba(0,240,255,0.01)',
					]}
					start={{ x: 1, y: 1 }}
					style={{
						borderRadius: 10,
						width: '100%',
						height: 72,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 2,
					}}>
					<View
						style={{
							backgroundColor: 'rgba(30, 32, 116,1)',
							padding: 16,
							flex: 1,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 10,
						}}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							{isLoading && (
								<ActivityIndicator
									size='large'
									color={type === 'primary' ? 'white' : 'black'}
									style={{ marginRight: 8 }}
								/>
							)}

							<Text
								style={[
									{
										fontFamily: 'Montserrat_400Regular',
										fontSize: 24,
										color: 'white',
									},
								]}>
								{isLoading ? 'Loading' : text}
							</Text>
						</View>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableOpacity
				onPress={() => {
					onPress()
				}}
				style={{ width: '95%' }}>
				<LinearGradient
					colors={[
						'rgba(0,240,255,0.01)',
						'rgba(0,240,255,1 )',
						'rgba(0,240,255,0.01)',
					]}
					start={{ x: 1, y: 1 }}
					style={{
						borderRadius: 10,
						width: '100%',
						height: 72,
						justifyContent: 'center',
						alignItems: 'center',
						padding: 2,
					}}>
					<View
						style={{
							backgroundColor: 'rgba(30, 32, 116,1)',
							padding: 16,
							flex: 1,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 10,
						}}>
						<Text
							style={{
								fontFamily: 'Montserrat_400Regular',
								fontSize: 24,
								color: 'white',
							}}>
							{text}
						</Text>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		)
	}
}

// const styles = StyleSheet.create({
// });

export default CustomButton
