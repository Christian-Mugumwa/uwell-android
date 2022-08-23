import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import DrawerHeader from "../../components/DrawerHeader";
import GradientWrapper from "../../components/GradientWrapper/GradientWrapper";
import PractitionerBox from "../../components/PractitionerBox";

const PractitionerScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BackgroundSVG />
      <DrawerHeader
        header="Find a practitioner"
        subHeader="Tap a practitioner to view their profile"
        navigation={navigation}
      />
      {/* container */}
      <View style={styles.container}>
        {/* filter */}
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 16,
            },
          ]}
        >
          <Text style={[styles.text, { fontSize: 16 }]}> Filters</Text>
          <Ionicons name="funnel-outline" size={24} color="white" />
        </View>
        {/*  */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
              style={{
                borderRadius: 10,
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(30, 32, 116,1)",
                  borderRadius: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text style={[styles.text]}>Category</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/* <filterButton text="Category" active={true} right={16} /> */}
          {/*  */}
          <TouchableOpacity style={{ marginRight: 16 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
              style={{
                borderRadius: 10,
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(30, 32, 116,1)",
                  borderRadius: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text style={[styles.text]}>Location</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={{ marginRight: 16 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
              style={{
                borderRadius: 10,
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(30, 32, 116,1)",
                  borderRadius: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text style={[styles.text]}>Conditions</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {/*  */}
          <TouchableOpacity style={{ marginRight: 16 }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["rgba(0,240,255,1 )", "rgba(255,49,160,1 )"]}
              style={{
                borderRadius: 10,
                padding: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(30, 32, 116,1)",
                  borderRadius: 10,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                }}
              >
                <Text style={[styles.text]}>Location</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* Input */}
        <View style={{ marginVertical: 24, position: "relative" }}>
          <LinearGradient
            colors={[
              "rgba(0,240,255,1)",
              "rgba(0,240,255,1 )",
              // "rgba(0,240,255,0.01)",
            ]}
            start={{ x: 1, y: 9 }}
            style={{
              borderRadius: 10,
              padding: 2,
            }}
          >
            {/* //! fix this */}
            <Ionicons
              name="search-outline"
              size={24}
              color="rgba(255,255,255,0.5)"
              style={{
                position: "absolute",
                zIndex: 1,
                left: 4,
                top: 4,
              }}
            />
            <TextInput
              placeholder="Search for a practitioner"
              style={[
                styles.text,
                {
                  backgroundColor: "rgba(30, 32, 116,1)",
                  borderRadius: 10,
                  fontSize: 16,
                  paddingLeft: 5,
                  textAlign: "center",
                },
              ]}
              placeholderTextColor="rgba(255,255,255,0.5)"
            />
          </LinearGradient>
        </View>
        {/*  */}
        <GradientWrapper>
          <Text
            style={[
              styles.text,
              { fontSize: 20, textAlign: "center", marginBottom: 24 },
            ]}
          >
            Recommended Practitioner
          </Text>
          {/* Practitioner Boxes */}
          <PractitionerBox
            practitioner="Jane"
            specialty="Dietitian"
            reviews={12}
            // ! change here
            fn={() => {
              navigation.navigate("Appointment", {
                name: "Jane",
                specialty: "Dietitian",
                reviews: 12,
              });
            }}
          />
          <PractitionerBox
            practitioner="Dr. Jonathan S"
            specialty="Cardiologist"
            reviews={2}
            top={16}
            fn={() => {
              navigation.navigate("Appointment", {
                name: "Dr. Jonathan S",
                specialty: "Cardiologist",
                reviews: 2,
              });
            }}
          />
        </GradientWrapper>
        <View style={{ marginVertical: 24 }}>
          <GradientWrapper>
            <Text
              style={[
                styles.text,
                { fontSize: 20, textAlign: "center", marginBottom: 24 },
              ]}
            >
              All Practitioners
            </Text>
            {/*  */}
            <PractitionerBox
              practitioner="Maxine R"
              specialty="Nutritionist"
              reviews={10}
              fn={() => {
                navigation.navigate("Appointment", {
                  name: "Maxine R",
                  specialty: "Nutritionist",
                  reviews: 10,
                });
              }}
            />
            <PractitionerBox
              practitioner="Lizette T"
              specialty="Nutritionist"
              reviews={12}
              top={16}
              fn={() => {
                navigation.navigate("Appointment", {
                  name: "Lizette T",
                  specialty: "Nutritionist",
                  reviews: 12,
                });
              }}
            />
            <PractitionerBox
              practitioner="Kelly R"
              specialty="Life Couch"
              reviews={12}
              top={16}
              fn={() => {
                navigation.navigate("Appointment", {
                  name: "Kelly R",
                  specialty: "Life Couch",
                  reviews: 12,
                });
              }}
            />
          </GradientWrapper>
        </View>
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

export default PractitionerScreen;
