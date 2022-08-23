import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const ReminderButton = ({ children, bottom = 0, data, fn = () => {} }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#716f9b",
        borderRadius: 10,
        padding: 8,
        marginBottom: bottom,
      }}
      onPress={fn}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* image */}
        <View style={{ marginRight: 8 }}>{children}</View>
        <View>
          <Text
            style={{
              fontFamily: "Montserrat_400Regular",
              color: "rgba(255,106,22,1 )",
            }}
          >
            {data.subtitle}
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat_400Regular",
              color: "white",
              fontSize: 16,
            }}
          >
            {data.subtitle}
          </Text>
          {data.date && (
            <Text
              style={{
                fontFamily: "Montserrat_400Regular",
                color: "white",
                fontSize: 12,
              }}
            >
              {data.date}
            </Text>
          )}
        </View>
      </View>
      {/* button */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
        style={{
          backgroundColor: "black",
          borderRadius: 50,
        }}
      >
        <Ionicons name="arrow-forward" size={24} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ReminderButton;
