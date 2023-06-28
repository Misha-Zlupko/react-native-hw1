import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useState } from "react";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./Screens/LoginScreen";

import { StyleSheet, View, Platform, Keyboard } from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const MainStack = createStackNavigator();

export default App = () => {
  const [state, setstate] = useState(initialState);
  const [isShowBtn, setIsShowBtn] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const kayBoardHide = () => {
    setIsShowBtn(true);
    Keyboard.dismiss();
    console.log(state);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainStack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStack.Screen
            name="Registration"
            component={RegistrationScreen}
          />
          <MainStack.Screen name="Login" component={LoginScreen} />
        </MainStack.Navigator>
      </View>
    </NavigationContainer>
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
      android: { justifyContent: "flex-end" },
    }),
  },

  textReg: {
    color: "#212121",
    fontFamily: "Roboto-medium",
    fontSize: 30,
    lineHeight: 35,
    marginLeft: 100,
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
    paddingBottom: 82,
    justifyContent: "center",
    marginTop: 90,
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
    // bottom: -60,
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
