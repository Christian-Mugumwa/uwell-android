import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import DrawerHeader from "../../components/DrawerHeader";
import GradientWrapper from "../../components/GradientWrapper/GradientWrapper";
import GradientButton from "../../components/GradientButton";
import { LinearGradient } from "expo-linear-gradient";

const SelfScreeningScreen = ({ navigation }) => {
  return (
    <>
      <BackgroundSVG />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerHeader
          header="Book an appointment"
          subHeader="Please complete the details below"
          navigation={navigation}
        />
        <View style={{ paddingHorizontal: 8 }}>
          <View
            style={{
              width: "100%",
              height: 50,
              marginBottom: 16,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {/* boxes */}
            <View
              style={{
                height: "70%",
                width: "40%",
                borderTopRightRadius: 10,
                borderColor: "#4959EC",
                borderTopWidth: 1,
                borderRightWidth: 1,
              }}
            ></View>
            <View
              style={{
                height: "70%",
                width: "40%",
                borderTopLeftRadius: 10,
                borderColor: "#4959EC",
                borderTopWidth: 1,
                borderLeftWidth: 1,
              }}
            ></View>
          </View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              color: "white",
              fontFamily: "Montserrat_400Regular",
              marginLeft: 0,
              marginBottom: 24,
            }}
          >
            Self Screening
          </Text>
          <GradientWrapper>
            <View>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What is your current weight?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="KG"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What is your current height?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="CM"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What is your blood pressure?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="mm/Hg"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What are your blood sugar levels?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="mm/Hg"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What are your average sleeping hours?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="Hours"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                What are your average working hours per week?
              </Text>
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 8,
                }}
              >
                <TextInput
                  placeholder="Hours"
                  style={[
                    styles.text,
                    {
                      backgroundColor: "#171046",
                      borderRadius: 10,
                      fontSize: 16,
                      padding: 8,
                    },
                  ]}
                  placeholderTextColor="rgba(255,255,255,.8)"
                />
              </LinearGradient>
            </View>
          </GradientWrapper>
          {/* Submit Button */}
          <View style={{ marginVertical: 24, alignItems: "center" }}>
            <GradientButton
              text="Submit"
              fn={() => {
                navigation.navigate("Practitioner");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
    color: "white",
  },
  checkbox_container: {
    flexDirection: "row",
  },
  checkbox: {
    borderColor: "white",
  },
});

export default SelfScreeningScreen;
