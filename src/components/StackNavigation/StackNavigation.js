import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmSignInScreen from "../../screens/ConfirmSignInScreen";

import ConfirmSignUpScreen from "../../screens/ConfirmSignUpScreen";
import ForgotPasswordScreen from "../../screens/ForgotPasswordScreen";
import ResetPasswordScreen from "../../screens/ResetPasswordScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import StartScreen from "../../screens/StartScreen";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start"
    >
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ConfirmNumber" component={ConfirmSignUpScreen} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmSignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
