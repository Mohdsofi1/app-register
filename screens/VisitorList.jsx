import { View, Text } from "react-native";
// import { useState, useEffect } from "react";
import React from "react";

function VisitorListScreen({ route }) {
  return (
    <View
      style={{
        backgroundColor: "#fef08a",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          height: "80%",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#fef9c3",
        }}
      >
        <View
          style={{
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 150,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>

        <View
          style={{
            height: 30,
            width: "80%",
            marginTop: 10,
          }}
        >
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey2}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey3}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey4}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey5}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey6}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey7}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey8}
          </Text>
          <Text style={{ borderBottomWidth: 1, marginBottom: 10 }}>
            {route.params.paramKey9}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default VisitorListScreen;
