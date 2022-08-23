import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const GradientWrapper = ({ children, top = 0 }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
      style={{
        width: "100%",
        borderRadius: 10,
        padding: 1,
        marginTop: top,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#17124e",
          opacity: 0.9,
          paddingVertical: 16,
          paddingHorizontal: 8,
          borderRadius: 10,
        }}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

export default GradientWrapper;
