import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function CameraScreen(props) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  // code take pitcure
  const handleCapture = async () => {
    if (cameraRef.current && isCameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      setImageUri(photo.uri);
    }
  };
  useEffect(() => {
    console.log(imageUri);
    if (imageUri) {
      props.navigation.navigate({
        name: "Register",
        params: { image: imageUri },
      });
    }
  }, [imageUri]);

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // code flip camera
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        onCameraReady={handleCameraReady}
        type={type}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={{}}>
              <MaterialIcons
                name="flip-camera-android"
                size={40}
                color="black"
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCapture}
            disabled={!isCameraReady}
          >
            <AntDesign name="camerao" size={40} color="black" />
          </TouchableOpacity>
        </View>
      </Camera>
      {/* {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
