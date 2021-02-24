import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button,Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


 const Stack=createStackNavigator()
 
export default class List extends React.Component {
 

render(){
  return (
      <View style={styles.container}>
    <Text>Hello world</Text>
    <Button title="Go back to login" onPress={()=>{this.props.navigation.navigate("Login")}}/>
    </View>
  )
  

}
}


const styles = StyleSheet.create({
  input:{
    height:40,
    borderColor:'gray',
    paddingLeft:10,
    borderWidth:1,
    borderRadius:10,
    width:240,
    marginBottom:10,
  },
 image:{
   width:300,
   height:150,
   marginVertical:10,
   resizeMode:'contain'
   
 },
  btLogin:{
    width:240,
    height:40,
    backgroundColor:"#173f5f",
    borderRadius:20,
    alignItems:"center",
    justifyContent: 'center',
  
  },
  btText:{
    color:"#FFFF",
    
  },
  container: {
    paddingTop:10,
    flex: 1,
    color:'red',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
