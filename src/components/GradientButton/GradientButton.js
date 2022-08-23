import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const GradientButton = ({ text, fn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pressHandler = (fn) => {
    // simulate loading
    setIsLoading(true); // loading show loading indicator

    setTimeout(() => {
      setIsLoading(false);
      fn();
    }, 1000); //after two seconds run fn function after setting loading to false
  };
  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() => {
        pressHandler(fn);
      }}
    >
      <LinearGradient
        // ! had to change opacity from 0.01 to 0.05
        colors={[
          "rgba(0,240,255,0.01)",
          "rgba(0,240,255,1 )",
          "rgba(0,240,255,0.01)",
        ]}
        start={{ x: 1, y: 1 }}
        style={{
          borderRadius: 10,
          width: "100%",
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(30, 32, 116,1)",
            padding: 16,
            flex: 1,
            width: "100%",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading && (
            <ActivityIndicator
              style={{ marginRight: 8 }}
              size="large"
              color="white"
            />
          )}

          <Text
            style={{
              fontFamily: "Montserrat_400Regular",
              fontSize: 20,
              color: "white",
            }}
          >
            {isLoading ? "Loading" : text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
