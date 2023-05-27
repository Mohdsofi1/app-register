import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop: 5,
        backgroundColor: "#fef08a",
      }}
    >
      <Pressable
        onPress={() => props.navigation.navigate("Register")}
        style={{
          width: 390,
          height: 60,
          // borderWidth: 2,
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: 5,
          paddingLeft: 5,
          marginTop: 10,
          backgroundColor: "#fef9c3",
        }}
      >
        <Text style={{ fontSize: 20 }}>Pre-register</Text>
        <AntDesign name="pluscircleo" size={36} color="black" />
      </Pressable>
    </View>
  );
}
export default HomeScreen;
