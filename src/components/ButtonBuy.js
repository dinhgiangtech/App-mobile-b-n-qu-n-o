import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
export default function ButtonBuy({ number, onAddProduct, onSubProduct }) {
  return (
    <>
      {number === 0 && (
        <TouchableOpacity style={styles.container0} onPress={onAddProduct}>
          <Text style={styles.text}>Add to card</Text>
        </TouchableOpacity>
      )}
      {number !== 0 && (
        <View style={styles.container}>
          <TouchableOpacity style={styles.Btt} onPress={onAddProduct}>
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
          <Text style={{color:"#000",}}>{JSON.stringify(number)}</Text>
          <TouchableOpacity style={styles.Btt} onPress={onSubProduct}>
            <Text style={styles.text}>Sub</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container0: {
    width: "100%",
    height: 40,
    borderRadius: 7,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    letterSpacing: 0.3,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    backgroundColor: "#173f5f",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center"
  },
  container: {
    width: "100%",
    height: 40,
    borderRadius: 7,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    letterSpacing: 0.3,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
 
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center"
  },
  Btt: {
    height: 40,
    width: 80,
    backgroundColor: "#173f5f",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7
  },
  text: {
    color: "#fff",
    
  }
});
