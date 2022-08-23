import { StyleSheet, View } from "react-native";

const BackgroundSVG = ({ children }) => (
  <>
    <View style={styles.container}></View>
    {children}
  </>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(30, 32, 116,1)",
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
});

export default BackgroundSVG;
