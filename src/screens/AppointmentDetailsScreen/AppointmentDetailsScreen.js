import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";

const AppointmentDetailsScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BackgroundSVG />

      <View style={styles.container}>
        <Text style={styles.text}>AppointmentDetailsScreen</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
  },
});

export default AppointmentDetailsScreen;
