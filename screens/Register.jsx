import { useEffect, useState } from "react";
import { View, TextInput, Button, Pressable, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function RegisterScreen(props) {
  const [Name, setName] = useState("");
  const [NoCarPlate, setNoCarPlate] = useState("");
  const [DriveLicense, setDriveLicense] = useState("");
  const [NoOfVisitor, setNoOfVisitor] = useState("");
  const [ArrivalDate, setArrivalDate] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [NoHouse, setNoHouse] = useState("");
  const [HostName, setHostName] = useState("");
  const [VehicleType, setVehicleType] = useState("");
  const [CaptureImage, setCaptureImage] = useState(null);
  const navigation = useNavigation();

  // function handleNameChange(text) {
  //   setName(text);
  // }
  // function handleVehicleTypeChange(text) {
  //   setVehicleType(text);
  // }
  // function handleNoCarPlateChange(text) {
  //   setNoCarPlate(text);
  // }
  // function handleDriveLicenseChange(text) {
  //   setDriveLicense(text);
  // }
  // function handleNoOfVisitorChange(text) {
  //   setNoOfVisitor(text);
  // }
  // function handleArrivalDateChange(text) {
  //   setArrivalDate(text);
  // }
  // function handleArrivalTimeChange(text) {
  //   setArrivalTime(text);
  // }
  // function handleNoHouseChange(text) {
  //   setNoHouse(text);
  // }
  // function handleHostNameChange(text) {
  //   setHostName(text);
  // }
  // function HandleSubmit() {
  //   //   navigation.navigate("VisitorList", { Name });
  //   //   //Handle form submission
  //   console.log(Name);
  //   console.log(VehicleType);
  //   console.log(NoCarPlate);
  //   console.log(DriveLicense);
  //   console.log(NoOfVisitor);
  //   console.log(ArrivalDate);
  //   console.log(ArrivalTime);
  //   console.log(NoHouse);
  //   console.log(HostName);
  // }

  useEffect(() => {
    if (props.route.params?.image) {
      setCaptureImage(props.route.params?.image);
    }
  }, [props.route.params?.image]);

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
          height: "90%",
          borderRadius: 10,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "white",
          backgroundColor: "#fef9c3",
        }}
      >
        {CaptureImage ? (
          <Image
            source={{ uri: CaptureImage }}
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
          />
        ) : (
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
          >
            <Pressable onPress={() => props.navigation.navigate("Camera")}>
              <AntDesign name="pluscircleo" size={30} color="black" />
            </Pressable>
          </View>
        )}
        <View style={{ height: 30, width: "80%", marginTop: 10 }}>
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter Your Name"
            onChangeText={(userName) => setName(userName)}
            value={Name}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter Your Vehicle Type"
            onChangeText={(userVehicleType) => setVehicleType(userVehicleType)}
            value={VehicleType}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your no car plate"
            onChangeText={(userNoCarPlate) => setNoCarPlate(userNoCarPlate)}
            value={NoCarPlate}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your drive license"
            onChangeText={(userDriveLicense) =>
              setDriveLicense(userDriveLicense)
            }
            value={DriveLicense}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your no of visitor"
            onChangeText={(userNoOfVisitor) => setNoOfVisitor(userNoOfVisitor)}
            value={NoOfVisitor}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your arrival date"
            onChangeText={(userArrivalDate) => setArrivalDate(userArrivalDate)}
            value={ArrivalDate}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your arrival time"
            onChangeText={(userArrivalTime) => setArrivalTime(userArrivalTime)}
            value={ArrivalTime}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your no house"
            onChangeText={(userNoHouse) => setNoHouse(userNoHouse)}
            value={NoHouse}
          />
          <TextInput
            style={{ marginBottom: 10 }}
            placeholder="Enter your host name"
            onChangeText={(userHostName) => setHostName(userHostName)}
            value={HostName}
          />
          <Pressable
            style={{
              height: 30,
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
            }}
            title="sumbit"
            mode="contained"
            onPress={() =>
              navigation.navigate("VisitorList", {
                paramKey2: Name,
                paramKey3: VehicleType,
                paramKey4: NoCarPlate,
                paramKey5: DriveLicense,
                paramKey6: NoOfVisitor,
                paramKey7: ArrivalDate,
                paramKey8: ArrivalTime,
                paramKey9: NoHouse,
                paramKey10: HostName,
              })
            }
          >
            <Text>Sumbit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default RegisterScreen;

// function RegisterScreen() {
//   return (
//     <View>
//       <Text>Name</Text>
//       <Text>Car Plate No</Text>
//       <Text>Drive License</Text>
//       <Text>No of Visitor</Text>
//       <Text>Arrival Date</Text>
//       <Text>Arrival Time</Text>
//       <Text>No House</Text>
//       <Text>Host</Text>
//     </View>
//   );
// }
// export default RegisterScreen;
