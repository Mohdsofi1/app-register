import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import RegisterScreen from "./screens/Register";
import CameraScreen from "./screens/Camera";
import VisitorListScreen from "./screens/VisitorList";
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="VisitorList"
          component={VisitorListScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
