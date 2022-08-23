import { useContext } from "react";
import { useForm } from "react-hook-form";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import CustomInput from "../../components/CustomInput";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import BannerSVG from "../../components/SVG/BannerSVG";
import ButtonSVG from "../../components/SVG/ButtonSVG";
import styles from "../../../GlobalStyles";
import CustomButton from "../../components/CustomButton";
// ! go to https://blog.logrocket.com/how-to-use-svgs-react-native-tutorial-with-examples/

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,24}$/;

const SignInScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const { signIn, stopLoading } = useContext(AuthContext);

  const ForgotPassword = () => {
    // go to forgot password screen
    navigation.navigate("ForgotPassword");
  };

  const signUp = () => {
    // go to sign up screen
    navigation.navigate("SignUp");
  };

  return (
    <>
      <BackgroundSVG />
      <ScrollView
        style={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <BannerSVG />
          <Text style={styles.header}>Sign-In</Text>
          <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message:
                  "Please check the email is in the format: name@domain.com",
              },
            }}
          />
          <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry={true}
            rules={{
              required: "Password is required",
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "Your password should between 8-24 characters and contain at least 1 special, 1 upper, 1 lower, 1 number",
              },
            }}
          />
          <TouchableOpacity
            onPress={ForgotPassword}
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-end",
              marginBottom: 16,
            }}
          >
            <Text
              style={[styles.text, styles.textPrimary, { color: "#b9b8d0" }]}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <CustomButton
            text="Sign In"
            post={true}
            onPress={handleSubmit(
              (data) => {
                signIn(data, navigation);
              },
              () => {
                // if there's a validaton error, stop loading
                stopLoading();
              }
            )}
          />
          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={signUp}>
              <Text style={[styles.text, styles.textLink]}>Sign-Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignInScreen;
