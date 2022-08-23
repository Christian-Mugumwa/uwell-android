import { Controller } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import LineSVG from '../SVG/LineSVG'
import AuthContext from '../Context'
import { useContext, useEffect, useState } from 'react'

const iconColor = '#b9b8d0'

const CustomInput = ({
	placeholder,
	control,
	name,
	rules = {},
	secureTextEntry = false,
}) => {
	// const [error,setError] = useState(false)
	// const { stopLoading, loginState } = useContext(AuthContext);
	useEffect(() => {}, [])
	const iconSwitch = name => {
		switch (name) {
			case 'email':
				return <Ionicons name='mail-outline' size={16} color={iconColor} />
			// break;
			case 'password':
				return (
					<Ionicons
						name='lock-closed-outline'
						size={16}
						color={iconColor}
					/>
				)
			case 'name':
				return (
					<Ionicons name='person-outline' size={16} color={iconColor} />
				)
			case 'surname':
				return (
					<Ionicons name='person-outline' size={16} color={iconColor} />
				)
			case 'mobile':
				return (
					<Ionicons
						name='phone-portrait-outline'
						size={16}
						color={iconColor}
					/>
				)
			case 'otp':
				return (
					<Ionicons name='shield-outline' size={16} color={iconColor} />
				)
			case 'wallet':
				return (
					<Ionicons name='wallet-outline' size={16} color={iconColor} />
				)

			default:
				return <Ionicons name='at-sharp' size={16} color={iconColor} />
		}
	}

	return (
		<>
			<Controller
				control={control}
				rules={rules}
				name={name}
				render={({
					field: { value, onChange, onBlur },
					fieldState: { error },
				}) => {
					// if (error) {
					//   stopLoading();
					// }
					return (
						<View style={{ position: 'relative' }}>
							<View style={[styles.container]}>
								{/*//! add rainbow color svg at bottom of the input */}
								<LineSVG />
								<View style={styles.icon_container}>
									{iconSwitch(name)}
								</View>
								<TextInput
									keyboardType={
										name === 'id_number' ||
										name === 'mobile' ||
										name === 'otp'
											? 'numeric'
											: 'default'
									}
									style={[
										styles.input,
										{ borderBottomColor: error ? 'red' : 'gray' },
									]}
									value={value}
									onChangeText={onChange}
									onBlur={onBlur}
									placeholder={placeholder}
									placeholderTextColor='#b9b8d0'
									secureTextEntry={secureTextEntry}
								/>
							</View>
							{error && (
								<Text style={styles.error_text}>
									{error.message || 'Invalid field'}
								</Text>
							)}
						</View>
					)
				}}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		width: '100%',
		flexDirection: 'row',
		marginBottom: 16,
	},
	input: {
		flex: 1,
		paddingVertical: 5,
		fontSize: 16,
		marginLeft: 10,
		color: 'white',
		fontFamily: 'Montserrat_400Regular',
	},
	error_text: {
		color: 'red',
		alignSelf: 'stretch',
		bottom: 8,
		fontFamily: 'Montserrat_400Regular',
	},
	icon_container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default CustomInput
