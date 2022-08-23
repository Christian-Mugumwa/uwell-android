import { useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import styles from "../../../GlobalStyles";
import BannerSVG from "../../components/SVG/BannerSVG";
import ButtonSVG from "../../components/SVG/ButtonSVG";

const OTP_REGEX = /^[0-9]{5}$/;

const ConfirmSignInScreen = ({ navigation, route }) => {
  const { email } = route.params;
  // const email = "phatstacks@gmail.com";
  const { control, handleSubmit } = useForm();
  const { confirmSignIn, resendEmailOTP, stopLoading } =
    useContext(AuthContext);
  const signIn = () => {
    navigation.navigate("SignIn");
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
          <Text style={styles.header}>Enter Email OTP</Text>
          <Text
            style={[
              styles.text,
              styles.textPrimary,
              { alignSelf: "stretch", marginBottom: 16 },
            ]}
          >
            A One-Time-Pin has been sent to your email address for verificaton{" "}
            <Text style={styles.textLink}>{email}</Text>{" "}
          </Text>
          <CustomInput
            name="otp"
            control={control}
            placeholder="OTP"
            rules={{
              required: "OTP is required",
              pattern: {
                value: OTP_REGEX,
                message: "Your OTP should be 5 digits",
              },
            }}
          />

          {/* <CustomButton
            onPress={handleSubmit((data) => confirmSignIn(data, navigation))}
            text="Confirm"
          /> */}
          {/* <ButtonSVG
            press={handleSubmit((data) => confirmSignIn(data, navigation))}
            type="confirmOTP"
          /> */}
          <CustomButton
            text="Confirm OTP"
            post={true}
            onPress={handleSubmit(
              (data) => {
                confirmSignIn(data, navigation);
              },
              () => {
                stopLoading();
              }
            )}
          />

          {/* <CustomButton
            onPress={() => {
              resendEmailOTP(false, navigation);
            }}
            text="Resend OTP"
            type="secondary"
          /> */}

          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>
              Did you get your OTP?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                resendEmailOTP(false, navigation);
              }}
            >
              <Text style={[styles.text, styles.textLink]}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          {/* <CustomButton
            onPress={signIn}
            text="Back to sign-in"
            type="tertiary"
          /> */}
          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>Go back to </Text>
            <TouchableOpacity onPress={signIn}>
              <Text style={[styles.text, styles.textLink]}>Sign-In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ConfirmSignInScreen;
