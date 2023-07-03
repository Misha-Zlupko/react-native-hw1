import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { AntDesign, MaterialIcons, Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { storage, db } from "../firebace/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [foto, setFoto] = useState(null);
  const [coments, setComents] = useState("");
  const isFocused = useIsFocused();
  const [location, setLocation] = useState(null);

  const userId = useSelector((state) => state.auth.userId);
  const logIn = useSelector((state) => state.auth.logIn);

  const takePhoto = async () => {
    const foto = await camera.takePictureAsync();
    setFoto(foto.uri);
  };

  const sendFoto = () => {
    // uploadPhotoToServer();
    uploadPotsToServer();
    navigation.navigate("PostScreen");
    // navigation.navigate("PostScreen", { foto, location });
  };

  const uploadPotsToServer = async () => {
    try {
      const photo = await uploadPhotoToServer();
      const docRef = await addDoc(collection(db, "posts"), {
        photo,
        coments,
        location,
        userId,
        logIn,
      });
      console.log("Document added successfully:", docRef.id);
    } catch (error) {
      console.log("Error adding document:", error);
    }
  };
  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(foto);
      const file = await response.blob();
      const uniquePostId = Date.now().toString();
      const storageRef = ref(storage, `postImage/${uniquePostId}`);

      await uploadBytes(storageRef, file);
      console.log("Photo uploaded successfully!");

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL; // Return the download URL of the photo
    } catch (error) {
      console.log("Error uploading photo:", error);
      return null; // Return null in case of error
    }
  };
  // const uploadPhotoToServer = async () => {
  //   try {
  //     const response = await fetch(foto);
  //     const file = await response.blob();
  //     const uniquePostId = Date.now().toString();
  //     const storageRef = ref(storage, `postImage/${uniquePostId}`);

  //     await uploadBytes(storageRef, file);
  //     console.log("Photo uploaded successfully!");

  //     const downloadURL = await getDownloadURL(storageRef); // Исправленная строка
  //     console.log(downloadURL);
  //     // return downloadURL;
  //     // navigation.navigate("PostScreen", { foto: downloadURL, location });
  //   } catch (error) {
  //     console.log("Error uploading photo:", error);
  //   }
  // };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    setFoto(null);
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPub}>
        <View style={styles.wrapperLogPub}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PostScreen");
            }}
          >
            <AntDesign
              name="arrowleft"
              size={24}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>

          <Text style={styles.textPub}>Створити публікацію</Text>
        </View>
        <View style={styles.line}></View>
      </View>

      <View style={styles.main}>
        <View style={styles.wrapperProf}>
          <View>
            <Image
              style={styles.imgFoto}
              source={
                // { uri: foto }
                foto
                  ? { uri: foto }
                  : require("../Screens/images/Content-Block.png")
              }
            />
            <View style={styles.takePhotoOut}>
              <MaterialIcons name="camera-alt" size={32} color="#BDBDBD" />
            </View>
            {!foto && (
              <Camera style={styles.camera} ref={setCamera}>
                <TouchableOpacity
                  style={styles.cnapContainer}
                  onPress={takePhoto}
                >
                  <View style={styles.takePhoto}>
                    <MaterialIcons
                      name="camera-alt"
                      size={32}
                      color="#BDBDBD"
                    />
                  </View>
                </TouchableOpacity>
              </Camera>
            )}
            <Text style={{ color: "#BDBDBD" }}>Завантажте фото</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputText}
                placeholder="Назва..."
                keyboardType="default"
                onChangeText={setComents}
              />
            </View>
            <View
              style={{
                ...styles.inputBox,
                flexDirection: "row",
                marginBottom: 32,
              }}
            >
              <Feather name="map-pin" size={18} color="#BDBDBD" />
              <TextInput
                style={styles.inputText}
                //   onChangeText={setLocality}
                //   value={locality}
                placeholder="Місцевість..."
                keyboardType="default"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnReg}
              onPress={sendFoto}
            >
              <Text style={styles.textBtn}>Опубліковати</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.wrapperFootBtn}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    width: 343,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderRadius: 10,
  },
  cnapContainer: { width: 70, height: 70, borderColor: "red", color: "white" },
  textPub: {
    fontFamily: "Roboto-bold",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    // textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperPub: { paddingTop: 45 },
  btnReg: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
    alignItems: "center",
  },

  form: {
    marginTop: 36,
  },
  line: {
    height: 0.7,
    backgroundColor: "grey",
    marginTop: 10,
  },
  wrapperLogPub: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
  },
  main: {
    marginHorizontal: 16,
    marginBottom: "auto",
  },
  wrapperProf: {
    marginTop: 32,

    marginLeft: 9,
  },
  takePhotoOut: {
    marginBottom: 20,
    backgroundColor: "#fff",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    left: 140,
    top: 90,
    backgroundColor: "#FFFFFF4D",
  },
  takePhoto: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF4D",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    // left: 140,
    // top: 90,
  },
  imgFoto: {
    width: 343,
    height: 240,
    position: "relative",
    borderRadius: 10,
  },
  inputText: {
    fontFamily: "Roboto-regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputBox: {
    height: 50,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 15,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    marginHorizontal: 16,
  },
  wrapperInp: { marginTop: 36 },
  wrapperFootBtn: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 32,
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
});
