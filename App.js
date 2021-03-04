import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";
import List from "./src/screens/List";
import RootNavigation from "./src/navigations/index"
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <RootNavigation/>
    );
  }
}
