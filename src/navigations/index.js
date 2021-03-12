import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import List from "../screens/List";
import ProductDetails from '../screens/productDetails'
const Stack = createStackNavigator();

export default class RootNavigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen
           
            name="Login"
            component={Login}
          />
          <Stack.Screen
           
            name="List"
            component={List}
          />
          <Stack.Screen 
      
          name="Detail" 
          component={ProductDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
