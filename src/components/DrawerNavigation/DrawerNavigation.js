import { useState } from 'react'
import { motion } from 'framer-motion'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions } from '@react-navigation/native'

// import HomeScreen from "../../screens/HomeScreen";
import { Modal, View, FlatList, TouchableOpacity, Text } from 'react-native'
import ProfileScreen from '../../screens/ProfileScreen'
import MessageScreen from '../../screens/MessageScreen'
import SettingsScreen from '../../screens/SettingsScreen'
import CustomDrawer from '../CustomDrawer'
import BottomTabNavigation from '../BottomTabNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<>
			<Drawer.Navigator
				initialRouteName='BottomTabRoot'
				screenOptions={{
					header: ({ navigation, route }) => {
						return (
							<View
								style={{
									display: 'none',
									backgroundColor: 'white',
									width: '100%',
									height: 56,
									paddingHorizontal: 20,
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
									//
									shadowColor: '#000',
									shadowOffset: {
										width: 0,
										height: 4,
									},
									shadowOpacity: 0.3,
									shadowRadius: 4.65,

									elevation: 8,
								}}>
								<TouchableOpacity
									onPress={() => setModalOpen(!modalOpen)}>
									<View
										style={{
											backgroundColor: '#E9E9E9',
											padding: 8,
											borderRadius: 50,
											width: '100%',
										}}>
										<Ionicons
											name='menu-outline'
											size={24}
											color='gray'
										/>
									</View>
								</TouchableOpacity>
							</View>
						)
					},
				}}
				drawerContent={props => <CustomDrawer {...props} />}>
				<Drawer.Screen
					name='BottomTabRoot'
					component={BottomTabNavigation}
					options={{
						title: 'Home',
						drawerIcon: ({ color }) => (
							<Ionicons name='home-outline' size={22} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name='Profile'
					component={ProfileScreen}
					options={{
						drawerIcon: ({ color }) => (
							<Ionicons name='person-outline' size={22} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name='Messages'
					component={MessageScreen}
					options={{
						drawerIcon: ({ color }) => (
							<Ionicons
								name='chatbox-ellipses-outline'
								size={22}
								color={color}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name='Settings'
					component={SettingsScreen}
					options={{
						drawerIcon: ({ color }) => (
							<Ionicons
								name='settings-outline'
								size={22}
								color={color}
							/>
						),
						title: 'Settings',
					}}
				/>
			</Drawer.Navigator>
		</>
	)
}

export default DrawerNavigation
