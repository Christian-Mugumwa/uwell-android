import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { View, ScrollView, Text, Switch, TouchableOpacity } from "react-native";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import AuthContext from "../../components/Context";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import BannerSVG from "../../components/SVG/BannerSVG";
import styles from "../../../GlobalStyles";
import ButtonSVG from "../../components/SVG/ButtonSVG";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ForgotPasswordScreen = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const { resetPassword, stopLoading } = useContext(AuthContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
          <Text style={styles.header}>Forgot Password?</Text>
          <Text
            style={[styles.text, styles.textPrimary, { alignSelf: "stretch" }]}
          >
            Enter the email that is registered to your account
          </Text>

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
          <View style={{ alignSelf: "stretch" }}>
            <Text
              style={[
                styles.text,
                styles.textPrimary,
                { alignSelf: "stretch" },
              ]}
            >
              Toggle between where you want your OTP reset password to be sent
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 16,
                width: 200,
                alignSelf: "center",
              }}
            >
              <Text
                style={[
                  styles.text,
                  {
                    flex: 1,
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "white",
                  },
                ]}
              >
                Email
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
              <Text
                style={[
                  styles.text,
                  {
                    flex: 1,
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "white",
                  },
                ]}
              >
                Mobile
              </Text>
            </View>
          </View>
          {/* <ButtonSVG
            type="forgot"
            press={handleSubmit((data) =>
              resetPassword(data, isEnabled, navigation)
            )}
          /> */}
          <CustomButton
            text="Send OTP"
            post={true}
            onPress={handleSubmit(
              (data) => {
                resetPassword(data, isEnabled, navigation);
              },
              () => {
                stopLoading();
              }
            )}
          />
          <View style={[styles.textContainer, { marginTop: 16 }]}>
            <Text style={[styles.text, styles.textPrimary]}>Go To </Text>
            <TouchableOpacity onPress={signIn}>
              <Text style={[styles.text, styles.textLink]}>Sign-In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ForgotPasswordScreen;
