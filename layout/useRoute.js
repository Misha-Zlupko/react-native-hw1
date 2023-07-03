import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "../Screens/RegistrationScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { PostScreen } from "../Screens/PostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MapScreen } from "../Screens/MapScreen";
import { CommentsScreen } from "../Screens/CommentsScreen";

const MainStack = createStackNavigator();
const AuthStack = createBottomTabNavigator();

export const useRoute = (isAuth) => {
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
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
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
      <MainStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
