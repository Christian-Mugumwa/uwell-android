import { useContext } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import BannerSVG from "../../components/SVG/BannerSVG";
import styles from "../../../GlobalStyles";
import ButtonSVG from "../../components/SVG/ButtonSVG";

const OTP_REGEX = /^[0-9]{5}$/;

const ConfirmSignUpScreen = ({ navigation, route }) => {
  const { mobile } = route.params;

  // const mobile = "0764472201";

  const { control, handleSubmit } = useForm();
  const { confirmSignUp, resendMobileOTP, stopLoading } =
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
          <Text style={styles.header}>Enter Mobile OTP</Text>
          <Text
            style={[
              styles.text,
              styles.textPrimary,
              { alignSelf: "stretch", marginBottom: 16 },
            ]}
          >
            A One-Time-Pin has been sent to your mobile number{" "}
            <Text style={[styles.text, styles.textLink]}>{mobile}</Text>{" "}
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
            onPress={handleSubmit((data) => confirmSignUp(data, navigation))}
            text="Confirm OTP"
          /> */}
          {/* <ButtonSVG
            type="confirmOTP"
            press={handleSubmit((data) => confirmSignUp(data, navigation))}
          /> */}
          <CustomButton
            text="Confirm OTP"
            post={true}
            onPress={handleSubmit(
              (data) => {
                confirmSignUp(data, navigation);
              },
              () => {
                stopLoading();
              }
            )}
          />

          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>
              Did you get your OTP?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                resendMobileOTP(false, navigation);
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

export default ConfirmSignUpScreen;
