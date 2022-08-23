import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import styles from "../../../GlobalStyles";
import BannerSVG from "../../components/SVG/BannerSVG";
import ButtonSVG from "../../components/SVG/ButtonSVG";

const OTP_REGEX = /^[0-9]{5}$/;

const ResetPasswordScreen = ({ navigation, route }) => {
  const { resetPasswordConfirm, resendMobileOTP, resendEmailOTP, stopLoading } =
    useContext(AuthContext);
  const { flow } = route.params;
  // const flow = "mobile";
  const { control, handleSubmit } = useForm();
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
          <Text style={styles.header}>Reset Password</Text>
          <Text
            style={[styles.text, styles.textPrimary, { alignSelf: "stretch" }]}
          >
            A OTP has been sent to your {flow}
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
            onPress={handleSubmit((data) =>
              resetPasswordConfirm(data, flow, navigation)
            )}
            text="Confirm OTP"
          /> */}
          <CustomButton
            text="Confirm OTP"
            post={true}
            onPress={handleSubmit(
              (data) => {
                resetPasswordConfirm(data, flow, navigation);
              },
              () => {
                stopLoading();
              }
            )}
          />
          {/* <ButtonSVG
            type="confirmOTP"
            press={handleSubmit((data) =>
              resetPasswordConfirm(data, flow, navigation)
            )}
          /> */}
          {/* <CustomButton
            onPress={() => {
              flow === "email"
                ? resendEmailOTP(true, navigation)
                : resendMobileOTP(true, navigation);
            }}
            text="Resend OTP"
            type="secondary"
            post={true}
          /> */}
          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>
              Have an account already?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                flow === "email"
                  ? resendEmailOTP(true, navigation)
                  : resendMobileOTP(true, navigation);
              }}
            >
              <Text style={[styles.text, styles.textLink]}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
          {/* <CustomButton
            onPress={signIn}
            text="Back to Sign In"
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

export default ResetPasswordScreen;
