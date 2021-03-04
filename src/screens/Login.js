import { NavigationContainer } from "@react-navigation/native";
import { HeaderTitle } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import User from "../services/User";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default class Login extends React.Component {
  state = {
    userName: "",
    password: ""
  };
  getHandler = key => value => {
    this.setState({ [key]: value });
  };
  onSubmit = () => {
    if (this.state.userName.trim() === "") {
      return Alert.alert("Username is not allow empty");
    }
    if (this.state.password.trim() === "") {
      return Alert.alert("Password is not allow empty");
    }
    if (
      this.state.password !== User.userName &&
      this.state.userName !== User.userName
    ) {
      return Alert.alert("User is not exist");
    }
    this.props.navigation.navigate("List");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../imgs/fashion-logo_23-2148558723.jpg")}
        />
        <TextInput
          style={styles.input}
          placeholder={"User name"}
          value={this.state.userName}
          onChangeText={this.getHandler("userName")}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          onChangeText={this.getHandler("password")}
          value={this.state.password}
        />
        <TouchableOpacity style={styles.btLogin} onPress={this.onSubmit}>
          <Text style={styles.btText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 240,
    marginBottom: 10
  },
  image: {
    width: 300,
    height: 150,
    marginVertical: 10,
    resizeMode: "contain"
  },
  btLogin: {
    width: 240,
    height: 40,
    backgroundColor: "#173f5f",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  btText: {
    color: "#FFFF"
  },
  container: {
    paddingTop: 10,
    flex: 1,
    color: "red",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
