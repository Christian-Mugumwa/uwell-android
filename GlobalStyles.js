import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    // marginTop: 24,
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    fontSize: 34,
    color: "white",
    alignSelf: "stretch",
    fontFamily: "Montserrat_600SemiBold",
    marginLeft: 0,
    marginBottom: 16,
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
    textDecorationColor: "white",
  },
});

export default styles;
