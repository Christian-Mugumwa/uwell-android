import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import DrawerHeader from "../../components/DrawerHeader";
import GradientWrapper from "../../components/GradientWrapper/GradientWrapper";
// import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import GradientButton from "../../components/GradientButton";

const QuestionnaireScreen = ({ navigation }) => {
  const [checkboxForm, setCheckboxForm] = useState({
    heart_disease: false,
    lung_disease: false,
    diabetes: false,
    high_cholesterol: false,
    high_blood_pressure: false,
    liver_disease: false,
    chronic_pain: false,
    depression: false,
    inflammation: false,
    stress: false,
    anxiety: false,
    weight_management: false,
    injuries: false,
    cancer: false,
    autoimmune_disease: false,
    gum_disease: false,
    eating_disorder: false,
    pregnancy_loss: false,
    patient_consent: false,
  });
  const setChecked = (key) => {
    // update based on key
    setCheckboxForm((prev) => {
      return { ...prev, [key]: !prev[key] };
    });
  };
  // const [isChecked, setChecked] = useState(false);
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
            Medical Questionnaire
          </Text>
          <GradientWrapper>
            {/*  */}
            <View>
              <Text style={[styles.text, { fontSize: 18, marginBottom: 8 }]}>
                Do you suffer from any of the following?
              </Text>
              <Text
                style={[styles.text, { fontFamily: "Montserrat_300Light" }]}
              >
                Please select all that apply
              </Text>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["heart_disease"]}
                    onValueChange={() => {
                      setChecked("heart_disease");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Heart Disease</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["lung_disease"]}
                    onValueChange={() => {
                      setChecked("lung_disease");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Lung Disease</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["diabetes"]}
                    onValueChange={() => {
                      setChecked("diabetes");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Diabetes</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["high_cholesterol"]}
                    onValueChange={() => {
                      setChecked("high_cholesterol");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>High Cholesterol</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["high_blood_pressure"]}
                    onValueChange={() => {
                      setChecked("high_blood_pressure");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>High Blood Pressure</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["liver_disease"]}
                    onValueChange={() => {
                      setChecked("liver_disease");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Liver Disease</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["chronic_pain"]}
                    onValueChange={() => {
                      setChecked("chronic_pain");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Chronic Pain</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["depression"]}
                    onValueChange={() => {
                      setChecked("depression");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Depression</Text>
              </View>
              {/*  */}
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18 }]}>
                Do you suffer from any of the following lifestyle conditions?
              </Text>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["inflammation"]}
                    onValueChange={() => {
                      setChecked("inflammation");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Inflammation</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["stress"]}
                    onValueChange={() => {
                      setChecked("stress");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Stress</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["anxiety"]}
                    onValueChange={() => {
                      setChecked("anxiety");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Anxiety</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["weight_management"]}
                    onValueChange={() => {
                      setChecked("weight_management");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Weight Management</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["injuries"]}
                    onValueChange={() => {
                      setChecked("injuries");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Injuries</Text>
              </View>
              {/*  */}
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.text, { fontSize: 18 }]}>
                Do you suffer from any of the following medical conditions?
              </Text>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["cancer"]}
                    onValueChange={() => {
                      setChecked("cancer");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Cancer</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["autoimmune_disease"]}
                    onValueChange={() => {
                      setChecked("autoimmune_disease");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Autoimmune Disease</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["gum_disease"]}
                    onValueChange={() => {
                      setChecked("gum_disease");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Gum Disease</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["eating_disorder"]}
                    onValueChange={() => {
                      setChecked("eating_disorder");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Eating Disorder</Text>
              </View>
              {/*  */}
              <View style={[styles.checkbox_container, { marginTop: 16 }]}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    marginRight: 8,
                    borderRadius: 6,
                  }}
                >
                  <Checkbox
                    style={styles.checkbox}
                    value={checkboxForm["pregnancy_loss"]}
                    onValueChange={() => {
                      setChecked("pregnancy_loss");
                    }}
                  />
                </View>
                <Text style={[styles.text]}>Pregnancy Loss</Text>
              </View>
            </View>
            {/*  */}
            <View style={{ marginTop: 24 }}>
              <Text Text style={[styles.text, { fontSize: 18 }]}>
                What symptoms are you experiencing?
              </Text>
              {/* 16 */}
              <LinearGradient
                colors={["rgba(0,240,255,0.01)", "rgba(0,240,255,1 )"]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 16,
                }}
              >
                <TextInput
                  placeholder="Symptoms you're experiencing"
                  multiline={true}
                  textAlignVertical="top"
                  numberOfLines={3}
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
              <Text Text style={[styles.text, { fontSize: 18 }]}>
                Tell a practitioner about how you're feeling and your
                conditions.
              </Text>
              <LinearGradient
                colors={[
                  "rgba(0,240,255,0.01)",
                  "rgba(0,240,255,1 )",
                  // "rgba(0,240,255,0.01)",
                ]}
                start={{ x: 1, y: 9 }}
                style={{
                  borderRadius: 10,
                  padding: 1,
                  position: "relative",
                  marginTop: 16,
                }}
              >
                <TextInput
                  placeholder="Describe your conditions"
                  multiline={true}
                  textAlignVertical="top"
                  numberOfLines={5}
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
              {/*  */}
              <View
                style={[
                  styles.checkbox_container,
                  {
                    marginTop: 24,
                    backgroundColor: "gray",
                    padding: 16,
                    borderRadius: 10,
                  },
                ]}
              >
                <Checkbox
                  style={[styles.checkbox]}
                  value={checkboxForm["patient_consent"]}
                  onValueChange={() => {
                    setChecked("patient_consent");
                  }}
                />
                <Text style={[styles.text, { flex: 1, marginLeft: 8 }]}>
                  In order to schedule this appointment, uWell and this
                  practitioner requires your consent to access your medical and
                  clinical information tied to your profile, please tick the box
                  to consent
                </Text>
              </View>
            </View>
          </GradientWrapper>
          {/* Next Button */}
          <View style={{ marginVertical: 24, alignItems: "center" }}>
            <GradientButton
              text="Next"
              fn={() => {
                navigation.navigate("SelfScreening");
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

export default QuestionnaireScreen;
