import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [state, setstate] = useState(initialState);
  const [isShowBtn, setIsShowBtn] = useState(true);

  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("../fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("../fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("../fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  // useEffect(() => {}, []);

  const kayBoardHide = () => {
    setIsShowBtn(true);
    Keyboard.dismiss();
    console.log(state);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require("../Screens/images/photo-bg.jpg")}
      >
        <TouchableWithoutFeedback onPress={kayBoardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingContainer}
          >
            <View
              style={{
                ...styles.bgForm,
                // bottom: isShowBtn ? 0 : 60,
                // paddingBottom: isShowBtn ? 0 : 0,
              }}
            >
              <View style={styles.form}>
                <View>
                  <Image
                    source={require("../Screens/images/Rectangle-22.png")}
                    style={styles.mgFoto}
                  />
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#FF6C00"
                    style={styles.addIcon}
                  />
                </View>
                <Text style={styles.textReg}>Увійти</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => setIsShowBtn(false)}
                    onChangeText={(value) =>
                      setstate((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.textInp}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    onFocus={() => setIsShowBtn(false)}
                    onChangeText={(value) =>
                      setstate((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.btnReg}
                  onPress={kayBoardHide}
                >
                  <Text style={styles.textBtn}>Зареєстуватися</Text>
                </TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("Registration")}
                  style={{
                    color: "#1B4371",
                    fontFamily: "Roboto-regular",
                    fontSize: 16,
                    marginBottom: 45,
                    marginTop: 16,
                    marginLeft: 50,
                  }}
                >
                  Немає акаунту? Зареєструватися
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    ...Platform.select({
      ios: { justifyContent: "center" },
      android: { justifyContent: "center" },
    }),
  },

  textReg: {
    color: "#212121",
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 35,
    marginLeft: 130,
  },
  textInp: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 6,
    color: "#212121",
    backgroundColor: "#E8E8E8",
    paddingLeft: 15,
    paddingTop: 14,
    paddingBottom: 14,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "left",
  },
  form: {
    marginHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 82,
  },
  inputContainer: {
    marginTop: 16,
  },
  btnReg: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 40,
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Roboto-regular",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
  },
  bgForm: {
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    ...Platform.select({
      ios: { bottom: -170 },
      android: { bottom: -140 },
    }),
  },
  mgFoto: {
    bottom: 60,
    marginLeft: 110,
    position: "absolute",
  },
  addIcon: {
    position: "relative",
    top: -70,
    left: 217,
  },
});
