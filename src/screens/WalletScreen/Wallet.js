import {
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Image,
	TextInput,
	SafeAreaView,
} from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'
import { useContext } from 'react'
import AuthContext from '../../components/Context'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import styles from '../../../GlobalStyles'

import BackgroundSVG from '../../components/SVG/BackgroundSVG'
import { Menu } from '../../components/Menus'
import Lines from '../../../assets/Lines.png'
import bank from '../../../assets/piggy-bank.png'

const Wallet = () => {
	const { loginState } = useContext(AuthContext)
	const { control, handleSubmit } = useForm()

	return (
		<>
			<BackgroundSVG />
			<ScrollView style={{ height: '100%' }}>
				<View style={styles.container}>
					<View
						style={{
							height: '30%',
							// alignItems: 'center',
						}}>
						<Menu />

						<View
							style={{
								paddingTop: 16,
								alignItems: 'center',
							}}>
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
						</View>
						<Text
							style={{
								color: '#fff',
								textAlign: 'center',
								fontSize: 32,
								paddingTop: 2,
							}}>
							Wallet
						</Text>
					</View>

					<View style={{ alignItems: 'flex-end' }}>
						<Image
							source={bank}
							resizeMode='contain'
							style={{
								transform: [
									{
										scale: 0.8,
									},
								],
							}}
						/>
					</View>

					<View
						style={{
							// alignItems: 'center',
							marginTop: 32,
							width: '100%',
							position: 'relative',
						}}>
						<CustomInput
							name='wallet'
							control={control}
							placeholder='Wallet Address'
							style={{ width: '100%' }}
						/>
					</View>

					<View style={{ width: '100%' }}>
						<CustomButton text='Submit' type='primary' />
					</View>
				</View>
			</ScrollView>
		</>
	)
}

export default Wallet
