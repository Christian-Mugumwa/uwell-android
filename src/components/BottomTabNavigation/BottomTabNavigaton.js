import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

// import HomeScreen from "../../screens/HomeScreen";
import HomeStack from '../HomeStack'
// import BookingScreen from "../../screens/BookingScreen";
import WellnessScreen from '../../screens/WellnessScreen'
import ShopScreen from '../../screens/ShopScreen'
import RecordsScreen from '../../screens/RecordsScreen'
import BookingStack from '../BookingStack'
// import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator()

const BottomTabNavigaton = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				keyboardHidesTabBar: true,
			}}
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					// shadowColor: "#000",
					// shadowOffset: {
					//   width: 0,
					//   height: 5,
					// },
					// shadowOpacity: 0.34,
					// shadowRadius: 6.27,
					backgroundColor: 'rgba(30, 32, 116,1)',
					// backgroundColor: "transparent",
					borderTopColor: 'rgba(0,240,255,1 )',
					// borderRadius: 5,
				},
				tabBarActiveTintColor: 'rgba(255,255,255,1)',
				tabBarActiveBackgroundColor: 'rgba(51,57,121,1)',
				tabBarInactiveBackgroundColor: 'rgba(30, 32, 116,1)',
				tabBarItemStyle: {
					borderRadius: 5,
				},

				tabBarInactiveTintColor: 'rgba(255,255,255,0.80)',
				tabBarActiveTintColor: 'rgba(255,255,255,1)',
			}}
			initialRouteName='Home'
			style={{ backgroundColor: 'gray' }}>
			<Tab.Screen
				name='Home'
				component={HomeStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='home-outline' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Bookings'
				component={BookingStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='pencil-outline' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Wellness'
				component={WellnessScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='heart-outline' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Shop'
				component={ShopScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='cart-outline' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Records'
				component={RecordsScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='document-text-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
			{/* <LinearGradient
        colors={[
          "rgba(0,240,255,0.01)",
          "rgba(0,240,255,1 )",
          "rgba(0,240,255,0.01)",
        ]}
        start={{ x: 1, y: 1 }}
        style={{ borderRadius: 10 }}
      /> */}
		</Tab.Navigator>
	)
}

export default BottomTabNavigaton
