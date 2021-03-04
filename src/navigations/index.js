import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import List from "../screens/List";
const Stack = createStackNavigator();

export default class RootNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
             options={{ headerShown: false }}
            name="List"
            component={List}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
