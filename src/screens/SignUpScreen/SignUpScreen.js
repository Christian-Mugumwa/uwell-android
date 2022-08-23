import { useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import styles from "../../../GlobalStyles";
import BannerSVG from "../../components/SVG/BannerSVG";
import CustomButton from "../../components/CustomButton";
// import ButtonSVG from "../../components/SVG/ButtonSVG";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,24}$/;

const MOBILE_REGEX = /^[0-9]{10}$/;

// ! add client side validation/ maybe formik and yup
const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();

  const { signUp, stopLoading } = useContext(AuthContext);

  const signIn = () => {
    navigation.navigate("SignIn");
  };
  const termsOfUse = () => {
    console.warn("terms of use");
  };
  const privacyPolicy = () => {
    console.warn("privacy policy");
  };

  return (
    <>
      <BackgroundSVG />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <BannerSVG />
          <Text style={styles.header}>Sign-Up</Text>
          <CustomInput
            name="name"
            control={control}
            placeholder="Name"
            rules={{
              required: "Name is required",
              validate: (value) => {
                if (value.length < 2 || value.length > 30) {
                  return "Name should be between 2-30 characters";
                }
              },
            }}
          />

          <CustomInput
            name="surname"
            control={control}
            placeholder="Surname"
            rules={{
              required: "Surname is required",
              validate: (value) => {
                if (value.length < 2 || value.length > 30) {
                  return "Surname should be between 2-30 characters";
                }
              },
            }}
          />

          <CustomInput
            name="mobile"
            control={control}
            placeholder="Mobile number"
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: MOBILE_REGEX,
                message: "Use a valid south african 10 digit mobile number",
              },
            }}
          />

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

          <Text
            style={[
              styles.text,
              styles.textPrimary,
              { alignSelf: "stretch", marginBottom: 16, fontSize: 12 },
            ]}
          >
            By creating your profile, you confirm that you accept our{" "}
            <Text onPress={termsOfUse} style={styles.textLink}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text onPress={privacyPolicy} style={styles.textLink}>
              Privacy Policy
            </Text>
          </Text>

          {/* <ButtonSVG
            type="signup"
            press={handleSubmit((data) => {
              signUp(data, navigation);
            })}
          /> */}
          <CustomButton
            text="Sign Up"
            post={true}
            onPress={handleSubmit(
              (data) => {
                signUp(data, navigation);
              },
              () => {
                stopLoading();
              }
            )}
          />

          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={signIn}>
              <Text style={[styles.text, styles.textLink]}>Sign-In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
