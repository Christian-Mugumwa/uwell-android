import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CustomButton from "../../components/CustomButton";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import BannerSVG from "../../components/SVG/BannerSVG";
import ButtonSVG from "../../components/SVG/ButtonSVG";

const StartScreen = ({ navigation }) => {
  const signIn = () => {
    navigation.navigate("SignIn");
  };

  const signUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <>
      {/* purple background */}
      <BackgroundSVG />
      <View style={styles.container}>
        <BannerSVG />
        {/* <View style={styles.buttonContainer}>
          <ButtonSVG press={signUp} />
        </View> */}
        <View style={styles.buttonContainer}>
          <CustomButton onPress={signUp} text="Get Started" type="primary" />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.textPrimary]}>
            Have an account already?{" "}
          </Text>
          <TouchableOpacity onPress={signIn}>
            <Text style={[styles.text, styles.textLink]}>SIGN-IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 42,
  },
  textContainer: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
  },
  textPrimary: {
    color: "white",
    fontSize: 16,
  },
  textLink: {
    color: "white",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(0, 214, 252, 0.3)",
    borderLeftColor: "rgba(0, 214, 252, 0.5)",
    borderRightColor: "rgba(0, 214, 252, 0.5)",
    borderRadius: 5,
    width: "100%",
    height: 70,
    paddingVertical: 16,
    alignItems: "center",
    //
    position: "relative",
  },
  buttonText: {
    // color: "rgba(0, 214, 252, 0.5)",
    textTransform: "uppercase",
    letterSpacing: 1.8,
    color: "white",
    fontSize: 30,
  },
  before: {
    position: "absolute",
    top: 0,
    // left: "10%",
    width: "80%",
    height: 1,
    transform: [{ translateY: -1 }],
    backgroundColor: "rgba(0, 214, 252, 1)",
    // no transitions
  },
  after: {
    position: "absolute",
    bottom: 0,
    // right: "10%",
    width: "80%",
    height: 1,
    transform: [{ translateY: 1 }],
    backgroundColor: "rgba(0, 214, 252, 1)",
    // no transition
  },
});

export default StartScreen;
