import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
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

export const CreatePostsScreen = ({ navigation }) => {
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
              source={require("../Screens/images/Content-Block.png")}
            />
            <View style={styles.takePhotoOut}>
              <MaterialIcons name="camera-alt" size={32} color="#BDBDBD" />
            </View>
            <Text style={{ color: "#BDBDBD" }}>Завантажте фото</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.inputText}
                placeholder="Назва..."
                keyboardType="default"
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
              // onPress={kayBoardHide}
            >
              <Text
                style={styles.textBtn}
                onPress={() => navigation.navigate("PostScreen")}
              >
                Опубліковати
              </Text>
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
  textPub: {
    fontFamily: "Roboto-bold",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    // textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperPub: { paddingTop: 27 },
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
    backgroundColor: "white",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    left: 140,
    top: 90,
  },
  imgFoto: {
    position: "relative",
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
