import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppointmentScreen from "../../screens/AppointmentScreen";
// import BookingScreen from "../../screens/BookingScreen/BookingScreen";
// import PractitionerScreen from "../../screens/PractitionerScreen";
import QuestionnaireScreen from "../../screens/QuestionnaireScreen/QuestionnaireScreen";
import SelfScreeningScreen from "../../screens/SelfScreeningScreen";
import PractitionerScreen from "../../screens/PractitionerScreen/PractitionerScreen";

const Stack = createNativeStackNavigator();

const BookingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Questionnaire"
    >
      <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
      <Stack.Screen name="SelfScreening" component={SelfScreeningScreen} />
      {/*// ! Remove booking screen */}
      {/* <Stack.Screen name="Practitioner" component={BookingScreen} /> */}
      <Stack.Screen name="Practitioner" component={PractitionerScreen} />
      <Stack.Screen name="Appointment" component={AppointmentScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
