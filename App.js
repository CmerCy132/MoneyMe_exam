import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store";
import screens from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={screens.Search} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
