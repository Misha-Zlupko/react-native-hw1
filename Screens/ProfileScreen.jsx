import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { AntDesign, FontAwesome5, Feather, Ionicons } from "@expo/vector-icons";

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

export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <ImageBackground
          style={styles.imageBg}
          source={require("../Screens/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingContainer}
          >
            <View
              style={{
                ...styles.bgForm,
                // paddingBottom: isShowBtn ? 0 : 0,
              }}
            >
              <View style={styles.form}>
                <View>
                  <Image
                    source={require("../Screens/images/Rectangle-44.png")}
                    style={styles.mgFoto}
                  />
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#FF6C00"
                    style={styles.addIcon}
                  />
                </View>
                <Text style={styles.textReg}>Natali Romanova</Text>
              </View>
              <View style={styles.wrapperPublic}>
                <Image
                  style={styles.imgFoto}
                  source={require("../Screens/images/Rectangle-23.png")}
                />
                <Text style={styles.namePub}>Ліс</Text>
                <View style={styles.wrapperBtnPost}>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      marginRight: 5,
                      alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <FontAwesome5 name="comment" size={24} color="#FF6C00" />
                    <Text style={styles.comentText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      marginRight: "auto",
                      marginLeft: 20,
                      alignItems: "center",
                    }}
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <AntDesign name="like2" size={24} color="#FF6C00" />
                    <Text>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.locationInfo}
                    onPress={() => navigation.navigate("Map")}
                  >
                    <Feather name="map-pin" size={24} color="#BDBDBD" />
                    <Text style={styles.loctionText}>Location</Text>
                    <View style={styles.underline}></View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.footer}>
                <View style={styles.line}></View>
                <View style={styles.wrapperBtns}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("PostScreen");
                    }}
                  >
                    <Ionicons name="ios-grid-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => {
                      navigation.navigate("ProfileScreen");
                    }}
                  >
                    <Feather name="user" size={24} color={"#fff"} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("CreatePostsScreen");
                    }}
                  >
                    <Ionicons name="add" size={24} color={"black"} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  footer: {
    justifyContent: "flex-end",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    ...Platform.select({
      ios: { justifyContent: "flex-start" },
      android: { justifyContent: "flex-start" },
    }),
  },
  btnAdd: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperBtns: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    gap: 30,
    marginBottom: 23,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: "grey",
    marginTop: 10,
  },
  wrapperPublic: {
    marginTop: 32,
    marginBottom: 62,
    marginLeft: "auto",
    marginRight: "auto",
  },
  wrapperBtnPost: {
    flexDirection: "row",
  },
  textReg: {
    color: "#212121",
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 35,
    marginLeft: "auto",
    marginRight: "auto",
  },
  namePub: {
    marginTop: 10,
    marginBottom: 10,
  },
  locationInfo: {
    flexDirection: "row",
    gap: 5,
  },
  commentsInfo: {
    flexDirection: "row",
    gap: 5,
  },
  locationText: {
    fontFamily: "Roboto-bold",
    marginRight: 5,
  },
  form: {
    marginHorizontal: 16,
    paddingTop: 92,
  },
  bgForm: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: 160,
    height: "100%",
  },
  mgFoto: {
    bottom: 60,
    marginLeft: 110,
    position: "absolute",
  },
  addIcon: {
    position: "relative",
    top: -80,
    left: 215,
  },
});
