import { useEffect, useContext } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
	Animated,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthContext from '../../components/Context'
import CustomButton from '../CustomButton'
import { Ionicons } from '@expo/vector-icons'
import john from '../../../assets/john-illustration.png'
import Lines from '../../../assets/Lines.png'
import Home from '../../../assets/Home.svg'
import Bookings from '../../../assets/Bookings.svg'
import Wellness from '../../../assets/Wellness.svg'
import Shop from '../../../assets/Shop.svg'
import Records from '../../../assets/Records.svg'
import Reminders from '../../../assets/Reminders.svg'
import User from '../../../assets/User.svg'
import Outline from '../../../assets/Outline.svg'

const MenuModal = ({ modalOpen, toggleModal }) => {
	const value = new Animated.Value(0)
	const { loginState } = useContext(AuthContext)

	const logout = () => {
		navigation.navigate('Logout')
	}

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(value, {
					toValue: 25,
					duration: 3000,
					useNativeDriver: true,
				}),

				Animated.timing(value, {
					toValue: 0,
					duration: 3000,
					useNativeDriver: true,
				}),
			]),
		).start()
	}, [value])

	const trans = {
		transform: [
			{
				translateY: value,
			},
		],
	}

	return (
		<Modal
			visible={modalOpen}
			style={styles.modal}
			animationType='slide'
			animationIn='slideInLeft'
			animationOut='slideOutRight'
			useNativeDriver={true}>
			<View style={styles.navigation}>
				<View style={styles.navigationItems}>
					<TouchableOpacity onPress={toggleModal}>
						<LinearGradient
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							colors={['rgba(0,240,255,1 )', 'rgba(255,49,160,1 )']}
							style={{
								borderRadius: 50,
								width: 40,
								height: 40,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<View
								style={{
									padding: 8,
								}}>
								<Ionicons
									name='arrow-back-outline'
									size={24}
									color='white'
								/>
							</View>
						</LinearGradient>
					</TouchableOpacity>
					<View>
						<User width={40} height={40} fill='' />
					</View>
				</View>
				<View style={styles.nameContainer}>
					<Image
						source={Lines}
						style={{
							transform: [
								{
									scale: 0.9,
								},
							],
						}}
					/>
					<Text
						style={{
							color: '#fff',
							textAlign: 'center',
							fontSize: 32,
							paddingTop: 2,
						}}>
						{loginState ? loginState?.userName : 'Ziggy'}
					</Text>
				</View>
				<View style={{ position: 'relative', width: '100%' }}>
					<Animated.View
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'absolute',
							zIndex: 10,
							top: 0,
							left: '50%',
							right: '50%',
							transform: [
								{
									translateY: value,
								},
							],
						}}>
						<Image
							source={john}
							resizeMode='contain'
							style={[
								trans,
								{
									position: 'absolute',
									top: -88,
									transform: [
										{
											scale: 0.7,
										},
									],
								},
							]}
						/>
					</Animated.View>
					<View style={styles.linkContainer}>
						<Home
							width={60}
							height={60}
							fill=''
							style={{ top: '30%', left: 20 }}
						/>
						<Bookings
							width={60}
							height={60}
							fill=''
							style={{ top: '30%', right: 20 }}
						/>
					</View>
					<View style={styles.linkContainer}>
						<Wellness
							width={60}
							height={60}
							fill=''
							style={{ top: '60%' }}
						/>
						<Shop width={60} height={60} fill='' style={{ top: '60%' }} />
					</View>
					<View style={styles.linkContainer}>
						<Records
							width={60}
							height={60}
							fill=''
							style={{ top: '90%', left: 20 }}
						/>
						<Reminders
							width={60}
							height={60}
							fill=''
							style={{ top: '90%', right: 20 }}
						/>
					</View>

					<View style={styles.linkContainer}>
						<Outline
							width={80}
							height={100}
							fill='#171046'
							style={{
								top: '120%',
								left: 4,
								transform: [
									{
										scale: 1.2,
									},
								],
							}}
						/>
						<Outline
							width={80}
							height={100}
							fill='#171046'
							style={{
								top: '120%',
								right: 4,
								transform: [
									{
										scale: 1.2,
									},
								],
							}}
						/>
					</View>
				</View>
			</View>
			<View
				style={{
					backgroundColor: '#171046',
					height: '20%',
					alignItems: 'center',
					justifyContent: 'flex-end',
					paddingBottom: 6,
					position: 'relative',
					zIndex: 5,
				}}>
				<CustomButton onPress={logout} text='Logout' type='primary' />
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modal: {
		position: 'relative',
		zIndex: 1000,
		justifyContent: 'space-around',
		backgroundColor: '#171046',
	},
	navigation: {
		position: 'relative',
		zIndex: 10,
		height: '80%',
		display: 'flex',
		flexDirection: 'column',
		padding: 12,
		backgroundColor: '#171046',
	},
	navigationItems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	nameContainer: {
		alignItems: 'center',
		paddingTop: 16,
	},
	lines: {
		width: '100%',
		transform: [
			{
				scale: 2,
			},
		],
	},
	linkContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		position: 'absolute',
		top: -64,
		zIndex: 20,
	},
})

export default MenuModal
