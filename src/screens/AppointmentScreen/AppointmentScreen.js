import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import BackgroundSVG from "../../components/SVG/BackgroundSVG";
import DrawerHeader from "../../components/DrawerHeader";
import GradientWrapper from "../../components/GradientWrapper/GradientWrapper";
import PractitionerBox from "../../components/PractitionerBox";
import GradientTouchable from "../../components/GradientTouchable";
// import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import GradientButton from "../../components/GradientButton";

const AppointmentScreen = ({ navigation, route }) => {
  const dataObject = route.params;
  const [isVirtual, setIsVirtual] = useState(true); // toggle between virtual and in person consultation
  const [appointments, setAppointments] = useState([]);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const setConsultation = (bool) => {
    setIsVirtual(bool);
  };

  useEffect(() => {
    //get 7 days
    let startDate = new Date();
    let date = startDate.getDate();
    let month = startDate.getMonth(); // months start at 0 and end at 11
    let year = startDate.getFullYear();
    //  time
    let time = startDate.toTimeString().split(" ")[0]; // 00:00:00

    // * i'll add sundays but not make them available
    let appointmentsArray = []; // get six appointment objects
    while (appointmentsArray.length != 6) {
      let nextDate = date + appointmentsArray.length; // next day
      // ! dont have to check if last day is > next day beca
      let nextAppointment = new Date(year, month, nextDate); // I should have the date for the next day
      let appointmentObject = {
        fulldate: nextAppointment.toDateString(),
        year: nextAppointment.getFullYear(),
        month: nextAppointment.getMonth() + 1, //
        saturday: nextAppointment.getDay() === 6 ? true : false,
        sunday: nextAppointment.getDay() === 0 ? true : false, //days start at 0 which is sunday
        time: {
          // when time is false its hasn't passed
          "09:00":
            appointmentsArray.length == 0
              ? time >= "09:00:00"
                ? true
                : false
              : false,
          "09:30":
            appointmentsArray.length == 0
              ? time >= "09:30:00"
                ? true
                : false
              : false,
          "10:00":
            appointmentsArray.length == 0
              ? time >= "10:00:00"
                ? true
                : false
              : false,
          "10:30":
            appointmentsArray.length == 0
              ? time >= "10:30:00"
                ? true
                : false
              : false,
          "11:00":
            appointmentsArray.length == 0
              ? time >= "11:00:00"
                ? true
                : false
              : false,
          "11:30":
            appointmentsArray.length == 0
              ? time >= "11:30:00"
                ? true
                : false
              : false,
          "12:00":
            appointmentsArray.length == 0
              ? time >= "12:00:00"
                ? true
                : false
              : false,
          "12:30":
            appointmentsArray.length == 0
              ? time >= "12:30:00"
                ? true
                : false
              : false,
          "13:00":
            appointmentsArray.length == 0
              ? time >= "13:00:00"
                ? true
                : false
              : false,
          "15:30":
            appointmentsArray.length == 0
              ? time >= "15:30:00"
                ? true
                : false
              : false,
          "16:00":
            appointmentsArray.length == 0
              ? time >= "16:00:00"
                ? true
                : false
              : false,
        },
      };
      appointmentsArray.push(appointmentObject);
    }
    // after take the appointmentsArray and update appointments state
    setAppointments((prevState) => [...appointmentsArray]);
  }, []);
  return (
    <>
      <BackgroundSVG />

      <ScrollView showsVerticalScrollIndicator={false}>
        <DrawerHeader
          header="Book an appointment"
          subHeader="Please complete the details below"
          navigation={navigation}
        />
        {/* container */}
        <View style={styles.container}>
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
            Appointment Details
          </Text>
          {/*  */}
          <GradientWrapper>
            <PractitionerBox
              practitioner={dataObject.name}
              specialty={dataObject.specialty}
              reviews={dataObject.reviews}
              change={true}
              fn={() => {
                navigation.goBack();
              }}
            />
            <Text style={[styles.text, { marginTop: 16 }]}>
              How would you like this consultation to be conducted?
            </Text>
            {/*  */}
            <View
              style={{
                marginTop: 16,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <View style={{ marginRight: 16 }}>
                <GradientTouchable
                  text="Virtual"
                  active={isVirtual ? true : false}
                  fn={() => {
                    setConsultation(true);
                  }}
                />
              </View>

              {/*  */}
              <GradientTouchable
                text="In Person"
                active={isVirtual ? false : true}
                fn={() => {
                  setConsultation(false);
                }}
              />
            </View>
          </GradientWrapper>

          <GradientWrapper top={24}>
            <Text style={[styles.text, { fontSize: 18 }]}>
              Select any of these available dates and times
            </Text>
            <View
              style={{
                marginVertical: 16,
                flexDirection: "row",
              }}
            >
              {appointments.map((obj, index) => {
                const [day, month, date, year] = obj.fulldate.split(" ");
                return (
                  <TouchableOpacity
                    key={index + 112}
                    onPress={() => {
                      setAppointmentDate({ fulldate: obj.fulldate });
                      setAppointmentTime(obj.time);
                      setSelectedTime(null);
                    }}
                    style={{
                      justifyContent: "space-between",
                      backgroundColor: "rgba(30, 32, 116,1)",
                      borderWidth: 1,
                      borderColor: "rgba(0,240,255,0.8)",
                      overflow: "hidden",
                      marginRight: index !== 5 ? 2 : 0,
                      flex: 1,
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      height: 60,
                    }}
                  >
                    <Text
                      style={[styles.text, { color: "rgba(255,255,255,1)" }]}
                    >
                      {day}
                    </Text>
                    <Text
                      style={[styles.text, { color: "rgba(255,255,255,1)" }]}
                    >{`${date}`}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {/* selected date */}
            {appointmentDate && (
              <View>
                <Text style={[styles.text, { fontSize: 18 }]}>
                  Selected Date: {appointmentDate.fulldate}
                </Text>
                {/* times */}
                <View
                  style={{
                    marginTop: 16,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {/* <Text>{`${JSON.stringify(appointmentTime["09:00"])}`}</Text> */}
                  {appointmentTime && (
                    <>
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["09:00"]}
                        onPress={() => {
                          setSelectedTime("09:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["09:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          09:00
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["09:30"]}
                        onPress={() => {
                          setSelectedTime("09:30");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["09:30"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          09:30
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["10:00"]}
                        onPress={() => {
                          setSelectedTime("10:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["10:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          10:00
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["10:30"]}
                        onPress={() => {
                          setSelectedTime("10:30");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["10:30"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          10:30
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["11:00"]}
                        onPress={() => {
                          setSelectedTime("11:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["11:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          11:00
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["11:30"]}
                        onPress={() => {
                          setSelectedTime("11:30");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["11:30"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          11:30
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["12:00"]}
                        onPress={() => {
                          setSelectedTime("12:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["12:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          12:00
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["12:30"]}
                        onPress={() => {
                          setSelectedTime("12:30");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["12:30"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          12:30
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["13:00"]}
                        onPress={() => {
                          setSelectedTime("13:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["13:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          13:00
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["15:30"]}
                        onPress={() => {
                          setSelectedTime("15:30");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["15:30"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          15:30
                        </Text>
                      </TouchableOpacity>
                      {/*  */}
                      <TouchableOpacity
                        style={{
                          borderColor: "rgba(0,240,255,0.8)",
                          backgroundColor: "rgba(30, 32, 116,1)",
                          borderWidth: 1,
                          margin: 2,
                        }}
                        disabled={appointmentTime["16:00"]}
                        onPress={() => {
                          setSelectedTime("16:00");
                        }}
                      >
                        <Text
                          style={[
                            styles.text,
                            {
                              fontSize: 16,
                              padding: 4,
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "center",
                              color: appointmentTime["16:00"]
                                ? "rgba(255,255,255,0.4)"
                                : "rgba(255,255,255,1)",
                            },
                          ]}
                        >
                          16:00
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
                {/*  */}
                {selectedTime && (
                  <Text style={[styles.text, { fontSize: 18, marginTop: 16 }]}>
                    Selected Time: {selectedTime}
                  </Text>
                )}
              </View>
            )}
          </GradientWrapper>
          {appointmentDate && selectedTime && (
            <View style={{ marginVertical: 24 }}>
              <GradientButton
                text="Set Appointment"
                fn={() => {
                  navigation.popToTop();
                  //  navigate to home
                  navigation.navigate("Home", {
                    date: appointmentDate,
                    time: selectedTime,
                  });
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  text: {
    color: "white",
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
});
export default AppointmentScreen;
