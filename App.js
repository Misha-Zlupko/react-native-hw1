import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { useState } from "react";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./Screens/LoginScreen";
import { PostScreen } from "./Screens/PostsScreen";
import { StyleSheet, View } from "react-native";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "./Screens/MapScreen";

const MainStack = createStackNavigator();
const AuthStack = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{ headerShown: false }}
      ></MainStack.Screen>
      <MainStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  const routing = useRoute({});

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
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
          <MainStack.Screen
            name="CreatePostsScreen"
            component={CreatePostsScreen}
          />
          <MainStack.Screen
            name="PostScreen"
            component={PostScreen}
          ></MainStack.Screen>
          <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
        </MainStack.Navigator>
      </View> */}
      {routing}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
