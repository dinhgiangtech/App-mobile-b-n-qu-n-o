import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import data from "../services/Products";

import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Header from "../components/Header";

const Stack = createStackNavigator();
function ItemList({navigation,data}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detail",{id:data.id})}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{ uri: data.thumbImage }} />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{data.name}</Text>
          <Text style={styles.text}>
            {"Price: " + data.price + " VND"}
          </Text>
          <Text style={styles.text}>{"Color: " + data.colour}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default class List extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ItemList navigation={this.props.navigation} data={item} />}
        />
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
    width: 100,
    height: 150,
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
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#fff"
  },
  content: {
    marginLeft: 10,
    marginTop: 20
  },
  text: {
    marginBottom: 10,
    fontSize: 15
  }
});
