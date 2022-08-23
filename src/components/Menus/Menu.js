import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useModal } from '../../hooks'
import { Ionicons } from '@expo/vector-icons'
import { useContext } from 'react'
import AuthContext from '../../components/Context'
import GradientText from '../../components/GradientText'
import { MenuModal } from '../../components/MenuModal'

const Menu = () => {
	const { loginState } = useContext(AuthContext)
	const { modalOpen, toggleModal } = useModal()

	return (
		<>
			<MenuModal modalOpen={modalOpen} toggleModal={toggleModal} />

			<View>
				{/* Header */}
				<View
					style={{
						width: '100%',
						height: 56,
						paddingHorizontal: 8,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					<TouchableOpacity onPress={toggleModal}>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							colors={['rgba(0,240,255,1 )', 'rgba(255,49,160,1 )']}
							style={{ borderRadius: 50 }}>
							<View
								style={{
									padding: 8,
								}}>
								<Ionicons name='menu-outline' size={24} color='white' />
							</View>
						</LinearGradient>
					</TouchableOpacity>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Text
							style={[
								styles.header,
								{
									alignSelf: 'center',
									marginBottom: 0,
									fontFamily: 'Montserrat_400Regular',
									fontSize: 20,
								},
							]}>
							Welcome Back{' '}
						</Text>
						<GradientText
							text={loginState ? loginState.userName : 'Ziggy'}
						/>
					</View>
					<TouchableOpacity onPress={() => {}}>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							colors={['rgba(0,240,255,1 )', 'rgba(255,49,160,1 )']}
							style={{ borderRadius: 50 }}>
							<View
								style={{
									padding: 8,
								}}>
								<Ionicons
									name='md-notifications-outline'
									size={24}
									color='white'
								/>
							</View>
						</LinearGradient>
					</TouchableOpacity>
				</View>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 20,
	},
	header: {
		fontSize: 24,
		color: 'white',
		fontFamily: 'Montserrat_400Regular',
		marginLeft: 0,
		marginBottom: 16,
	},
	modal: {
		flex: 1,
	},
})

export default Menu
