import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { useEffect, useMemo, useReducer } from 'react'
import {
	StyleSheet,
	View,
	StatusBar,
	ActivityIndicator,
	ToastAndroid,
} from 'react-native'
import * as SecureStore from 'expo-secure-store'
import axios from 'axios'
import {
	useFonts,
	OpenSans_400Regular,
	OpenSans_500Medium,
	OpenSans_600SemiBold,
	PlayfairDisplay_900Black,
	Montserrat_700Bold,
	Montserrat_400Regular,
	Montserrat_600SemiBold,
	Roboto_400Regular,
	Montserrat_300Light,
	// Montserrat_200ExtraLight,
} from '@expo-google-fonts/dev'
import { TailwindProvider } from 'tailwindcss-react-native'

import StackNavigation from './src/components/StackNavigation'
import DrawerNavigation from './src/components/DrawerNavigation'
import AuthContext from './src/components/Context'
import { BASE_URL } from './src/config'
import OfflineNotice from './src/components/OfflineNotice/OfflineNotice'

async function save(key, value) {
	await SecureStore.setItemAsync(key, value)
}

async function getValueFor(key) {
	let result = await SecureStore.getItemAsync(key)
	if (result) {
		return result
	} else {
		return null
	}
}
async function deleteValueFor(key) {
	await SecureStore.deleteItemAsync(key)
}

function capitalizeFirstLetter(str) {
	// converting first letter to uppercase
	const capitalized = str.charAt(0).toUpperCase() + str.slice(1)

	return capitalized
}

function formatMobile(mobile) {
	const fNumber = `+27${mobile.slice(1)}`
	return fNumber
}

export default function App() {
	// load google fonts
	let [fontsLoaded] = useFonts({
		OpenSans_400Regular,
		OpenSans_500Medium,
		OpenSans_600SemiBold,
		PlayfairDisplay_900Black,
		Roboto_400Regular,
		Montserrat_300Light,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_400Regular,
		// Montserrat_200ExtraLight,
	})

	function signOutToast() {
		ToastAndroid.show('Signed-out successfully!', ToastAndroid.LONG)
	}

	function requestToast() {
		ToastAndroid.show('Request sent successfully!', ToastAndroid.LONG)
	}

	function otpToast(type) {
		ToastAndroid.show(
			`A new OTP was sent, check your ${type}`,
			ToastAndroid.LONG,
			ToastAndroid.CENTER,
		)
	}

	function welcomeToast(name) {
		ToastAndroid.show(
			`Welcome ${name}`,
			ToastAndroid.LONG,
			ToastAndroid.CENTER,
		)
	}

	function errorToast(message) {
		ToastAndroid.show(`${message}`, ToastAndroid.LONG, ToastAndroid.CENTER)
	}

	function infoToast(message) {
		ToastAndroid.show(`${message}`, ToastAndroid.LONG, ToastAndroid.CENTER)
	}

	useEffect(() => {
		// !clean up
		console.log('initial render')
		let userToken = null
		let name = null
		setTimeout(async () => {
			console.log('get token and name from local storage')

			userToken = await getValueFor('userToken')
			name = await getValueFor('name')

			if (userToken && name) {
				console.log('Secure Storage has both userToken and name keys')
				// verify jwt
				let payload = {
					token: userToken,
				}
				// will validate everything here
				let config = {
					method: 'post',
					url: `${BASE_URL}/jwt_verify`,
					headers: {
						'Content-Type': 'application/json',
					},
					data: JSON.stringify(payload),
				}

				axios(config)
					.then(() => {
						// Token is valid
						console.log('Token is valid ' + name + ' ' + userToken)

						dispatch({
							type: 'LOGIN',
							name: name,
							token: userToken,
						})
					})
					.catch(e => {
						// Token is invalid
						// 411 - token session has expire
						let responseCode = e.response.status
						let errorMessage = ''
						switch (responseCode) {
							case 411:
								errorMessage = 'Token expired, please sign-in'
								break
							default:
								errorMessage =
									'Oops something went wrong, please try again'
								break
						}
						errorToast(errorMessage)
						console.log(
							'Secure Storage error ' +
								' ' +
								e.response.status +
								' ' +
								e.response,
						)
						// clear secure storage
						deleteValueFor('userToken')
						deleteValueFor('name')
						//
						dispatch({
							type: 'STOP_LOADING',
						})
					})
			}
			console.log('no values in local storage')

			dispatch({
				type: 'CONFIRM_REGISTER',
			})
		}, 1000)
	}, [])

	const initialLoginState = {
		isLoading: true,
		userToken: null,
		otpToken: null,
		userName: '',
	}

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'LOADING':
				return {
					...prevState,
					isLoading: true,
				}
			case 'STOP_LOADING':
				return {
					...prevState,
					isLoading: false,
				}
			case 'LOGIN':
				return {
					...prevState,
					userToken: action.token,
					isLoading: false,
					userName: action.name,
					otpToken: null,
				}
			case 'LOGOUT':
				return {
					...prevState,
					userToken: null,
					otpToken: null,
					isLoading: false,
				}
			// sign up and register
			case 'REGISTER':
				return {
					...prevState,
					userToken: null,
					otpToken: action.otp,
					isLoading: false,
				}
			case 'CONFIRM_REGISTER':
				return {
					...prevState,
					userToken: null,
					otpToken: null,
					isLoading: false,
				}
		}
	}

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

	const authContext = {
		signIn: (data, navigation) => {
			// console.log("sign in");
			// dispatch({
			//   type: "LOADING",
			// })
			let payload = {
				email: data.email.toLowerCase(),
				password: data.password,
			}
			// will validate everything here
			let config = {
				method: 'post',
				url: `${BASE_URL}/login`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}

			axios(config)
				.then(res => {
					// console.log(res.data);
					if (res.data.flow === 'verify_mail') {
						// save otp
						// ! rename to register_OTP
						dispatch({ type: 'REGISTER', otp: res.data.token })
						// go to confirm signin screen
						navigation.navigate('ConfirmEmail', { email: payload.email })
						requestToast()
					} else if (res.data.flow === 'logged_in') {
						// means user already verified their mail and can have full access of site
						dispatch({
							type: 'LOGIN',
							name: res.data.name,
							token: res.data.token,
						})
						// save token to secure storage
						save('userToken', res.data.token)
						save('name', res.data.name)
						// WELCOME USER
						// alert("Welcome " + res.data.name);
						welcomeToast(res.data.name)
					}
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 403:
							errorMessage =
								'This account has been deactivated, contact support'
							break
						case 409:
							errorMessage =
								'Your mobile has not been verified, please sign-up'
							break
						case 404:
							errorMessage = 'User not found, please sign-up'
							break

						default:
							errorMessage =
								'An error occurred while signing-in, please try again after checking your email and password'
							break
					}
					// stop loading
					dispatch({
						type: 'STOP_LOADING',
					})
					errorToast(errorMessage)
					console.log(
						'signIn error ' + ' ' + e.response.status + ' ' + e.response,
					)
				})
		},
		confirmSignIn: (data, navigation) => {
			// dispatch({
			//   type: "LOADING",
			// });
			let payload = {
				email_otp: data.otp,
				token: loginState.otpToken,
			}
			//
			console.log('confirm sign-in')
			let config = {
				method: 'post',
				url: `${BASE_URL}/otp_verify_mail`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					console.log('confirm sign-in successful')
					dispatch({
						type: 'LOGIN',
						name: res.data.name,
						token: res.data.token,
					})
					welcomeToast(res.data.name)
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 411:
							errorMessage = 'Token expired, please sign-in again'
							break
						case 410:
							errorMessage = 'OTP has expired, request a new one'
							break
						case 401:
							errorMessage = 'OTP is invalid, please try again'
							break

						default:
							errorMessage =
								'An Error occurred while trying to verify your email, check your OTP and try again'
							break
					}
					if (responseCode === 411) {
						// bounce users to sign-in screen
						navigation.goBack()
					}
					// stop loading
					dispatch({
						type: 'STOP_LOADING',
					})
					//
					errorToast(errorMessage)
					console.log(
						'signIn-confirm error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
		},
		resendEmailOTP: (flow = false, navigation) => {
			// ! Add Loading indicator
			console.log('resend mail otp')
			let payload =
				flow === true
					? {
							token: loginState.otpToken,
							flow: true,
					  }
					: { token: loginState.otpToken }
			//
			let config = {
				method: 'post',
				url: `${BASE_URL}/resend_email_otp`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					// was get otp successful
					console.log(res.data)
					// alert("New OTP was sent, check your email");
					otpToast('email')
					// stop loading
					// ! this one doesn't have to load
					// dispatch({
					//   type: "STOP_LOADING",
					// });
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 411:
							errorMessage = 'Token expired, please sign-in again'
							break
						default:
							errorMessage =
								'Oops something went wrong, please try again'
							break
					}
					if (responseCode === 411) {
						// bounce users to sign-in screen
						navigation.goBack()
					}
					// stop loading
					dispatch({
						type: 'STOP_LOADING',
					})
					errorToast(errorMessage)
					console.log(
						'Resend Mail error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
		},
		signUp: (data, navigation) => {
			let payload = {
				name: capitalizeFirstLetter(data.name),
				surname: capitalizeFirstLetter(data.surname),
				mobile: formatMobile(data.mobile),
				email: data.email.toLowerCase(),
				password: data.password,
			}
			console.log(payload)
			let config = {
				method: 'post',
				url: `${BASE_URL}/sign_up`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					if (
						res.data.detail === 'User already signed up. Please login.'
					) {
						console.log(loginState)
						// redirect to signin
						// alert("User already signed-up. Please sign-in");
						infoToast('User already signed-up. Please sign-in')
						// ! didn't add the
						navigation.navigate('SignIn')
					} else {
						console.log(res.data)
						// add mobile token for next screen
						dispatch({ type: 'REGISTER', otp: res.data.token })
						// navigate user to the next step of the process
						requestToast()
						navigation.navigate('ConfirmNumber', {
							mobile: payload.mobile,
						})
						console.log(loginState)
						// say first step of registration proccess was a success
						// ! I should plug this on first render on confirm sign up page
						// alert(
						//   "Now for the last step of the registration proccess, A One-Time-Pin was sent to this number " +
						//     payload.mobile + "please enter the code into the input field."
						// );
						infoToast(
							'Now for the last step of the registration proccess, A One-Time-Pin was sent to this number ' +
								payload.mobile +
								'please enter the code into the input field.',
						)
					}
				})
				.catch(e => {
					// ! find out specific error messages
					let errorMessage =
						'An error occurred while creating your account, please try again'
					errorToast(errorMessage)
					console.log(
						'signUp error ' + ' ' + e.response.status + ' ' + e.response,
					)
				})
		},

		confirmSignUp: (data, navigation) => {
			let payload = {
				otp: data.otp,
				token: loginState.otpToken,
			}
			//
			console.log('confirm signup')
			console.log(loginState)
			console.log(payload)
			let config = {
				method: 'post',
				url: `${BASE_URL}/otp_verify_mobile`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(() => {
					console.log('confirm signup successful')
					dispatch({ type: 'CONFIRM_REGISTER' })
					// say first step of registration proccess was a success
					// ! I should plug this on first render on confirm sign up page
					// alert("Your account has been successfully created, try to sign-in");
					infoToast(
						'Your account has been successfully created, try to sign-in',
					)
					//  push to login sccreen
					navigation.navigate('SignIn')
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 411:
							errorMessage = 'Token expired, please sign-in again'
							break
						case 410:
							errorMessage = 'OTP has expired, request a new one'
							break
						case 401:
							errorMessage = 'OTP is invalid, please try again'
							break

						default:
							errorMessage =
								'An Error occurred while trying to verify your mobile number, check your OTP and try again'
							break
					}
					if (responseCode === 411) {
						// bounce users to sign-up screen
						navigation.goBack()
					}
					//
					dispatch({
						type: 'STOP_LOADING',
					})
					//
					errorToast(errorMessage)
					console.log(
						'signUp-confirm error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
		},
		resendMobileOTP: (flow = false, navigation) => {
			console.log('resend mobile otp')
			let payload =
				flow === true
					? { token: loginState.otpToken, flow: true }
					: { token: loginState.otpToken }
			//
			let config = {
				method: 'post',
				url: `${BASE_URL}/resend_otp`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					// was get otp successful
					console.log(res.data)
					// alert("A new OTP was sent, check your mobile");
					otpToast('mobile')
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 411:
							errorMessage = 'Token expired, please sign-in again'
							break
						default:
							errorMessage =
								'Oops something went wrong, please try again'
							break
					}
					if (responseCode === 411) {
						// bounce users to sign-in screen
						navigation.goBack()
					}
					// ! I don't have to stop load here
					errorToast(errorMessage)
					console.log(
						'Resend Mobile error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
		},
		resetPassword: (data, flow, navigation) => {
			// flow is either true or false
			// true = mobile
			// false = email
			let payload = {
				email: data.email.toLowerCase(),
				mechanism: flow ? 'mobile' : 'email',
			}
			console.log(payload)
			//
			let config = {
				method: 'post',
				url: `http://ec2-18-222-149-13.us-east-2.compute.amazonaws.com/reset_pass`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					console.log(res.data)
					dispatch({ type: 'REGISTER', otp: res.data.token })
					if (payload.mechanism === 'mobile') {
						// save token we get from response json
						// pass flow down as a screen prop
						// ! set flow to mobile
						navigation.navigate('ResetPassword', { flow: 'mobile' })
					} else {
						navigation.navigate('ResetPassword', { flow: 'email' })
					}
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 403:
							errorMessage =
								'Your profile was deactivated, please contact support'
							break
						case 409:
							errorMessage = 'Mobile is not verified, please sign-up'
							break
						case 404:
							errorMessage = 'User not found, please sign-up'
							break
						default:
							errorMessage =
								'Oops something went wrong, please try again'
							break
					}
					if (responseCode === 409 || responseCode === 404) {
						// bounce users to sign-up screen
						// ! stack exception
						navigation.navigate('SignUp')
					}
					//
					dispatch({
						type: 'STOP_LOADING',
					})
					//
					errorToast(errorMessage)
					console.log(
						'Forgot password error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
			// fields : email,flow(mobile/email)
			// endpoint : reset_pass
			// output if successful : token(userToken),flow[reset_pass_(mobile/email)]
			// display screen, will show verify mobile or email
			// assuming everthing goes well
		},
		resetPasswordConfirm: (data, flow, navigation) => {
			let payload = {
				[flow === 'email' ? 'email_otp' : 'otp']: data.otp,
				token: loginState.otpToken,
				flow: true,
			}
			//
			console.log(payload)
			console.log(loginState)
			let config = {
				method: 'post',
				url: `${BASE_URL}/${
					flow === 'mobile' ? 'otp_verify_mobile' : 'otp_verify_mail'
				}`,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(payload),
			}
			axios(config)
				.then(res => {
					console.log(res.data)
					//
					dispatch({
						type: 'STOP_LOADING',
					})
					//
					infoToast(
						`A temporary password has been sent to your ${flow}, use it to sign-in also change it as soon as you can.`,
					)
					//
					//  push to login screen
					navigation.navigate('SignIn')
				})
				.catch(e => {
					let responseCode = e.response.status
					let errorMessage = ''
					switch (responseCode) {
						case 411:
							errorMessage = 'Token expired, please sign-in again'
							break
						default:
							errorMessage =
								'Oops something went wrong, please try again'
							break
					}
					if (responseCode === 411) {
						// bounce users to forgotpassword screen
						navigation.goBack()
					}
					//
					dispatch({
						type: 'STOP_LOADING',
					})
					//
					errorToast(errorMessage)
					console.log(
						'Confirm Forgot password error ' +
							' ' +
							e.response.status +
							' ' +
							e.response,
					)
				})
		},
		signOut: () => {
			// clear secure-store
			deleteValueFor('userToken')
			deleteValueFor('name')
			dispatch({ type: 'LOGOUT' })
			signOutToast()
		},
		startLoading: () => {
			console.log('start loading')
			dispatch({
				type: 'LOADING',
			})
		},
		stopLoading: () => {
			console.log('stop loading')
			dispatch({
				type: 'STOP_LOADING',
			})
		},
	}

	if (loginState.isLoading && !fontsLoaded) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size='large' />
			</View>
		)
	}
	return (
		<>
			<TailwindProvider>
				<AuthContext.Provider value={{ ...authContext, loginState }}>
					<NavigationContainer>
						<View style={styles.container}>
							{/* Offline Notice */}
							<OfflineNotice />
							{loginState.userToken === null ? (
								<StackNavigation />
							) : (
								<DrawerNavigation />
							)}
						</View>
					</NavigationContainer>
				</AuthContext.Provider>
			</TailwindProvider>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
