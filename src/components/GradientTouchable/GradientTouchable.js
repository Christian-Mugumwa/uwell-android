import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const GradientTouchable = ({
  text,
  fn = () => {},
  top = 0,
  active = false,
}) => {
  return (
    <TouchableHighlight
      style={{ marginTop: top, borderRadius: 10 }}
      onPress={fn}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["rgba(0,240,255,0.8)", "rgba(0,240,255,0.8)"]}
        style={{
          borderRadius: 10,
          padding: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: active ? "#171046" : "rgba(30, 32, 116,1)",
            borderRadius: 10,
            paddingHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <Text style={[styles.text]}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
});

export default GradientTouchable;
