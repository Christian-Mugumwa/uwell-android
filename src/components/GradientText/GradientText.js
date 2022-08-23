import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = ({ text }) => {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontFamily: "Montserrat_400Regular",
            fontSize: 18,
          }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
      >
        <Text
          style={{
            opacity: 0,
            fontFamily: "Montserrat_400Regular",
            fontSize: 18,
          }}
        >
          {text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
