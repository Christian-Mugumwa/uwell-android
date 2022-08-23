import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
//Custom Hooks
import { useModal } from '../../hooks'
// import * as SecureStore from "expo-secure-store";
import { LinearGradient } from 'expo-linear-gradient'
import Svg from 'react-native-svg'
//Modal Component
import { MenuModal } from '../../components/MenuModal'
import { Menu } from '../../components/Menus'

import { TailwindProvider } from 'tailwindcss-react-native'
import BackgroundSVG from '../../components/SVG/BackgroundSVG'
import GradientWrapper from '../../components/GradientWrapper/GradientWrapper'
import ReminderButton from '../../components/ReminderButton'
// assets
import png from '../../../assets/Group531.png'
import info from '../../../assets/Group535.png'
import skincare from '../../../assets/skincare.jpg'
import lifestyle from '../../../assets/lifestyle.jpg'
import stress from '../../../assets/stress.jpg'
import doge from '../../../assets/doge.png'

// import Outline from '../../../assets/Outline.svg'
// reminder assets
import calender from '../../../assets/CalenderIcon.png'
import infoSmall from '../../../assets/Group535s.png'
import stressIcon from '../../../assets/Group539.png'
import camera from '../../../assets/Group540.png'

const HomeScreen = ({ navigation }) => {
	return (
		<TailwindProvider>
			<BackgroundSVG />

			<ScrollView showsVerticalScrollIndicator={false}>
				<Menu />
				<View style={styles.container}>
					{/* Tier levels */}
					<View
						style={{
							marginTop: 16,
							paddingHorizontal: 8,
						}}>
						{/* fontSize 18 */}
						{/* gradient prime */}
						<LinearGradient
							colors={[
								'rgba(0,240,255,0.01)',
								'rgba(0,240,255,1 )',
								'rgba(0,240,255,0.01)',
							]}
							start={{ x: 1, y: 1 }}
							style={{ borderRadius: 10 }}>
							<View style={{ flexDirection: 'column' }}>
								<View
									style={{
										height: 200,
										width: '100%',
										borderRadius: 10,
										padding: 2,
										flexDirection: 'row',
										justifyContent: 'space-around',
									}}>
									<View
										style={{
											flexDirection: 'row',
											borderRadius: 10,
											padding: 16,
											backgroundColor: 'rgba(30, 32, 116,1)',
											width: '100%',
											justifyContent: 'space-between',
											alignItems: 'center',
										}}>
										{/* tier rows*/}
										<View style={{ flexDirection: 'row' }}>
											<View
												style={{
													width: 80,
													height: '100%',
													padding: 2,
												}}>
												{/* <TierSVG /> */}
												<Image source={doge} resizeMode='cover' />
											</View>
										</View>
										<View style={{ alignItems: 'center' }}>
											<Text
												style={{
													color: '#fff',
													fontSize: 16,
												}}>
												Wallet Ballance
											</Text>
											<Text
												style={{
													fontSize: 44,
													color: '#fff',
												}}>
												R3500
											</Text>
											{/* <Text style={{ color: '#FF6A16' }}>Doge</Text> */}
											<TouchableOpacity
												style={{ marginTop: 12 }}
												onPress={() => {
													navigation.navigate('Wallet')
												}}>
												<LinearGradient
													colors={[
														'rgba(0,240,255,0.01)',
														'rgba(0,240,255,1 )',
														'rgba(0,240,255,0.01)',
													]}
													start={{ x: 1, y: 1 }}
													style={{
														borderRadius: 5,
														padding: 2,
														width: 150,
														alignSelf: 'center',
													}}>
													<View
														style={{
															borderRadius: 5,
															flexDirection: 'row',
															justifyContent: 'center',
															alignItems: 'center',
															backgroundColor:
																'rgba(30, 32, 116,1)',
															padding: 8,
														}}>
														<Text
															style={{
																marginRight: 8,
																color: 'white',
																fontFamily:
																	'Montserrat_400Regular',
															}}>
															View Wallet
														</Text>
														<TouchableOpacity>
															{/* gradient button */}
															<LinearGradient
																start={{ x: 0, y: 0 }}
																end={{ x: 1, y: 1 }}
																colors={[
																	'rgba(0,240,255,1 )',
																	'rgba(255,49,160,1 )',
																]}
																style={{
																	backgroundColor: 'black',
																	borderRadius: 50,
																}}>
																<Ionicons
																	name='arrow-forward'
																	size={24}
																	color='white'
																/>
															</LinearGradient>
														</TouchableOpacity>
													</View>
												</LinearGradient>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
						</LinearGradient>
					</View>
					{/* your wellness journeys */}
					<View style={{ marginTop: 16, paddingHorizontal: 8 }}>
						{/* Box container*/}
						<View
							style={{
								width: '100%',
								height: 50,
								marginBottom: 16,
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'flex-end',
								// overflow: "hidden",
							}}>
							{/* boxes */}
							<View
								style={{
									height: '70%',
									width: '40%',
									borderTopRightRadius: 10,
									borderColor: '#4959EC',
									borderTopWidth: 1,
									borderRightWidth: 1,
								}}></View>
							<View
								style={{
									height: '70%',
									width: '40%',
									borderTopLeftRadius: 10,
									borderColor: '#4959EC',
									borderTopWidth: 1,
									borderLeftWidth: 1,
								}}></View>
						</View>
						{/* Header */}
						<Text style={[styles.header, { alignSelf: 'center' }]}>
							Your Wellness Journeys
						</Text>
						{/* Journey */}
						<View
							style={{
								flexDirection: 'row',
								height: 200,
								width: '100%',
								justifyContent: 'space-between',
								marginBottom: 24,
							}}>
							{/* left */}
							<TouchableOpacity
								style={{
									// flex: 1,
									// width: "10%",
									// height: "100%",
									justifyContent: 'center',
									alignItems: 'flex-start',
								}}>
								<Ionicons name='chevron-back' size={24} color='white' />
							</TouchableOpacity>
							{/* Circle */}
							<LinearGradient
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 1 }}
								colors={['rgba(0,240,255,1 )', 'rgba(255,49,160,1 )']}
								style={{
									width: 205,
									height: 205,
									borderRadius: 100,
									padding: 2,
								}}>
								<View
									style={{
										flex: 1,
										backgroundColor: 'rgba(30, 32, 116,1)',
										borderRadius: 100,
										justifyContent: 'center',
										alignItems: 'center',
										position: 'relative',
									}}>
									<View style={{ flexDirection: 'row' }}>
										<Text
											style={{
												color: 'white',
												fontFamily: 'Montserrat_600SemiBold',
												fontSize: 65,
											}}>
											65
										</Text>
										<Text
											style={{
												color: 'white',
												position: 'absolute',
												fontSize: 18,
												top: 5,
												right: -12,
												color: 'rgba(255,106,22,1 )',
											}}>
											%
										</Text>
									</View>

									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_600SemiBold',
											fontSize: 16,
										}}>
										Skin
									</Text>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_600SemiBold',
											fontSize: 16,
											color: 'rgba(255,106,22,1 )',
										}}>
										Clean Up
									</Text>
								</View>
							</LinearGradient>
							<TouchableOpacity
								style={{
									// flex: 1,
									// width: "10%",
									// height: "100%",
									justifyContent: 'center',
									alignItems: 'flex-end',
								}}>
								<Ionicons
									name='chevron-forward'
									size={24}
									color='white'
								/>
							</TouchableOpacity>
						</View>
						{/* View more button */}
						<LinearGradient
							colors={[
								'rgba(0,240,255,0.01)',
								'rgba(0,240,255,1 )',
								'rgba(0,240,255,0.01)',
							]}
							start={{ x: 1, y: 1 }}
							style={{
								borderRadius: 5,
								padding: 2,
								width: 150,
								alignSelf: 'center',
							}}>
							<View
								style={{
									borderRadius: 5,
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: 'rgba(30, 32, 116,1)',
									padding: 8,
								}}>
								<Text
									style={{
										marginRight: 8,
										color: 'white',
										fontFamily: 'Montserrat_400Regular',
									}}>
									View More
								</Text>
								<TouchableOpacity>
									{/* gradient button */}
									<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										colors={[
											'rgba(0,240,255,1 )',
											'rgba(255,49,160,1 )',
										]}
										style={{
											backgroundColor: 'black',
											borderRadius: 50,
										}}>
										<Ionicons
											name='arrow-forward'
											size={24}
											color='white'
										/>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</LinearGradient>
					</View>

					{/* Reminders */}
					<View style={{ marginTop: 24, paddingHorizontal: 8 }}>
						<GradientWrapper>
							{/* header */}
							{/* <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 24,
                  position: "relative",
                }}
              > */}
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 24,
									alignItems: 'center',
								}}>
								<Ionicons
									name='md-notifications-outline'
									size={24}
									color='white'
									style={{ marginRight: 4 }}
								/>
								<Text
									style={{
										color: 'white',
										fontFamily: 'Montserrat_400Regular',
										fontSize: 20,
									}}>
									Reminders
								</Text>
							</View>
							{/* <TouchableOpacity>
                  <Ionicons
                    name="md-notifications-outline"
                    size={24}
                    color="white"
                    style={{
                      backgroundColor: "gray",
                      borderRadius: 100,
                      padding: 4,
                    }}
                  />
                </TouchableOpacity> */}
							{/* </View> */}
							{/* reminder buttons */}
							<ReminderButton
								bottom={24}
								data={{
									subtitle: 'Upcoming Appointment',
									title: 'Dermatology Appointment',
									date: '01/09/2022',
								}}
								fn={() => {
									navigation.navigate('AppointmentDetails')
								}}>
								<Image source={calender} resizeMode='cover' />
							</ReminderButton>
							{/*  */}
							<ReminderButton
								bottom={24}
								data={{
									subtitle: 'Outstanding Payment',
									title: 'Consultation',
									date: '02/09/2022',
								}}>
								<Image source={infoSmall} resizeMode='cover' />
							</ReminderButton>
							{/*  */}
							<ReminderButton
								bottom={24}
								data={{
									subtitle: 'In Progress Assessment',
									title: 'Stress Level Assessment',
									date: null,
								}}>
								<Image source={stressIcon} resizeMode='cover' />
							</ReminderButton>
							{/*  */}
							<ReminderButton
								data={{
									subtitle: 'Treatment Journey',
									title: 'Follow Up Images',
									date: '03/09/2022',
								}}>
								<Image source={camera} resizeMode='cover' />
							</ReminderButton>
							{/* View more */}
						</GradientWrapper>
					</View>

					{/* Community */}
					<View
						style={{
							marginTop: 24,
							overflow: 'visible',
							paddingHorizontal: 8,
						}}>
						<GradientWrapper>
							{/* header */}

							<View
								style={{
									marginBottom: 24,
								}}>
								<View style={{ flexDirection: 'row' }}>
									<Ionicons
										name='people-circle-outline'
										size={24}
										color='white'
										style={{ marginRight: 4 }}
									/>
									<Text
										style={{
											fontSize: 20,
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
										}}>
										Community
									</Text>
								</View>
								<Text
									style={{
										color: 'rgba(255,106,22,1 )',
										fontFamily: 'Montserrat_400Regular',
										fontSize: 12,
									}}>
									Recommended
								</Text>
							</View>

							{/*  */}
							<View style={{ flexDirection: 'row' }}>
								{/* Skincare */}
								<View style={{ flex: 1, marginRight: 4 }}>
									<Image
										source={skincare}
										resizeMode='cover'
										style={{
											width: '100%',
											height: 100,
											marginBottom: 8,
										}}
									/>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
										}}>
										Your Guide To Skincare
									</Text>
								</View>

								{/* Lifestyle */}
								<View style={{ flex: 1, marginRight: 4 }}>
									<Image
										source={lifestyle}
										resizeMode='cover'
										style={{
											width: '100%',
											height: 100,
											marginBottom: 8,
										}}
									/>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
										}}>
										Better Lifestyle With Wellness
									</Text>
								</View>

								{/* Stress */}
								<View style={{ flex: 1 }}>
									<Image
										source={stress}
										resizeMode='cover'
										style={{
											width: '100%',
											height: 100,
											marginBottom: 8,
										}}
									/>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
										}}>
										How To Manage Stress..
									</Text>
								</View>
							</View>
						</GradientWrapper>
					</View>

					{/* Q&A */}
					<View style={{ paddingHorizontal: 8 }}>
						<View
							style={{
								backgroundColor: 'rgba(255,255,255,0.25)',
								padding: 8,
								borderRadius: 10,
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								marginTop: 24,
							}}>
							<Image
								source={info}
								resizeMode='cover'
								style={{ width: 75, height: 75, marginRight: 8 }}
							/>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									flex: 1,
									height: '100%',
								}}>
								<View
									style={{
										flex: 1,
										justifyContent: 'space-around',
									}}>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
											fontSize: 18,
										}}>
										Need Medical Insurance?
									</Text>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
											fontSize: 16,
										}}>
										WellInsure is Here for you!
									</Text>
								</View>

								<TouchableOpacity style={{ alignSelf: 'flex-end' }}>
									{/* gradient button */}
									<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										colors={[
											'rgba(0,240,255,1 )',
											'rgba(255,49,160,1 )',
										]}
										style={{
											backgroundColor: 'black',
											borderRadius: 50,
										}}>
										<Ionicons
											name='arrow-forward'
											size={24}
											color='white'
										/>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</View>
						{/*  */}
						<View
							style={{
								backgroundColor: 'rgba(255,255,255,0.25)',
								padding: 8,
								borderRadius: 10,
								flexDirection: 'row',
								justifyContent: 'flex-start',
								alignItems: 'center',
								marginTop: 24,
							}}>
							<Image
								source={info}
								resizeMode='cover'
								style={{ width: 75, height: 75, marginRight: 8 }}
							/>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									flex: 1,
									height: '100%',
								}}>
								<View
									style={{
										flex: 1,
										justifyContent: 'space-around',
									}}>
									<Text
										style={{
											color: 'white',
											fontFamily: 'Montserrat_400Regular',
											fontSize: 18,
										}}>
										Need a holiday? Travel is a great way to reset
										your mental health
									</Text>
								</View>

								<TouchableOpacity style={{ alignSelf: 'flex-end' }}>
									{/* gradient button */}
									<LinearGradient
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										colors={[
											'rgba(0,240,255,1 )',
											'rgba(255,49,160,1 )',
										]}
										style={{
											backgroundColor: 'black',
											borderRadius: 50,
										}}>
										<Ionicons
											name='arrow-forward'
											size={24}
											color='white'
										/>
									</LinearGradient>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					{/* Q&A */}
				</View>
			</ScrollView>
		</TailwindProvider>
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

export default HomeScreen
