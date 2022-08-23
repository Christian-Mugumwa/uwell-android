import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const DrawerHeader = ({ navigation, header, subHeader = null }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View
				style={{
					width: '100%',
					height: 56,
					paddingHorizontal: 8,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<TouchableOpacity onPress={() => navigation.openDrawer()}>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={['rgba(0,240,255,1 )', 'rgba(255,49,160,1 )']}
						style={{ borderRadius: 50 }}>
						<View
							style={{
								padding: 8,
							}}>
							<Ionicons name='menu-outline' size={44} color='white' />
						</View>
					</LinearGradient>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View>
						<Text
							style={[
								{
									fontSize: 20,
									color: 'white',
									alignSelf: 'center',
									marginBottom: 0,
									fontFamily: 'Montserrat_400Regular',
								},
							]}>
							{header}
						</Text>
						{subHeader && (
							<Text
								style={[
									{
										fontSize: 10,
										color: 'white',
										alignSelf: 'center',
										marginBottom: 0,
										fontFamily: 'Montserrat_600SemiBold',
										color: 'rgba(255,106,22,1 )',
									},
								]}>
								{subHeader}
							</Text>
						)}
					</View>
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
	)
}

export default DrawerHeader
