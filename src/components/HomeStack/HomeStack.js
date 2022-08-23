import React from 'react'
// import { View, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../screens/HomeScreen'
import AppointmentDetailsScreen from '../../screens/AppointmentDetailsScreen'
import Wallet from '../../screens/WalletScreen/Wallet'

const Stack = createNativeStackNavigator()

const HomeStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName='HomeScreen'>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
			<Stack.Screen name='Wallet' component={Wallet} />
			<Stack.Screen
				name='AppointmentDetails'
				component={AppointmentDetailsScreen}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
