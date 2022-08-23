import { useContext } from 'react'
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
} from 'react-native'
import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import AuthContext from '../Context/'

const CustomDrawer = props => {
	const { signOut } = useContext(AuthContext)

	return (
		<View style={{ display: 'none' }}>
			<DrawerContentScrollView
				{...props}
				contentContainerStyle={{
					backgroundColor: '#000',
					width: '0%',
				}}></DrawerContentScrollView>
		</View>
	)
}

export default CustomDrawer
