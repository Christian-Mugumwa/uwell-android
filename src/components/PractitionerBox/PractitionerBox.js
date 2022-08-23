import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PractitionerBox = ({
  practitioner,
  specialty,
  reviews,
  top = 0,
  fn = () => {},
  change = false,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#716f9b",
        flexDirection: "row",
        borderRadius: 10,
        padding: 8,
        justifyContent: "space-between",
        marginTop: top,
      }}
      onPress={fn}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            height: 70,
            width: 70,
            marginRight: 8,
          }}
        ></View>
        <View style={{ justifyContent: "space-between", height: 70 }}>
          <Text style={[styles.text, { fontSize: 18 }]}>{practitioner}</Text>
          <Text
            style={[
              styles.text,
              { fontSize: 15, color: "rgba(255,255,255,0.8)" },
            ]}
          >
            {specialty}
          </Text>
          <Text
            style={[
              styles.text,
              { fontSize: 14, color: "rgba(255,106,22,1 )" },
            ]}
          >
            {reviews} reviews
          </Text>
        </View>
      </View>
      {change ? (
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            textDecorationLine: "underline",
            color: "rgba(255,106,22,1 )",
          }}
        >
          Change
        </Text>
      ) : (
        <Ionicons
          name="chevron-forward"
          size={24}
          color="white"
          style={{ alignSelf: "center" }}
        />
      )}
    </TouchableOpacity>
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

export default PractitionerBox;
